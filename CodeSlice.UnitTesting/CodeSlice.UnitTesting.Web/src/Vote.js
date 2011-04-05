Ext.define('Vote', {
    extend: 'DomainEntity',
    config: {
        value: null
    },

    validate: function(){
        var errors = this.callParent();
        
        if(this.getValue() !== 1 && this.getValue() !== -1){
            errors.push({ field: 'value', message: "Value must be either 1 or -1" });
        }

        return errors;
    }
});