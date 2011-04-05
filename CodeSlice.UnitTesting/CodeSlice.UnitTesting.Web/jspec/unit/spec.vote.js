describe "Vote Model"

    describe "Value Field Validation"
        it "should be invalid if value is set to -2"
            model = new Vote({ value: -2 })
            model.validate().should.have_a_validation_error_for "value"
        end

        it "should be valid if value is set to -1"
            model = new Vote({ value: -1 })
            model.validate().should.not.have_a_validation_error_for "value"
        end

        it "should be invalid if value is set to 0"
            model = new Vote({ value: 0 })
            model.validate().should.have_a_validation_error_for "value"
        end

        it "should be valid if value is set to 1"
            model = new Vote({ value: 1 })
            model.validate().should.not.have_a_validation_error_for "value"
        end

        it "should be invalid if value is set to 2"
            model = new Vote({ value: 2 })
            model.validate().should.have_a_validation_error_for "value"
        end
    end
end 