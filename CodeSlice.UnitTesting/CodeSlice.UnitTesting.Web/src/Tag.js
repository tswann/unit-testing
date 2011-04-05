Ext.define('Tag', {
    extend: 'DomainEntity',
    config: {
        name: null
    },

    getNormalisedName: function(){
        return (this.name || '').replace(/ /g, '').toLowerCase();
    },

    validate: function(){
        var errors = this.callParent();
        
        if(this.getName() === null){
            errors.push({ field: 'name', message: "Name cannot be null" });
        }

        return errors;
    }
});