Ext.define('Question', {
    extend: 'DomainEntity',
    config: {
        questionText: null,
        difficulty:   null
    },

    validate: function(){
        var errors = this.callParent();
        
        if(this.getQuestionText() === null){
            errors.push({ field: 'questionText', message: "Question Text cannot be null" });
        }

        if(this.getDifficulty() === null){
            errors.push({ field: 'difficulty', message: "Difficulty cannot be null" });
        }
     
        if(this.getDifficulty() < 1){
            errors.push({ field: 'difficulty', message: "Difficulty cannot be less than 1" });
        }

        if(this.getDifficulty() > 5){
            errors.push({ field: 'difficulty', message: "Difficulty cannot be greater than 5" });
        }

        return errors;
    }
});