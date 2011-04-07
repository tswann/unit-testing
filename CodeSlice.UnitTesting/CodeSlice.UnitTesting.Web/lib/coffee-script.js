﻿/**
 * CoffeeScript Compiler v1.0.1
 * http://coffeescript.org
 *
 * Copyright 2011, Jeremy Ashkenas
 * Released under the MIT License
 */
this.CoffeeScript=function(){function require(a){return require[a]}require["./helpers"]=new function(){var a=this;(function(){var b,c;a.starts=function(a,b,c){return b===a.substr(c,b.length)},a.ends=function(a,b,c){var d;d=b.length;return b===a.substr(a.length-d-(c||0),d)},a.compact=function(a){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b&&e.push(b);return e},a.count=function(a,b){var c,d;c=d=0;if(!b.length)return 1/0;while(d=1+a.indexOf(b,d))c++;return c},a.merge=function(a,c){return b(b({},a),c)},b=a.extend=function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},a.flatten=c=function(a){var b,d,e,f;d=[];for(e=0,f=a.length;e<f;e++)b=a[e],b instanceof Array?d=d.concat(c(b)):d.push(b);return d},a.del=function(a,b){var c;c=a[b],delete a[b];return c},a.last=function(a,b){return a[a.length-(b||0)-1]}}).call(this)},require["./rewriter"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},u=Array.prototype.slice;a.Rewriter=function(){function a(){}a.prototype.rewrite=function(a){this.tokens=a,this.removeLeadingNewlines(),this.removeMidExpressionNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.addImplicitIndentation(),this.tagPostfixConditionals(),this.addImplicitBraces(),this.addImplicitParentheses(),this.ensureBalance(b),this.rewriteClosingParens();return this.tokens},a.prototype.scanTokens=function(a){var b,c,d;d=this.tokens,b=0;while(c=d[b])b+=a.call(this,c,b,d);return!0},a.prototype.detectEnd=function(a,b,c){var f,g,h,i,j;h=this.tokens,f=0;while(g=h[a]){if(f===0&&b.call(this,g,a))return c.call(this,g,a);if(!g||f<0)return c.call(this,g,a-1);if(i=g[0],t.call(e,i)>=0)f+=1;else if(j=g[0],t.call(d,j)>=0)f-=1;a+=1}return a-1},a.prototype.removeLeadingNewlines=function(){var a,b,c,d;d=this.tokens;for(a=0,c=d.length;a<c;a++){b=d[a][0];if(b!=="TERMINATOR")break}if(a)return this.tokens.splice(0,a)},a.prototype.removeMidExpressionNewlines=function(){return this.scanTokens(function(a,b,d){var e;if(a[0]!=="TERMINATOR"||!(e=this.tag(b+1),t.call(c,e)>=0))return 1;d.splice(b,1);return 0})},a.prototype.closeOpenCalls=function(){var a,b;b=function(a,b){var c;return(c=a[0])===")"||c==="CALL_END"||a[0]==="OUTDENT"&&this.tag(b-1)===")"},a=function(a,b){return this.tokens[a[0]==="OUTDENT"?b-1:b][0]="CALL_END"};return this.scanTokens(function(c,d){c[0]==="CALL_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.closeOpenIndexes=function(){var a,b;b=function(a,b){var c;return(c=a[0])==="]"||c==="INDEX_END"},a=function(a,b){return a[0]="INDEX_END"};return this.scanTokens(function(c,d){c[0]==="INDEX_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.addImplicitBraces=function(){var a,b,c,f,g;c=[],f=null,g=0,b=function(a,b){var c,d,e,f,g,h;g=this.tokens.slice(b+1,b+3+1||9e9),c=g[0],f=g[1],e=g[2];if("HERECOMMENT"===(c!=null?c[0]:void 0))return!1;d=a[0];return(d==="TERMINATOR"||d==="OUTDENT")&&((f!=null?f[0]:void 0)!==":"&&((c!=null?c[0]:void 0)!=="@"||(e!=null?e[0]:void 0)!==":"))||d===","&&c&&((h=c[0])!=="IDENTIFIER"&&h!=="NUMBER"&&h!=="STRING"&&h!=="@"&&h!=="TERMINATOR"&&h!=="OUTDENT")},a=function(a,b){return this.tokens.splice(b,0,["}","}",a[2]])};return this.scanTokens(function(g,h,i){var j,k,l,m,n,o,p;if(o=l=g[0],t.call(e,o)>=0){c.push([l==="INDENT"&&this.tag(h-1)==="{"?"{":l,h]);return 1}if(t.call(d,l)>=0){f=c.pop();return 1}if(l!==":"||(j=this.tag(h-2))!==":"&&((p=c[c.length-1])!=null?p[0]:void 0)==="{")return 1;c.push(["{"]),k=j==="@"?h-2:h-1;while(this.tag(k-2)==="HERECOMMENT")k-=2;n=new String("{"),n.generated=!0,m=["{",n,g[2]],m.generated=!0,i.splice(k,0,m),this.detectEnd(h+2,b,a);return 2})},a.prototype.addImplicitParentheses=function(){var a,b;b=!1,a=function(a,b){var c;c=a[0]==="OUTDENT"?b+1:b;return this.tokens.splice(c,0,["CALL_END",")",a[2]])};return this.scanTokens(function(c,d,e){var k,m,n,o,p,q,r,s,u;q=c[0];if(q==="CLASS"||q==="IF")b=!0;r=e.slice(d-1,d+1+1||9e9),o=r[0],m=r[1],n=r[2],k=!b&&q==="INDENT"&&n&&n.generated&&n[0]==="{"&&o&&(s=o[0],t.call(i,s)>=0),p=!1,t.call(l,q)>=0&&(b=!1),o&&!o.spaced&&q==="?"&&(c.call=!0);if(!k&&(!(o!=null?o.spaced:void 0)||!o.call&&!(u=o[0],t.call(i,u)>=0)||t.call(g,q)<0&&(c.spaced||c.newLine||t.call(j,q)<0)))return 1;e.splice(d,0,["CALL_START","(",c[2]]),this.detectEnd(d+1,function(a,b){var c,d;q=a[0];if(!p&&a.fromThen)return!0;if(q==="IF"||q==="ELSE"||q==="->"||q==="=>")p=!0;if((q==="."||q==="?."||q==="::")&&this.tag(b-1)==="OUTDENT")return!0;return!a.generated&&this.tag(b-1)!==","&&t.call(h,q)>=0&&(q!=="INDENT"||this.tag(b-2)!=="CLASS"&&(d=this.tag(b-1),t.call(f,d)<0)&&(!(c=this.tokens[b+1])||!c.generated||c[0]!=="{"))},a),o[0]==="?"&&(o[0]="FUNC_EXIST");return 2})},a.prototype.addImplicitIndentation=function(){return this.scanTokens(function(a,b,c){var d,e,f,g,h,i,j,k;i=a[0];if(i==="TERMINATOR"&&this.tag(b+1)==="THEN"){c.splice(b,1);return 0}if(i==="ELSE"&&this.tag(b-1)!=="OUTDENT"){c.splice.apply(c,[b,0].concat(u.call(this.indentation(a))));return 2}if(i==="CATCH"&&((j=this.tag(b+2))==="OUTDENT"||j==="TERMINATOR"||j==="FINALLY")){c.splice.apply(c,[b+2,0].concat(u.call(this.indentation(a))));return 4}if(t.call(n,i)>=0&&this.tag(b+1)!=="INDENT"&&(i!=="ELSE"||this.tag(b+1)!=="IF")){h=i,k=this.indentation(a),f=k[0],g=k[1],h==="THEN"&&(f.fromThen=!0),f.generated=g.generated=!0,c.splice(b+1,0,f),e=function(a,b){var c;return a[1]!==";"&&(c=a[0],t.call(m,c)>=0)&&(a[0]!=="ELSE"||(h==="IF"||h==="THEN"))},d=function(a,b){return this.tokens.splice(this.tag(b-1)===","?b-1:b,0,g)},this.detectEnd(b+2,e,d),i==="THEN"&&c.splice(b,1);return 1}return 1})},a.prototype.tagPostfixConditionals=function(){var a;a=function(a,b){var c;return(c=a[0])==="TERMINATOR"||c==="INDENT"};return this.scanTokens(function(b,c){var d;if(b[0]!=="IF")return 1;d=b,this.detectEnd(c+1,a,function(a,b){if(a[0]!=="INDENT")return d[0]="POST_"+d[0]});return 1})},a.prototype.ensureBalance=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;d={},f={},m=this.tokens;for(i=0,k=m.length;i<k;i++){h=m[i],g=h[0];for(j=0,l=a.length;j<l;j++){n=a[j],e=n[0],b=n[1],d[e]|=0;if(g===e)d[e]++===0&&(f[e]=h[2]);else if(g===b&&--d[e]<0)throw Error("too many "+h[1]+" on line "+(h[2]+1))}}for(e in d){c=d[e];if(c>0)throw Error("unclosed "+e+" on line "+(f[e]+1))}return this},a.prototype.rewriteClosingParens=function(){var a,b,c;c=[],a={};for(b in k)a[b]=0;return this.scanTokens(function(b,f,g){var h,i,j,l,m,n,o;if(o=m=b[0],t.call(e,o)>=0){c.push(b);return 1}if(t.call(d,m)<0)return 1;if(a[h=k[m]]>0){a[h]-=1,g.splice(f,1);return 0}i=c.pop(),j=i[0],l=k[j];if(m===l)return 1;a[j]+=1,n=[l,j==="INDENT"?i[1]:l],this.tag(f+2)===j?(g.splice(f+3,0,n),c.push(i)):g.splice(f,0,n);return 1})},a.prototype.indentation=function(a){return[["INDENT",2,a[2]],["OUTDENT",2,a[2]]]},a.prototype.tag=function(a){var b;return(b=this.tokens[a])!=null?b[0]:void 0};return a}(),b=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"]],k={},e=[],d=[];for(q=0,r=b.length;q<r;q++)s=b[q],o=s[0],p=s[1],e.push(k[p]=o),d.push(k[o]=p);c=["CATCH","WHEN","ELSE","FINALLY"].concat(d),i=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],g=["IDENTIFIER","NUMBER","STRING","JS","REGEX","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","UNARY","SUPER","@","->","=>","[","(","{","--","++"],j=["+","-"],f=["->","=>","{","[",","],h=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR","INDENT"],n=["ELSE","->","=>","TRY","FINALLY","THEN"],m=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],l=["TERMINATOR","INDENT","OUTDENT"]}).call(this)},require["./lexer"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1};I=require("./rewriter").Rewriter,T=require("./helpers"),P=T.count,S=T.starts,O=T.compact,Q=T.last,a.Lexer=w=function(){function a(){}a.prototype.tokenize=function(a,b){var c;b==null&&(b={}),N.test(a)&&(a="\n"+a),a=a.replace(/\r/g,"").replace(L,""),this.code=a,this.line=b.line||0,this.indent=0,this.indebt=0,this.outdebt=0,this.indents=[],this.tokens=[],c=0;while(this.chunk=a.slice(c))c+=this.identifierToken()||this.commentToken()||this.whitespaceToken()||this.lineToken()||this.heredocToken()||this.stringToken()||this.numberToken()||this.regexToken()||this.jsToken()||this.literalToken();this.closeIndentation();if(b.rewrite===!1)return this.tokens;return(new I).rewrite(this.tokens)},a.prototype.identifierToken=function(){var a,b,c,d,e,h,i,j,k;if(!(e=o.exec(this.chunk)))return 0;d=e[0],c=e[1],a=e[2];if(c==="own"&&this.tag()==="FOR"){this.token("OWN",c);return c.length}b=a||(h=Q(this.tokens))&&!h.spaced&&((j=h[0])==="."||j==="?."||j==="@"||j==="::"),i="IDENTIFIER";if(U.call(s,c)>=0||!b&&U.call(g,c)>=0)i=c.toUpperCase(),i==="WHEN"&&(k=this.tag(),U.call(t,k)>=0)?i="LEADING_WHEN":i==="FOR"?this.seenFor=!0:i==="UNLESS"?i="IF":U.call(M,i)<0?U.call(G,i)>=0&&(i!=="INSTANCEOF"&&this.seenFor?(i="FOR"+i,this.seenFor=!1):(i="RELATION",this.value()==="!"&&(this.tokens.pop(),c="!"+c))):i="UNARY";U.call(r,c)>=0&&(b?(i="IDENTIFIER",c=new String(c),c.reserved=!0):U.call(H,c)>=0&&this.identifierError(c)),b||(f.hasOwnProperty(c)&&(c=f[c]),i=function(){switch(c){case"!":return"UNARY";case"==":case"!=":return"COMPARE";case"&&":case"||":return"LOGIC";case"true":case"false":case"null":case"undefined":return"BOOL";case"break":case"continue":case"debugger":return"STATEMENT";default:return i}}()),this.token(i,c),a&&this.token(":",":");return d.length},a.prototype.numberToken=function(){var a,b;if(!(a=D.exec(this.chunk)))return 0;b=a[0],this.token("NUMBER",b);return b.length},a.prototype.stringToken=function(){var a,b;switch(this.chunk.charAt(0)){case"'":if(!(a=K.exec(this.chunk)))return 0;this.token("STRING",(b=a[0]).replace(y,"\\\n"));break;case'"':if(!(b=this.balancedString(this.chunk,'"')))return 0;0<b.indexOf("#{",1)?this.interpolateString(b.slice(1,-1)):this.token("STRING",this.escapeLines(b));break;default:return 0}this.line+=P(b,"\n");return b.length},a.prototype.heredocToken=function(){var a,b,c,d;if(!(c=k.exec(this.chunk)))return 0;b=c[0],d=b.charAt(0),a=this.sanitizeHeredoc(c[2],{quote:d,indent:null}),d!=='"'||0>a.indexOf("#{")?this.token("STRING",this.makeString(a,d,!0)):this.interpolateString(a,{heredoc:!0}),this.line+=P(b,"\n");return b.length},a.prototype.commentToken=function(){var a,b,c;if(!(c=this.chunk.match(h)))return 0;a=c[0],b=c[1],this.line+=P(a,"\n"),b&&(this.token("HERECOMMENT",this.sanitizeHeredoc(b,{herecomment:!0,indent:Array(this.indent+1).join(" ")})),this.token("TERMINATOR","\n"));return a.length},a.prototype.jsToken=function(){var a,b;if(this.chunk.charAt(0)!=="`"||!(a=q.exec(this.chunk)))return 0;this.token("JS",(b=a[0]).slice(1,-1));return b.length},a.prototype.regexToken=function(){var a,b,c,d;if(this.chunk.charAt(0)!=="/")return 0;if(a=m.exec(this.chunk))return this.heregexToken(a);b=Q(this.tokens);if(b&&(d=b[0],U.call(b.spaced?A:B,d)>=0))return 0;if(!(a=F.exec(this.chunk)))return 0;c=a[0],this.token("REGEX",c==="//"?"/(?:)/":c);return c.length},a.prototype.heregexToken=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o;d=a[0],b=a[1],c=a[2];if(0>b.indexOf("#{")){e=b.replace(n,"").replace(/\//g,"\\/"),this.token("REGEX","/"+(e||"(?:)")+"/"+c);return d.length}this.token("IDENTIFIER","RegExp"),this.tokens.push(["CALL_START","("]),g=[],k=this.interpolateString(b,{regex:!0});for(i=0,j=k.length;i<j;i++){l=k[i],f=l[0],h=l[1];if(f==="TOKENS")g.push.apply(g,h);else{if(!(h=h.replace(n,"")))continue;h=h.replace(/\\/g,"\\\\"),g.push(["STRING",this.makeString(h,'"',!0)])}g.push(["+","+"])}g.pop(),((m=g[0])!=null?m[0]:void 0)!=="STRING"&&this.tokens.push(["STRING",'""'],["+","+"]),(o=this.tokens).push.apply(o,g),c&&this.tokens.push([",",","],["STRING",'"'+c+'"']),this.token(")",")");return d.length},a.prototype.lineToken=function(){var a,b,c,d,e,f;if(!(c=z.exec(this.chunk)))return 0;b=c[0],this.line+=P(b,"\n"),e=Q(this.tokens,1),f=b.length-1-b.lastIndexOf("\n"),d=this.unfinished();if(f-this.indebt===this.indent){d?this.suppressNewlines():this.newlineToken();return b.length}if(f>this.indent){if(d){this.indebt=f-this.indent,this.suppressNewlines();return b.length}a=f-this.indent+this.outdebt,this.token("INDENT",a),this.indents.push(a),this.outdebt=this.indebt=0}else this.indebt=0,this.outdentToken(this.indent-f,d);this.indent=f;return b.length},a.prototype.outdentToken=function(a,b,c){var d,e;while(a>0)e=this.indents.length-1,this.indents[e]===void 0?a=0:this.indents[e]===this.outdebt?(a-=this.outdebt,this.outdebt=0):this.indents[e]<this.outdebt?(this.outdebt-=this.indents[e],a-=this.indents[e]):(d=this.indents.pop()-this.outdebt,a-=d,this.outdebt=0,this.token("OUTDENT",d));d&&(this.outdebt-=a),this.tag()!=="TERMINATOR"&&!b&&this.token("TERMINATOR","\n");return this},a.prototype.whitespaceToken=function(){var a,b,c;if(!(a=N.exec(this.chunk))&&!(b=this.chunk.charAt(0)==="\n"))return 0;c=Q(this.tokens),c&&(c[a?"spaced":"newLine"]=!0);return a?a[0].length:0},a.prototype.newlineToken=function(){this.tag()!=="TERMINATOR"&&this.token("TERMINATOR","\n");return this},a.prototype.suppressNewlines=function(){this.value()==="\\"&&this.tokens.pop();return this},a.prototype.literalToken=function(){var a,b,c,f,g,h,k,l;(a=E.exec(this.chunk))?(f=a[0],e.test(f)&&this.tagParameters()):f=this.chunk.charAt(0),c=f,b=Q(this.tokens);if(f==="="&&b){!b[1].reserved&&(g=b[1],U.call(r,g)>=0)&&this.assignmentError();if((h=b[1])==="||"||h==="&&"){b[0]="COMPOUND_ASSIGN",b[1]+="=";return f.length}}if(f===";")c="TERMINATOR";else if(U.call(x,f)<0)if(U.call(i,f)<0)if(U.call(j,f)<0)if(U.call(M,f)<0)if(U.call(J,f)<0){if(U.call(v,f)>=0||f==="?"&&(b!=null?b.spaced:void 0))c="LOGIC";else if(b&&!b.spaced)if(f==="("&&(k=b[0],U.call(d,k)>=0))b[0]==="?"&&(b[0]="FUNC_EXIST"),c="CALL_START";else if(f==="["&&(l=b[0],U.call(p,l)>=0)){c="INDEX_START";switch(b[0]){case"?":b[0]="INDEX_SOAK";break;case"::":b[0]="INDEX_PROTO"}}}else c="SHIFT";else c="UNARY";else c="COMPOUND_ASSIGN";else c="COMPARE";else c="MATH";this.token(c,f);return f.length},a.prototype.sanitizeHeredoc=function(a,b){var c,d,e,f,g;e=b.indent,d=b.herecomment;if(d&&0>a.indexOf("\n"))return a;if(!d)while(f=l.exec(a)){c=f[1];if(e===null||0<(g=c.length)&&g<e.length)e=c}e&&(a=a.replace(RegExp("\\n"+e,"g"),"\n")),d||(a=a.replace(/^\n/,""));return a},a.prototype.tagParameters=function(){var a,b,c,d;if(this.tag()!==")")return this;b=[],d=this.tokens,a=d.length,d[--a][0]="PARAM_END";while(c=d[--a])switch(c[0]){case")":b.push(c);break;case"(":case"CALL_START":if(b.length)b.pop();else{c[0]="PARAM_START";return this}}return this},a.prototype.closeIndentation=function(){return this.outdentToken(this.indent)},a.prototype.identifierError=function(a){throw SyntaxError('Reserved word "'+a+'" on line '+(this.line+1))},a.prototype.assignmentError=function(){throw SyntaxError('Reserved word "'+this.value()+'" on line '+(this.line+1)+" can't be assigned")},a.prototype.balancedString=function(a,b){var c,d,e,f,g;f=[b];for(c=1,g=a.length;1<=g?c<g:c>g;1<=g?c+=1:c-=1){switch(d=a.charAt(c)){case"\\":c++;continue;case b:f.pop();if(!f.length)return a.slice(0,c+1);b=f[f.length-1];continue}b!=="}"||d!=='"'&&d!=="'"?b==="}"&&d==="{"?f.push(b="}"):b==='"'&&e==="#"&&d==="{"&&f.push(b="}"):f.push(b=d),e=d}throw new Error("missing "+f.pop()+", starting on line "+(this.line+1))},a.prototype.interpolateString=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c==null&&(c={}),e=c.heredoc,m=c.regex,o=[],l=0,f=-1;while(j=b.charAt(f+=1)){if(j==="\\"){f+=1;continue}if(j!=="#"||b.charAt(f+1)!=="{"||!(d=this.balancedString(b.slice(f+1),"}")))continue;l<f&&o.push(["NEOSTRING",b.slice(l,f)]),g=d.slice(1,-1);if(g.length){k=(new a).tokenize(g,{line:this.line,rewrite:!1}),k.pop(),((r=k[0])!=null?r[0]:void 0)==="TERMINATOR"&&k.shift();if(i=k.length)i>1&&(k.unshift(["(","("]),k.push([")",")"])),o.push(["TOKENS",k])}f+=d.length,l=f+1}f>l&&l<b.length&&o.push(["NEOSTRING",b.slice(l)]);if(m)return o;if(!o.length)return this.token("STRING",'""');o[0][0]!=="NEOSTRING"&&o.unshift(["",""]),(h=o.length>1)&&this.token("(","(");for(f=0,q=o.length;f<q;f++)s=o[f],n=s[0],p=s[1],f&&this.token("+","+"),n==="TOKENS"?(t=this.tokens).push.apply(t,p):this.token("STRING",this.makeString(p,'"',e));h&&this.token(")",")");return o},a.prototype.token=function(a,b){return this.tokens.push([a,b,this.line])},a.prototype.tag=function(a,b){var c;return(c=Q(this.tokens,a))&&(b?c[0]=b:c[0])},a.prototype.value=function(a,b){var c;return(c=Q(this.tokens,a))&&(b?c[1]=b:c[1])},a.prototype.unfinished=function(){var a,c;return u.test(this.chunk)||(a=Q(this.tokens,1))&&a[0]!=="."&&(c=this.value())&&!c.reserved&&C.test(c)&&!e.test(c)&&!b.test(this.chunk)},a.prototype.escapeLines=function(a,b){return a.replace(y,b?"\\n":"")},a.prototype.makeString=function(a,b,c){if(!a)return b+b;a=a.replace(/\\([\s\S])/g,function(a,c){return c==="\n"||c===b?c:a}),a=a.replace(RegExp(""+b,"g"),"\\$&");return b+this.escapeLines(a,c)+b};return a}(),s=["true","false","null","this","new","delete","typeof","in","instanceof","return","throw","break","continue","debugger","if","else","switch","for","while","do","try","catch","finally","class","extends","super"],g=["undefined","then","unless","until","loop","of","by","when"];for(R in f={and:"&&",or:"||",is:"==",isnt:"!=",not:"!",yes:"true",no:"false",on:"true",off:"false"})g.push(R);H=["case","default","function","var","void","with","const","let","enum","export","import","native","__hasProp","__extends","__slice","__bind","__indexOf"],r=s.concat(H),a.RESERVED=H.concat(s).concat(g),o=/^([$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)([^\n\S]*:(?!:))?/,D=/^0x[\da-f]+|^(?:\d+(\.\d+)?|\.\d+)(?:e[+-]?\d+)?/i,k=/^("""|''')([\s\S]*?)(?:\n[^\n\S]*)?\1/,E=/^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/,N=/^[^\n\S]+/,h=/^###([^#][\s\S]*?)(?:###[^\n\S]*|(?:###)?$)|^(?:\s*#(?!##[^#]).*)+/,e=/^[-=]>/,z=/^(?:\n[^\n\S]*)+/,K=/^'[^\\']*(?:\\.[^\\']*)*'/,q=/^`[^\\`]*(?:\\.[^\\`]*)*`/,F=/^\/(?!\s)[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/[imgy]{0,4}(?!\w)/,m=/^\/{3}([\s\S]+?)\/{3}([imgy]{0,4})(?!\w)/,n=/\s+(?:#.*)?/g,y=/\n/g,l=/\n+([^\n\S]*)/g,b=/^\s*@?([$A-Za-z_][$\w\x7f-\uffff]*|['"].*['"])[^\n\S]*?[:=][^:=>]/,u=/^\s*(?:,|\??\.(?!\.)|::)/,L=/\s+$/,C=/^(?:[-+*&|\/%=<>!.\\][<>=&|]*|and|or|is(?:nt)?|n(?:ot|ew)|delete|typeof|instanceof)$/,j=["-=","+=","/=","*=","%=","||=","&&=","?=","<<=",">>=",">>>=","&=","^=","|="],M=["!","~","NEW","TYPEOF","DELETE","DO"],v=["&&","||","&","|","^"],J=["<<",">>",">>>"],i=["==","!=","<",">","<=",">="],x=["*","/","%"],G=["IN","OF","INSTANCEOF"],c=["TRUE","FALSE","NULL","UNDEFINED"],A=["NUMBER","REGEX","BOOL","++","--","]"],B=A.concat(")","}","THIS","IDENTIFIER","STRING"),d=["IDENTIFIER","STRING","REGEX",")","]","}","?","::","@","THIS","SUPER"],p=d.concat("NUMBER","BOOL"),t=["INDENT","OUTDENT","TERMINATOR"]}).call(this)},require["./parser"]=new function(){var a=this,b=function(){var a={trace:function b(){},yy:{},symbols_:{error:2,Root:3,Body:4,Block:5,TERMINATOR:6,Line:7,Expression:8,Statement:9,Return:10,Throw:11,Comment:12,STATEMENT:13,Value:14,Invocation:15,Code:16,Operation:17,Assign:18,If:19,Try:20,While:21,For:22,Switch:23,Class:24,INDENT:25,OUTDENT:26,Identifier:27,IDENTIFIER:28,AlphaNumeric:29,NUMBER:30,STRING:31,Literal:32,JS:33,REGEX:34,BOOL:35,Assignable:36,"=":37,AssignObj:38,ObjAssignable:39,":":40,ThisProperty:41,RETURN:42,HERECOMMENT:43,PARAM_START:44,ParamList:45,PARAM_END:46,FuncGlyph:47,"->":48,"=>":49,OptComma:50,",":51,Param:52,ParamVar:53,"...":54,Array:55,Object:56,Splat:57,SimpleAssignable:58,Accessor:59,Parenthetical:60,Range:61,This:62,".":63,"?.":64,"::":65,Index:66,Slice:67,INDEX_START:68,INDEX_END:69,INDEX_SOAK:70,INDEX_PROTO:71,"{":72,AssignList:73,"}":74,CLASS:75,EXTENDS:76,OptFuncExist:77,Arguments:78,SUPER:79,FUNC_EXIST:80,CALL_START:81,CALL_END:82,ArgList:83,THIS:84,"@":85,"[":86,"]":87,RangeDots:88,"..":89,Arg:90,SimpleArgs:91,TRY:92,Catch:93,FINALLY:94,CATCH:95,THROW:96,"(":97,")":98,WhileSource:99,WHILE:100,WHEN:101,UNTIL:102,Loop:103,LOOP:104,ForBody:105,FOR:106,ForStart:107,ForSource:108,ForVariables:109,OWN:110,ForValue:111,FORIN:112,FOROF:113,BY:114,SWITCH:115,Whens:116,ELSE:117,When:118,LEADING_WHEN:119,IfBlock:120,IF:121,POST_IF:122,UNARY:123,"-":124,"+":125,"--":126,"++":127,"?":128,MATH:129,SHIFT:130,COMPARE:131,LOGIC:132,RELATION:133,COMPOUND_ASSIGN:134,$accept:0,$end:1},terminals_:{2:"error",6:"TERMINATOR",13:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",31:"STRING",33:"JS",34:"REGEX",35:"BOOL",37:"=",40:":",42:"RETURN",43:"HERECOMMENT",44:"PARAM_START",46:"PARAM_END",48:"->",49:"=>",51:",",54:"...",63:".",64:"?.",65:"::",68:"INDEX_START",69:"INDEX_END",70:"INDEX_SOAK",71:"INDEX_PROTO",72:"{",74:"}",75:"CLASS",76:"EXTENDS",79:"SUPER",80:"FUNC_EXIST",81:"CALL_START",82:"CALL_END",84:"THIS",85:"@",86:"[",87:"]",89:"..",92:"TRY",94:"FINALLY",95:"CATCH",96:"THROW",97:"(",98:")",100:"WHILE",101:"WHEN",102:"UNTIL",104:"LOOP",106:"FOR",110:"OWN",112:"FORIN",113:"FOROF",114:"BY",115:"SWITCH",117:"ELSE",119:"LEADING_WHEN",121:"IF",122:"POST_IF",123:"UNARY",124:"-",125:"+",126:"--",127:"++",128:"?",129:"MATH",130:"SHIFT",131:"COMPARE",132:"LOGIC",133:"RELATION",134:"COMPOUND_ASSIGN"},productions_:[0,[3,0],[3,1],[3,2],[4,1],[4,3],[4,2],[7,1],[7,1],[9,1],[9,1],[9,1],[9,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[5,2],[5,3],[27,1],[29,1],[29,1],[32,1],[32,1],[32,1],[32,1],[18,3],[18,5],[38,1],[38,3],[38,5],[38,1],[39,1],[39,1],[39,1],[10,2],[10,1],[12,1],[16,5],[16,2],[47,1],[47,1],[50,0],[50,1],[45,0],[45,1],[45,3],[52,1],[52,2],[52,3],[53,1],[53,1],[53,1],[53,1],[57,2],[58,1],[58,2],[58,2],[58,1],[36,1],[36,1],[36,1],[14,1],[14,1],[14,1],[14,1],[14,1],[59,2],[59,2],[59,2],[59,1],[59,1],[59,1],[66,3],[66,2],[66,2],[56,4],[73,0],[73,1],[73,3],[73,4],[73,6],[24,1],[24,2],[24,3],[24,4],[24,2],[24,3],[24,4],[24,5],[15,3],[15,3],[15,1],[15,2],[77,0],[77,1],[78,2],[78,4],[62,1],[62,1],[41,2],[55,2],[55,4],[88,1],[88,1],[61,5],[67,5],[67,4],[67,4],[83,1],[83,3],[83,4],[83,4],[83,6],[90,1],[90,1],[91,1],[91,3],[20,2],[20,3],[20,4],[20,5],[93,3],[11,2],[60,3],[60,5],[99,2],[99,4],[99,2],[99,4],[21,2],[21,2],[21,2],[21,1],[103,2],[103,2],[22,2],[22,2],[22,2],[105,2],[105,2],[107,2],[107,3],[111,1],[111,1],[111,1],[109,1],[109,3],[108,2],[108,2],[108,4],[108,4],[108,4],[108,6],[108,6],[23,5],[23,7],[23,4],[23,6],[116,1],[116,2],[118,3],[118,4],[120,3],[120,5],[19,1],[19,3],[19,3],[19,3],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,2],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,5],[17,3]],performAction:function c(a,b,c,d,e,f){var g=f.length-1;switch(e){case 1:return this.$=new d.Block;case 2:return this.$=f[g];case 3:return this.$=f[g-1];case 4:this.$=d.Block.wrap([f[g]]);break;case 5:this.$=f[g-2].push(f[g]);break;case 6:this.$=f[g-1];break;case 7:this.$=f[g];break;case 8:this.$=f[g];break;case 9:this.$=f[g];break;case 10:this.$=f[g];break;case 11:this.$=f[g];break;case 12:this.$=new d.Literal(f[g]);break;case 13:this.$=f[g];break;case 14:this.$=f[g];break;case 15:this.$=f[g];break;case 16:this.$=f[g];break;case 17:this.$=f[g];break;case 18:this.$=f[g];break;case 19:this.$=f[g];break;case 20:this.$=f[g];break;case 21:this.$=f[g];break;case 22:this.$=f[g];break;case 23:this.$=f[g];break;case 24:this.$=new d.Block;break;case 25:this.$=f[g-1];break;case 26:this.$=new d.Literal(f[g]);break;case 27:this.$=new d.Literal(f[g]);break;case 28:this.$=new d.Literal(f[g]);break;case 29:this.$=f[g];break;case 30:this.$=new d.Literal(f[g]);break;case 31:this.$=new d.Literal(f[g]);break;case 32:this.$=function(){var a;a=new d.Literal(f[g]),f[g]==="undefined"&&(a.isUndefined=!0);return a}();break;case 33:this.$=new d.Assign(f[g-2],f[g]);break;case 34:this.$=new d.Assign(f[g-4],f[g-1]);break;case 35:this.$=new d.Value(f[g]);break;case 36:this.$=new d.Assign(new d.Value(f[g-2]),f[g],"object");break;case 37:this.$=new d.Assign(new d.Value(f[g-4]),f[g-1],"object");break;case 38:this.$=f[g];break;case 39:this.$=f[g];break;case 40:this.$=f[g];break;case 41:this.$=f[g];break;case 42:this.$=new d.Return(f[g]);break;case 43:this.$=new d.Return;break;case 44:this.$=new d.Comment(f[g]);break;case 45:this.$=new d.Code(f[g-3],f[g],f[g-1]);break;case 46:this.$=new d.Code([],f[g],f[g-1]);break;case 47:this.$="func";break;case 48:this.$="boundfunc";break;case 49:this.$=f[g];break;case 50:this.$=f[g];break;case 51:this.$=[];break;case 52:this.$=[f[g]];break;case 53:this.$=f[g-2].concat(f[g]);break;case 54:this.$=new d.Param(f[g]);break;case 55:this.$=new d.Param(f[g-1],null,!0);break;case 56:this.$=new d.Param(f[g-2],f[g]);break;case 57:this.$=f[g];break;case 58:this.$=f[g];break;case 59:this.$=f[g];break;case 60:this.$=f[g];break;case 61:this.$=new d.Splat(f[g-1]);break;case 62:this.$=new d.Value(f[g]);break;case 63:this.$=f[g-1].push(f[g]);break;case 64:this.$=new d.Value(f[g-1],[f[g]]);break;case 65:this.$=f[g];break;case 66:this.$=f[g];break;case 67:this.$=new d.Value(f[g]);break;case 68:this.$=new d.Value(f[g]);break;case 69:this.$=f[g];break;case 70:this.$=new d.Value(f[g]);break;case 71:this.$=new d.Value(f[g]);break;case 72:this.$=new d.Value(f[g]);break;case 73:this.$=f[g];break;case 74:this.$=new d.Access(f[g]);break;case 75:this.$=new d.Access(f[g],"soak");break;case 76:this.$=new d.Access(f[g],"proto");break;case 77:this.$=new d.Access(new d.Literal("prototype"));break;case 78:this.$=f[g];break;case 79:this.$=new d.Slice(f[g]);break;case 80:this.$=new d.Index(f[g-1]);break;case 81:this.$=d.extend(f[g],{soak:!0});break;case 82:this.$=d.extend(f[g],{proto:!0});break;case 83:this.$=new d.Obj(f[g-2],f[g-3].generated);break;case 84:this.$=[];break;case 85:this.$=[f[g]];break;case 86:this.$=f[g-2].concat(f[g]);break;case 87:this.$=f[g-3].concat(f[g]);break;case 88:this.$=f[g-5].concat(f[g-2]);break;case 89:this.$=new d.Class;break;case 90:this.$=new d.Class(null,null,f[g]);break;case 91:this.$=new d.Class(null,f[g]);break;case 92:this.$=new d.Class(null,f[g-1],f[g]);break;case 93:this.$=new d.Class(f[g]);break;case 94:this.$=new d.Class(f[g-1],null,f[g]);break;case 95:this.$=new d.Class(f[g-2],f[g]);break;case 96:this.$=new d.Class(f[g-3],f[g-1],f[g]);break;case 97:this.$=new d.Call(f[g-2],f[g],f[g-1]);break;case 98:this.$=new d.Call(f[g-2],f[g],f[g-1]);break;case 99:this.$=new d.Call("super",[new d.Splat(new d.Literal("arguments"))]);break;case 100:this.$=new d.Call("super",f[g]);break;case 101:this.$=!1;break;case 102:this.$=!0;break;case 103:this.$=[];break;case 104:this.$=f[g-2];break;case 105:this.$=new d.Value(new d.Literal("this"));break;case 106:this.$=new d.Value(new d.Literal("this"));break;case 107:this.$=new d.Value(new d.Literal("this"),[new d.Access(f[g])],"this");break;case 108:this.$=new d.Arr([]);break;case 109:this.$=new d.Arr(f[g-2]);break;case 110:this.$="inclusive";break;case 111:this.$="exclusive";break;case 112:this.$=new d.Range(f[g-3],f[g-1],f[g-2]);break;case 113:this.$=new d.Range(f[g-3],f[g-1],f[g-2]);break;case 114:this.$=new d.Range(f[g-2],null,f[g-1]);break;case 115:this.$=new d.Range(null,f[g-1],f[g-2]);break;case 116:this.$=[f[g]];break;case 117:this.$=f[g-2].concat(f[g]);break;case 118:this.$=f[g-3].concat(f[g]);break;case 119:this.$=f[g-2];break;case 120:this.$=f[g-5].concat(f[g-2]);break;case 121:this.$=f[g];break;case 122:this.$=f[g];break;case 123:this.$=f[g];break;case 124:this.$=[].concat(f[g-2],f[g]);break;case 125:this.$=new d.Try(f[g]);break;case 126:this.$=new d.Try(f[g-1],f[g][0],f[g][1]);break;case 127:this.$=new d.Try(f[g-2],null,null,f[g]);break;case 128:this.$=new d.Try(f[g-3],f[g-2][0],f[g-2][1],f[g]);break;case 129:this.$=[f[g-1],f[g]];break;case 130:this.$=new d.Throw(f[g]);break;case 131:this.$=new d.Parens(f[g-1]);break;case 132:this.$=new d.Parens(f[g-2]);break;case 133:this.$=new d.While(f[g]);break;case 134:this.$=new d.While(f[g-2],{guard:f[g]});break;case 135:this.$=new d.While(f[g],{invert:!0});break;case 136:this.$=new d.While(f[g-2],{invert:!0,guard:f[g]});break;case 137:this.$=f[g-1].addBody(f[g]);break;case 138:this.$=f[g].addBody(d.Block.wrap([f[g-1]]));break;case 139:this.$=f[g].addBody(d.Block.wrap([f[g-1]]));break;case 140:this.$=f[g];break;case 141:this.$=(new d.While(new d.Literal("true"))).addBody(f[g]);break;case 142:this.$=(new d.While(new d.Literal("true"))).addBody(d.Block.wrap([f[g]]));break;case 143:this.$=new d.For(f[g-1],f[g]);break;case 144:this.$=new d.For(f[g-1],f[g]);break;case 145:this.$=new d.For(f[g],f[g-1]);break;case 146:this.$={source:new d.Value(f[g])};break;case 147:this.$=function(){f[g].own=f[g-1].own,f[g].name=f[g-1][0],f[g].index=f[g-1][1];return f[g]}();break;case 148:this.$=f[g];break;case 149:this.$=function(){f[g].own=!0;return f[g]}();break;case 150:this.$=f[g];break;case 151:this.$=new d.Value(f[g]);break;case 152:this.$=new d.Value(f[g]);break;case 153:this.$=[f[g]];break;case 154:this.$=[f[g-2],f[g]];break;case 155:this.$={source:f[g]};break;case 156:this.$={source:f[g],object:!0};break;case 157:this.$={source:f[g-2],guard:f[g]};break;case 158:this.$={source:f[g-2],guard:f[g],object:!0};break;case 159:this.$={source:f[g-2],step:f[g]};break;case 160:this.$={source:f[g-4],guard:f[g-2],step:f[g]};break;case 161:this.$={source:f[g-4],step:f[g-2],guard:f[g]};break;case 162:this.$=new d.Switch(f[g-3],f[g-1]);break;case 163:this.$=new d.Switch(f[g-5],f[g-3],f[g-1]);break;case 164:this.$=new d.Switch(null,f[g-1]);break;case 165:this.$=new d.Switch(null,f[g-3],f[g-1]);break;case 166:this.$=f[g];break;case 167:this.$=f[g-1].concat(f[g]);break;case 168:this.$=[[f[g-1],f[g]]];break;case 169:this.$=[[f[g-2],f[g-1]]];break;case 170:this.$=new d.If(f[g-1],f[g],{type:f[g-2]});break;case 171:this.$=f[g-4].addElse(new d.If(f[g-1],f[g],{type:f[g-2]}));break;case 172:this.$=f[g];break;case 173:this.$=f[g-2].addElse(f[g]);break;case 174:this.$=new d.If(f[g],d.Block.wrap([f[g-2]]),{type:f[g-1],statement:!0});break;case 175:this.$=new d.If(f[g],d.Block.wrap([f[g-2]]),{type:f[g-1],statement:!0});break;case 176:this.$=new d.Op(f[g-1],f[g]);break;case 177:this.$=new d.Op("-",f[g]);break;case 178:this.$=new d.Op("+",f[g]);break;case 179:this.$=new d.Op("--",f[g]);break;case 180:this.$=new d.Op("++",f[g]);break;case 181:this.$=new d.Op("--",f[g-1],null,!0);break;case 182:this.$=new d.Op("++",f[g-1],null,!0);break;case 183:this.$=new d.Existence(f[g-1]);break;case 184:this.$=new d.Op("+",f[g-2],f[g]);break;case 185:this.$=new d.Op("-",f[g-2],f[g]);break;case 186:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 187:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 188:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 189:this.$=new d.Op(f[g-1],f[g-2],f[g]);break;case 190:this.$=function(){return f[g-1].charAt(0)==="!"?(new d.Op(f[g-1].slice(1),f[g-2],f[g])).invert():new d.Op(f[g-1],f[g-2],f[g])}();break;case 191:this.$=new d.Assign(f[g-2],f[g],f[g-1]);break;case 192:this.$=new d.Assign(f[g-4],f[g-1],f[g-3]);break;case 193:this.$=new d.Extends(f[g-2],f[g])}},table:[{1:[2,1],3:1,4:2,5:3,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,25:[1,5],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[3]},{1:[2,2],6:[1,71]},{6:[1,72]},{1:[2,4],6:[2,4],26:[2,4],98:[2,4]},{4:74,7:4,8:6,9:7,10:19,11:20,12:21,13:[1,22],14:8,15:9,16:10,17:11,18:12,19:13,20:14,21:15,22:16,23:17,24:18,26:[1,73],27:59,28:[1,70],29:49,30:[1,68],31:[1,69],32:24,33:[1,50],34:[1,51],35:[1,52],36:23,41:60,42:[1,44],43:[1,46],44:[1,29],47:30,48:[1,57],49:[1,58],55:47,56:48,58:36,60:25,61:26,62:27,72:[1,67],75:[1,43],79:[1,28],84:[1,55],85:[1,56],86:[1,54],92:[1,38],96:[1,45],97:[1,53],99:39,100:[1,62],102:[1,63],103:40,104:[1,64],105:41,106:[1,65],107:66,115:[1,42],120:37,121:[1,61],123:[1,31],124:[1,32],125:[1,33],126:[1,34],127:[1,35]},{1:[2,7],6:[2,7],26:[2,7],98:[2,7],99:84,100:[1,62],102:[1,63],105:85,106:[1,65],107:66,122:[1,83],124:[1,77],125