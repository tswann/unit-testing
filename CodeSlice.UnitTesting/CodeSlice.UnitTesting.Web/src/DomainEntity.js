Ext.define('DomainEntity', {
    config: {
        id:         null,
        createdBy:   null,
        createdDate: new Date()
    },

    constructor: function(config){
        this.initConfig(config);
        return this;
    },

    validate: function(){
        var errors = [];

        if(this.id === null){
            errors.push("ID cannot be null");
        }

        if(this.createdBy === null || this.createdBy === ''){
            errors.push("Created By cannot be null");
        }

        if(this.createdDate === null){
            errors.push("Created Date cannot be null");
        }

        return errors;
    }
});