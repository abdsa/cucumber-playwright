Feature: To show all the winners of the competition

    Scenario: Users can see the winners of any expired competition
        Given the user is on the 'winners' page
        Then the user will be able to see a list of winners with their names, countries, and competition date of any expired competition