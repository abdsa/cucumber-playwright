Feature: Static pages

  Scenario Outline: Static page
    Given the user is on the "<staticPage>" page
    Then the user will see the content of the "<staticPage>" page

    Examples:
      | staticPage           |
      | terms and conditions |
      | faq                  |
