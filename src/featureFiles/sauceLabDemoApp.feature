Feature: Sauce Labs My Demo App - Login and Checkout flow

Background:
  Given I launch the sauce demo app
  Then I tap the hamburger menu
  And I tap the log in menu item
  Then I tap the username options
  And I tap the login button
  Then I should see the products screen

@sauceLabsApp
Scenario: User logs in, adds a product to cart and proceeds to checkout
  When I tap on the product "Sauce Labs Backpack (orange)"
  Then I should see the product detail screen
  When I tap the add to cart button
  Then I should see the cart badge count "1"
  When I tap the cart icon
  Then I should see "Sauce Labs Backpack (orange)" in the cart
  When I tap the checkout button
  Then I should see the checkout information screen