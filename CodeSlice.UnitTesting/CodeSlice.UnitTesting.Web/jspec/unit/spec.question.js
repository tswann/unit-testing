describe "Question Model"
    
    describe "Question Text Validation"
        it "should mark the question text field as invalid when it is null"
            model = new Question({ questionText: null });
            model.validate().should.have_a_validation_error_for "questionText"
        end 

        it "should mark the question text field as invalid when it is empty"
            model = new Question({ questionText: '' });
            model.validate().should.have_a_validation_error_for "questionText"
        end 

        it "should mark the question text field as valid when it is 'Question Text'"
            model = new Question({ questionText: 'Question Text' });
            model.validate().should.not.have_a_validation_error_for "questionText"
        end 
    end

    describe "Created Date Initialisation"

        it "should set the created date field as roughly now when the Question is created"
            // pending
        end

    end

    describe "Difficulty Validation"
    end

    describe "Created By Validation"
    end
end 