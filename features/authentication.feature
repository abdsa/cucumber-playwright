Feature: Authentication features of the system


  Scenario: Sign up page
    Given the user is not authenticated
    And the user is on the sign up page
    Then the user will see a sign up form

  # @manualTest
  #   Scenario: Successful sign up
  #     Given the user is not authenticated
  #     And the user is on the sign up page
  #     And the user filled the email input with correct email that never used before
  #     And the user filled the password input with correct format password
  #     And the user filled the confirmation password input that match the previous password
  #     When the user submit a form
  #     Then the user will be redirected to register-succeeded page
  #     And the user will see a success message of registration
  #     And the user will receive an activate link to his email



  # @manualTest
  # Scenario: Successful ReCaptcha verification
  #   Given the user is not authenticated
  #   And the user is on the sign up page
  #   And the user submitted the ReCaptcha form correctly
  #   When the user clicks on check button
  #   Then the user will be verified not to be a bot

  # I changed this step because of the country select. I could not reset the value of the
  # country select



  Scenario Outline: sign up with invalid inputs
    Given the user is not authenticated
    And the user is on the sign up page
    And the user violated the "<validityRule>" rule for "<inputField>" field
    Then the user will see a "<errorMessage>" message because of "<validityRule>" rule

    Examples:
      | inputField       | validityRule       | errorMessage                                  |
      | email            | required           | هذا الحقل مطلوب                               |
      | password         | required           | هذا الحقل مطلوب                               |
      | password         | minLength_8        | هذا الحقل مطلوب                               |
      | confirm_password | required           | هذا الحقل مطلوب                               |
      | email            | email              | البريد الألكتروني غير صحيح                    |
      | password         | upper-lower-number | يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام |
      | confirm_password | match password     | يجب أن تكون كلمة السر مطابقة                  |



  Scenario: sign up with used email
    Given the user is not authenticated
    And the user is on the sign up page
    When the user tries to create an account with an email used before
    Then the user will see a feedback message telling that the email is used


  Scenario: Users can see feedback when trying to create an account with 255 length email
    Given the user is not authenticated
    And the user is on the sign up page
    When the user tries to create an account with an email of length 255 characters
    Then the user shall see a error message of max 255 characters that comes from the system

  # Scenario: Registration inside the home page
  #   Given the user is not authenticated
  #   And the user is on the home page
  #   Then the user will be able to see the registration form inside the home page

  Scenario: Register-succeeded page
    Given the user is on the register-succeeded page
    Then the user will see a message that indicates that the registration was successful
    Then the user will see a button that navigates the user to the sign in page

  # @manualTest
  # #   Scenario: Activate the account
  # #     Given the user clicked on the activation link
  # #     Then the account will be activated
  # #     And the user will be redirected to the activated page
  # #     And the user will see a successful message of account activation
  # #     And the user will be able to navigate to sign in page


  Scenario: Authenticated user visits the sign up page
    Given the user is authenticated
    And the user is on the sign up page
    Then the user will see a message that indicates that the user can start the competition

  Scenario: Login page
    Given the user is not authenticated
    And the user is on the login page
    Then the user will see a login form



  # The status message is not behaving as expected in a cypress testing browser, it behaves
  # as expected in a normal browser

  Scenario: successful login
    Given the user is not authenticated
    And the user is on the login page
    And the user filled the login form with valid values
    When the user submits the login form
    Then the user will be redirected to the home page
    And the user will see a login success message

  Scenario: sign in with invalid inputs
    Given the user is not authenticated
    And the user is on the login page
    And the user violated the "<validity-rule>" rule for "<input-field>" field
    Then the user will see a "<error-message>" message because of "<validity-rule>" rule

    Examples:
      | input-field | validity-rule | error-message              |
      | email       | required      | هذا الحقل مطلوب            |
      | email       | email         | البريد الألكتروني غير صحيح |
      | password    | required      | هذا الحقل مطلوب            |
  # @focus



  Scenario: Users can see feedback when trying to login with an email that is not activated
    And the user is not authenticated
    And the user is on the login page
    When the user tries to login with an account that is not activated
    Then the user will see a feedback message telling that the account is not activated


  Scenario: Login with account that doesn't exist in the system
    Given the user is not authenticated
    And the user is on the login page
    And the user filled the login form with account details that don't match any account in the system
    When the user submits the login form
    Then the user will see a message that indicates that the account details don't match any account in the system

  Scenario: Login inside the home page
    Given the user is on the home page
    Then the user will be able to see the login form inside the home page

  Scenario: Logout page
    Given the user is authenticated
    And the user navigated to the logout page
    Then the user will logout


  Scenario: Logout in login page
    Given the user is authenticated
    And the user is on the login page
    Then the user will see a button that logouts the user

  Scenario: Logout in forgot-password page
    Given the user is authenticated
    And the user is on the reset password page
    Then the user will see a button that logouts the user