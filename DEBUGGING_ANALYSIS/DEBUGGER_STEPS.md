# Debugging Analysis

## Critical State (Validation Debugging 1-2)
What does this state tell you about your program’s logic?
- It shows that when something is invalid isValid is set from true to false. In this example its showing that isValid is set to false when name is set to a blank value.

Is the program behaving as expected at this point? Why or why not?
- Yes its behaving as expected. This is because the conditionals are set up properly and the isValid flag variable is being set based on that.

If applicable, explain how this state connects to your program’s next steps.
- At the end of this function isValid is returned. This function is used to check if the form is valid to submit, so the value returned at the end is used to check if it should be submitted or not.

### Rating Debugging 1-2
- screenshot 1: Shows the unassigned RatingValue.
- screenshot 2: Shows the variable is assigned to a new value of 2 after the rating range bar has been changed.

### Radio Debugging 1-2
- screenshot 1: Shows that the radio is set to invalid by default.
- screenshot 2: Shows that if a radio button is not selected after the list is done running radioIsValid remains false.