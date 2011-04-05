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
            errors.push({ field: 'id', message: "ID cannot be null" });
        }

        if(this.createdBy === null || this.createdBy === ''){
            errors.push({ field: 'createdBy', message: "Created By cannot be null" });
        }

        if(this.createdDate === null){
            errors.push({ field: 'createdDate', message: "Created Date cannot be null" });
        }

        return errors;
    }
});