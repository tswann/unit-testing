Feature: Question Model Validation

# QUESTION TEXT
Scenario: Validate Question Text (Null)
	Given I have created a new Question
	And I have left the QuestionText null
	When I validate the Question
	Then the QuestionText field should be invalid

Scenario: Validate Question Text (Blank)
	Given I have created a new Question
	And I have left the QuestionText blank
	When I validate the Question
	Then the QuestionText field should be invalid

Scenario: Validate Question Text (Valid)
	Given I have created a new Question
	And I have set QuestionText as "What is this question"
	When I validate the Question
	Then the QuestionText field should be valid

# CREATED DATE
Scenario: Validate Created Date
	Given I have created a new Question
	Then the CreatedDate should be roughly the current DateTime

# DIFFICULTY
Scenario: Validate Difficulty (Unset)
	Given I have created a new Question
	When I validate the Question
	Then the Difficulty field should be invalid

Scenario: Validate Difficulty (Below Minimum)
	Given I have created a new Question
	And I have set Difficulty as 0
	When I validate the Question
	Then the Difficulty field should be invalid

Scenario: Validate Difficulty (Above Maximum)
	Given I have created a new Question
	And I have set Difficulty as 6
	When I validate the Question
	Then the Difficulty field should be invalid

Scenario: Validate Difficulty (valid)
	Given I have created a new Question
	And I have set Difficulty as 2
	When I validate the Question
	Then the Difficulty field should be valid

# CREATED BY
Scenario:  Validate Created By (invalid)
	Given I have created a new Question
	When I validate the Question
	Then the CreatedBy field should be invalid

Scenario:  Validate Created By (valid)
	Given I have created a new Question
	And I have set CreatedBy as "jameshu"
	When I validate the Question
	Then the CreatedBy field should be valid