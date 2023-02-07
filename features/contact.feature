Feature: contact
  @ignore

  Scenario: Users can see a place where they can contact the competition organizers
    Given the user is on the contact page
    Then the user will see a place where the user can contact the competition organizers
  @ignore

  Scenario: Users can see feedback when successfully sending a message
    Given the user is on the contact page
    When the user sends a message successfully
    Then the user will see a feedback message telling that the message was sent successfully
  @ignore

  @ignore
  Scenario Outline: Contact us with invalid inputs
    Given the user is on the contact page
    And the user violated the "<validityRule>" rule for "<inputField>" field
    Then the user will see a "<errorMessage>" message because of "<validityRule>" rule

    Examples:
      | inputField | validityRule | errorMessage               |
      | name       | required     | هذا الحقل مطلوب            |
      | email      | required     | هذا الحقل مطلوب            |
      | subject    | required     | هذا الحقل مطلوب            |
      | message    | required     | هذا الحقل مطلوب            |
      | email      | email        | البريد الألكتروني غير صحيح |

  # This scenario is implemented differently than what is written here (in the main website: https://quiz.islamqa.info/)

  @ignore

  Scenario: send a message with invalid inputs and submit to the system
    Given the user is on the contact page
    And the user has inputted more than 255 characters in the "<input-field>" input field
    When the user submits the contact us form
    Then the user shall see The given data was invalid that comes from the system

    Examples:
      | input-field | error-message              |
      | name        | The given data was invalid |
      | email       | The given data was invalid |
      | subject     | The given data was invalid |
