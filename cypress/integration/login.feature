Feature: Sauce demo Login

    Scenario: Login feature
        Given I was on Sauce demo site
        When I logged in with "standard_user" "secret_sauce"
        Then I should be landed in products page
        When I logout
        Then I should see the login page
