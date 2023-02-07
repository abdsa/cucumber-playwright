Feature: Competition
    @ignore
    Scenario: A user can see the competition page with questions
        Given the user is authenticated with updated profile
        And there is a competition that is running
        And the user did not give the competition any attempts
        And the user is on the competition page
        Then the user will see a list of questions
        And the user will be able to answer all the questions
        And the user will be able submit the answers

    @ignore
    Scenario: A user answered all the questions correctly
        Given the user is authenticated with updated profile
        And the user is on the competition page
        And the user answered all the multi-choice questions with correct answers
        And the user filled the fatwa reference number of every answer with the correct numbers
        When the user submits the questions form
        Then the user will see a message that indicates that he has been qualified to win a prize.
    @ignore
    Scenario: Submit the form of the questions without missing any multi choice question but missed one or more of their fatwa number
        Given the user is authenticated with updated profile
        And the user is on the competition page
        And the user answered all the multi-choice questions with correct answers
        And the user did not fill the fatwa reference number of every answer with the correct numbers
        When the user submits the questions form
        Then the user will see a successful message for sending his answers


    @ignore
    Scenario: There is no competition has been set up in the system
        Given the user is authenticated with updated profile
        And there is no competition that has been set up in the system
        And the user is on the competition page
        Then the user will see a message that indicates that there are no current competitions

    @ignore
    Scenario: The competition date has been set up for a past date
        Given the user is authenticated with updated profile
        And there is a competition that it's running date is before the current date
        And the user is on the competition page
        Then the user will see a message that indicates that the competition date is before the current date

    @ignore
    Scenario: The competition date has been set up for a future date
        Given the user is authenticated with updated profile
        And there is a competition that it's running date is after the current date
        And the user is on the competition page
        Then the user will see a message that indicates that the competition date is after the current date and the date of the competition

    @ignore
    Scenario: User already answered
        Given the user is authenticated with updated profile
        And there is a competition that is running
        And the user already gave the competition an attempt
        And the user is on the competition page
        Then the user will see a message that indicates that the user already answered the competition

    @ignore
    Scenario: User tries to submit the form with incomplete answers of the multi-choices questions
        Given the user is authenticated with updated profile
        And the user is on the competition page
        And the user misses one or more multi-choice questions
        And the user submits the questions form
        Then the question will be highlighted to let the user know that question not answered yet
    @ignore
    Scenario: Submit the form of the questions with no updated profile
        Given the user is authenticated with outdated profile
        And the user is on the competition page
        And the user answered all the multi-choice questions
        When the user submits the questions form
        Then the user will see a modal that contains an update profile form
        Then the user will be able to update the profile
    @ignore
    Scenario: User participation details
        Given the user is authenticated
        And the user is on the home page
        Then the user will see the start the competition button
        And the user will see the user's number of wins
        And the user will see the user's last result
        And the user will see the user's number of attempts
    @ignore
    Scenario: Start the competition from the home page
        Given the user is authenticated
        And the user is on the home page
        When the user clicks on the start the competition button
        Then the user will navigate to a competition page
    @ignore
    Scenario: Access competition but not authenticated
        Given the user is not authenticated
        And the user is on the competition page
        Then the user will be redirected to the login page