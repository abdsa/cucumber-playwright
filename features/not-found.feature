Feature: 404 page

    Scenario: Not-found page


        Given the user navigated to a page that could not be found in the site
        Then the user will see the message that indicates that the page could not be found