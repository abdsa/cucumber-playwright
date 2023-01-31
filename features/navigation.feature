Feature: To navigate the user to the pages

  @ignore
  Scenario Outline: Navigation to other pages
    Given the user is "<user-state>"
    And the user is on the "<page>" page
    Then the user will able to navigate to the "<pageNav>" page

    Examples:
      | page                 | user-state   | pageNav |
      # | home                 | authenticated     | home                 |
      # | home                 | authenticated     | about                |
      # | home                 | authenticated     | start competition    |
      # | home                 | authenticated     | terms and conditions |
      # | home                 | authenticated     | winners              |
      # | home                 | authenticated     | right answers        |
      # | home                 | authenticated     | contact              |
      # | home                 | authenticated     | reset password       |
      | home                 | authenticated | logout  |
      # | home                 | authenticated     | profile              |
      # | about                | authenticated     | home                 |
      # | about                | authenticated     | about                |
      # | about                | authenticated     | start competition    |
      # | about                | authenticated     | terms and conditions |
      # | about                | authenticated     | winners              |
      # | about                | authenticated     | right answers        |
      # | about                | authenticated     | contact              |
      # | about                | authenticated     | reset password       |
      | about                | authenticated | logout  |
      # | about                | authenticated     | profile              |
      # | start competition    | authenticated     | home                 |
      # | start competition    | authenticated     | about                |
      # | start competition    | authenticated     | start competition    |
      # | start competition    | authenticated     | terms and conditions |
      # | start competition    | authenticated     | winners              |
      # | start competition    | authenticated     | right answers        |
      # | start competition    | authenticated     | contact              |
      # | start competition    | authenticated     | reset password       |
      | start competition    | authenticated | logout  |
      # | start competition    | authenticated     | profile              |
      # | terms and conditions | authenticated     | home                 |
      # | terms and conditions | authenticated     | about                |
      # | terms and conditions | authenticated     | start competition    |
      # | terms and conditions | authenticated     | terms and conditions |
      # | terms and conditions | authenticated     | winners              |
      # | terms and conditions | authenticated     | right answers        |
      # | terms and conditions | authenticated     | contact              |
      # | terms and conditions | authenticated     | reset password       |
      | terms and conditions | authenticated | logout  |
      # | terms and conditions | authenticated     | profile              |
      # | winners              | authenticated     | home                 |
      # | winners              | authenticated     | about                |
      # | winners              | authenticated     | start competition    |
      # | winners              | authenticated     | terms and conditions |
      # | winners              | authenticated     | winners              |
      # | winners              | authenticated     | right answers        |
      # | winners              | authenticated     | contact              |
      # | winners              | authenticated     | reset password       |
      | winners              | authenticated | logout  |
      # | winners              | authenticated     | profile              |
      # | right answers        | authenticated     | home                 |
      # | right answers        | authenticated     | about                |
      # | right answers        | authenticated     | start competition    |
      # | right answers        | authenticated     | terms and conditions |
      # | right answers        | authenticated     | winners              |
      # | right answers        | authenticated     | right answers        |
      # | right answers        | authenticated     | contact              |
      # | right answers        | authenticated     | reset password       |
      | right answers        | authenticated | logout  |
      # | right answers        | authenticated     | profile              |
      # | contact              | authenticated     | home                 |
      # | contact              | authenticated     | about                |
      # | contact              | authenticated     | start competition    |
      # | contact              | authenticated     | terms and conditions |
      # | contact              | authenticated     | winners              |
      # | contact              | authenticated     | right answers        |
      # | contact              | authenticated     | contact              |
      # | contact              | authenticated     | reset password       |
      | contact              | authenticated | logout  |
      # | contact              | authenticated     | profile              |
      # | profile              | authenticated     | home                 |
      # | profile              | authenticated     | about                |
      # | profile              | authenticated     | start competition    |
      # | profile              | authenticated     | terms and conditions |
      # | profile              | authenticated     | winners              |
      # | profile              | authenticated     | right answers        |
      # | profile              | authenticated     | contact              |
      # | profile              | authenticated     | reset password       |
      | profile              | authenticated | logout  |
      # | profile              | authenticated     | profile              |
      # | reset password       | authenticated     | home                 |
      # | reset password       | authenticated     | about                |
      # | reset password       | authenticated     | start competition    |
      # | reset password       | authenticated     | terms and conditions |
      # | reset password       | authenticated     | winners              |
      # | reset password       | authenticated     | right answers        |
      # | reset password       | authenticated     | contact              |
      # | reset password       | authenticated     | reset password       |
      | reset password       | authenticated | logout  |
  # | reset password       | authenticated     | profile              |
  # | logout               | authenticated     | home                 |
  # | logout               | authenticated     | about                |
  # | logout               | authenticated     | terms and conditions |
  # | logout               | authenticated     | winners              |
  # | logout               | authenticated     | right answers        |
  # | logout               | authenticated     | contact              |
  # | home                 | not authenticated | home                 |
  # | home                 | not authenticated | about                |
  # | home                 | not authenticated | sign up              |
  # | home                 | not authenticated | login                |
  # | home                 | not authenticated | terms and conditions |
  # | home                 | not authenticated | winners              |
  # | home                 | not authenticated | right answers        |
  # | home                 | not authenticated | contact              |
  # | about                | not authenticated | home                 |
  # | about                | not authenticated | about                |
  # | about                | not authenticated | sign up              |
  # | about                | not authenticated | login                |
  # | about                | not authenticated | terms and conditions |
  # | about                | not authenticated | winners              |
  # | about                | not authenticated | right answers        |
  # | about                | not authenticated | contact              |
  # | sign up              | not authenticated | home                 |
  # | sign up              | not authenticated | about                |
  # | sign up              | not authenticated | sign up              |
  # | sign up              | not authenticated | login                |
  # | sign up              | not authenticated | terms and conditions |
  # | sign up              | not authenticated | winners              |
  # | sign up              | not authenticated | right answers        |
  # | sign up              | not authenticated | contact              |
  # | login                | not authenticated | home                 |
  # | login                | not authenticated | about                |
  # | login                | not authenticated | sign up              |
  # | login                | not authenticated | login                |
  # | login                | not authenticated | terms and conditions |
  # | login                | not authenticated | winners              |
  # | login                | not authenticated | right answers        |
  # | login                | not authenticated | contact              |
  # | terms and conditions | not authenticated | home                 |
  # | terms and conditions | not authenticated | about                |
  # | terms and conditions | not authenticated | sign up              |
  # | terms and conditions | not authenticated | login                |
  # | terms and conditions | not authenticated | terms and conditions |
  # | terms and conditions | not authenticated | winners              |
  # | terms and conditions | not authenticated | right answers        |
  # | terms and conditions | not authenticated | contact              |
  # | winners              | not authenticated | home                 |
  # | winners              | not authenticated | about                |
  # | winners              | not authenticated | sign up              |
  # | winners              | not authenticated | login                |
  # | winners              | not authenticated | terms and conditions |
  # | winners              | not authenticated | winners              |
  # | winners              | not authenticated | right answers        |
  # | winners              | not authenticated | contact              |
  # | right answers        | not authenticated | home                 |
  # | right answers        | not authenticated | about                |
  # | right answers        | not authenticated | sign up              |
  # | right answers        | not authenticated | login                |
  # | right answers        | not authenticated | terms and conditions |
  # | right answers        | not authenticated | winners              |
  # | right answers        | not authenticated | right answers        |
  # | right answers        | not authenticated | contact              |
  # | contact              | not authenticated | home                 |
  # | contact              | not authenticated | about                |
  # | contact              | not authenticated | sign up              |
  # | contact              | not authenticated | login                |
  # | contact              | not authenticated | terms and conditions |
  # | contact              | not authenticated | winners              |
  # | contact              | not authenticated | right answers        |
  # | contact              | not authenticated | contact              |


@ignore
  Scenario Outline: Logo
    Given the user is "<user-state>"
    And the user is on the "<page>" page
    When the user clicks on the logo
    Then the user will navigate to the home page

    Examples:
      | page                 | user-state       |
      # | home                 | authenticated     |
      # | about                | authenticated     |
      # | terms and conditions | authenticated     |
      # | winners              | authenticated     |
      # | right answers        | authenticated     |
      # | contact              | authenticated     |
      # | profile              | authenticated     |
      # | reset password       | authenticated     |
      # | logout               | authenticated     |
      # | start competition    | authenticated     |
      | login                | not authenticated |
      | sign up              | not authenticated |
      | home                 | not authenticated |
      | about                | not authenticated |
      | terms and conditions | not authenticated |
      | winners              | not authenticated |
      | right answers        | not authenticated |
      | contact              | not authenticated |


Scenario Outline: Social media accounts of islamqa
  Given the user is "<user-state>"
  And the user is on the "<page>" page
  Then the user will be able to navigate to the social media accounts of islamqa

  Examples:
    | page                 | user-state        |
    | home                 | authenticated     |
    | about                | authenticated     |
    | terms and conditions | authenticated     |
    | winners              | authenticated     |
    | right answers        | authenticated     |
    | contact              | authenticated     |
    | profile              | authenticated     |
    | reset password       | authenticated     |
    | logout               | authenticated     |
    | start competition    | authenticated     |
    | login                | not authenticated |
    | sign up              | not authenticated |
    | home                 | not authenticated |
    | about                | not authenticated |
    | terms and conditions | not authenticated |
    | winners              | not authenticated |
    | right answers        | not authenticated |
    | contact              | not authenticated |
