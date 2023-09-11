Feature: Tally Count App
  As a user
  I want to be able to increment the count by 1
  So that I can keep track of occurrences of an event

Scenario: Increment count by 1
  Given the Tally Count App is open
  And the count is currently 5
  When I press the "+" button
  Then the count should increase to 6
