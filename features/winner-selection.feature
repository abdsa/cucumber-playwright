

Feature: Winner selection
        To define how the selection of the winners is made

@ignore
        Scenario: Winner selection
                Given the user is authenticated as the admin
                And the admin is on the winner selection page
                And there is an expired competition
                And there are competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition
                Then the admin will be able to see the competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition
                And the admin will be able to select a number of competitors that answered all the questions correctly and filled all the reference numbers correctly of the expired competition