Feature: Sauce demo shopping cart

    @e2e
    Scenario Outline: End to end journey
        Given I was on Sauce demo site
        When I logged in with "<username>" "<password>"
        Then I should be landed in products page
        When I add fleece jacket to the cart
        And  I checkout the product
        Then I see the cart price should match with product price
        When I submit personal information
        And I confirmed the product
        Then I should see order confirmation
        When I logout from order confirmation
        Then I should see the login page

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | standard_user | secret_sauce |