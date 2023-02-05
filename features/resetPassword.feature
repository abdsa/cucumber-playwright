Feature: resetting the password

    Scenario: Forget-password page
        Given the user is not authenticated
        And the user is on the reset password page
        Then the user will see a reset password form



    # @manualTest
    # Scenario: Send a email to reset password
    # Given the user is not authenticated
    # And the user is on the forgot-password page
    # And the user filled the email input with the correct email that is existing the system
    # When the user submits the form
    # Then the user will see a successful message
    # And the user should receive a message to his email with a link to reset the password

    Scenario: Input an email that doesn't exist in the system
        Given the user is not authenticated
        And the user is on the reset password page
        And the user filled the reset password form with account details that don't match any account in the system
        When the user submits the reset password form
        Then the user will see a message that indicates that the email doesn't match any account in the system

    Scenario Outline: Invalid email
        Given the user is not authenticated
        And the user is on the reset password page
        And the user violated the "<validityRule>" rule for "<inputField>" field
        Then the user will see a "<errorMessage>" message because of "<validityRule>" rule
        Examples:
            | inputField | validityRule | errorMessage               |
            | email      | required     | هذا الحقل مطلوب            |
            | email      | email        | البريد الألكتروني غير صحيح |
    # @manualTest
    # Scenario: The email has been sent

    #     Given the user clicked on the resetting link
    #     Then the user will be redirected to the new password page


    # @manualTest
    # Scenario: New password page
    #     Given the user is on the new password page
    #     Then the user will see a new password form


    # @manualTest
    # Scenario: Reset password successfully
    #     Given the user is unauthenticated
    #     And the user is on the new password page
    #     And the user filled the password input with correct format password
    #     And the user filled the confirmation password input that match the previous password
    #     When the user submits the form
    #     Then the user will see a successful message
    #     And the user will see a button
    #     And the user will be able to click on a button be redirected to the sign in page

    # @manualTest
    # Scenario: Invalid new password inputs
    #     Given the user is on the new password page
    #     And the user violated a <validity-rule> rule for <input-field> input
    #     Then the user will see a <error-message> message because of <validity-rule> rule

    #     Examples:
    #         | input-field           | validity-rule      | error-message                                 |
    #         | email                 | required           | هذا الحقل مطلوب                               |
    #         | password              | required           | هذا الحقل مطلوب                               |
    #         | password              | minLength_8        | هذا الحقل مطلوب                               |
    #         | password_confirmation | required           | هذا الحقل مطلوب                               |
    #         | email                 | email              | البريد الألكتروني غير صحيح                    |
    #         | password              | upper-lower-number | يجب ان تحوي أحرف إنكليزية صغيرة وكبيرة وأرقام |
    #         | password_confirmation | match password     | يجب أن تكون كلمة السر مطابقة                  |


    # @manualTest
    # Scenario: token used before
    #     Given the user is on the new password page
    #     And the user is unauthenticated
    #     And the user has filled the new password form validly with used token
    #     When the user submits the form
    #     Then the user will be informed that the token is invalid


    # @manualTest
    # Scenario: wrong token
    #     Given the user is on the new password page
    #     And the user is unauthenticated
    #     And the user has filled the new password form validly
    #     And the token is invalid
    #     When the user submits the form
    #     Then the user will be informed that the token is invalid

    # @manualTest
    # Scenario: authenticated user resets the password

    #     Given the user is on the new password page
    #     And the user is authenticated
    #     And the user has filled the new password form validly
    #     When the user submits the form
    #     Then the user will see a error message
    Scenario: Password reset email has been sent to the user's email
        Given the user is on the reset password page
        And the user filled the reset password form with a registered email
        When the user submits the reset password form
        Then the user will see a message that indicates that an email has been sent to the user email