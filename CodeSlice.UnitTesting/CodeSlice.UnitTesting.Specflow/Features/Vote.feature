Feature: Vote Model Validation

# QUESTION TEXT
Scenario: Validate Vote Value (-2)
	Given I have created a new Vote
	And I have set the Value as -2
	When I validate the Vote
	Then the Value field should be invalid

Scenario: Validate Vote Value (-1)
	Given I have created a new Vote
	And I have set the Value as -1
	When I validate the Vote
	Then the Value field should be valid

Scenario: Validate Vote Value (0)
	Given I have created a new Vote
	And I have set the Value as 0
	When I validate the Vote
	Then the Value field should be invalid

Scenario: Validate Vote Value (1)
	Given I have created a new Vote
	And I have set the Value as 1
	When I validate the Vote
	Then the Value field should be valid

Scenario: Validate Vote Value (2)
	Given I have created a new Vote
	And I have set the Value as 2
	When I validate the Vote
	Then the Value field should be invalid