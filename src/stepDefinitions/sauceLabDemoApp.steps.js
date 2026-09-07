const { Given, When, Then } = require('cucumber');

const sauceLabDemoAppPage = require('./../pages/sauceLabDemoApp.page');

Given(/^I launch the sauce demo app$/, async() => {
    await sauceLabDemoAppPage.launchApp();
});

Then(/^I tap the hamburger menu$/, async() => {
    await sauceLabDemoAppPage.tapHamburgerIcon();
});

Given(/^I tap the log in menu item$/, async() => {
    await sauceLabDemoAppPage.taplogInMenuItem();
});

Then(/^I enter username "(.*)"$/, async(username) => {
    await sauceLabDemoAppPage.enterUsername(username);
});

Then(/^I tap the username options$/, async() => {
    await sauceLabDemoAppPage.tapUsernameOptions();
});

When(/^I enter password "(.*)"$/, async(password) => {
    await sauceLabDemoAppPage.enterPassword(password);
});

Then(/^I tap the login button$/, async() => {
    await sauceLabDemoAppPage.tapLogin();
});

Then(/^I should see the products screen$/, async() => {
    const displayed = sauceLabDemoAppPage.verifyProductsScreenDisplayed();
    if (!displayed) throw new Error('Products screen was not displayed');
});

When(/^I tap on the product "(.*)"$/, async(productName) => {
    await sauceLabDemoAppPage.tapProduct(productName);
});

Then(/^I should see the product detail screen$/, async() => {
    const displayed = sauceLabDemoAppPage.verifyProductDetailDisplayed();
    if (!displayed) throw new Error('Product detail screen was not displayed');
});

When(/^I tap the add to cart button$/, async() => {
    await sauceLabDemoAppPage.tapAddToCart();
});

Then(/^I should see the cart badge count "(.*)"$/, async(count) => {
    await sauceLabDemoAppPage.verifyCartBadgeCount(count);
});

When(/^I tap the cart icon$/, async() => {
    await sauceLabDemoAppPage.tapCartIcon();
});

Then(/^I should see "(.*)" in the cart$/, async(itemName) => {
    const displayed = sauceLabDemoAppPage.verifyItemInCart(itemName);
    if (!displayed) throw new Error(`${itemName} was not found in cart`);
});

When(/^I tap the checkout button$/, async() => {
    await sauceLabDemoAppPage.tapCheckout();
});

Then(/^I should see the checkout information screen$/, async() => {
    const displayed = sauceLabDemoAppPage.verifyCheckoutInfoDisplayed();
    if (!displayed) throw new Error('Checkout info screen was not displayed');
});