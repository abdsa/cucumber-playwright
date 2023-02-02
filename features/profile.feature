Feature: To show the details of the page and let the user to update the details

  In order to know the user's details that're necessary for winner selection, we need a way to.

  Scenario: Profile Page
    Given the user is authenticated
    And the user is on the profile page
    Then the user will see an update profile form

  Scenario: Update Profile form with valid inputs
    Given the user is authenticated
    And the user is on the profile page
    And the user filled the update profile form with valid values
    When the user submits the update profile form
    Then the user will see a message that indicates that the profile was successfully updated


  Scenario Outline: Profile with invalid inputs
    Given the user is authenticated with outdated profile
    And the user is on the profile page
    And the user violated the "<validityRule>" rule for "<inputField>" field
    Then the user will see a "<errorMessage>" message because of "<validityRule>" rule

    Examples:
      | inputField   | validityRule | errorMessage    |
      | name         | required     | هذا الحقل مطلوب |
      | country      | required     | هذا الحقل مطلوب |
      | phone_number | required     | هذا الحقل مطلوب |
      | phone_number | max_399      | هذا الحقل مطلوب |

  Scenario: More than 255 characters for name
    Given the user is authenticated
    And the user is on the profile page
    And the user filled the name field with more than 255 characters
    When the user submits the update profile form
    Then the user will see a message that indicates that the name is invalid

  Scenario: access profile but not authenticated
    Given the user is not authenticated
    And the user is on the profile page
    Then the user will be redirected to the login page