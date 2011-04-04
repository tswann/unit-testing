Feature: Tags

Scenario: Normalise Tag Name
	Given I have created a new tag
	When I set its name to "New Test Tag"
	Then it should have a normalised name of "newtesttag"
