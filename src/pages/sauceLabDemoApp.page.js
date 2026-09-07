const ActionHelper = require('../helpers/actionHelpers');

class SauceLabDemoAppPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/sauceLabDemoApp.screen.js`);
    }

    async launchApp() {
        await ActionHelper.launchApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause({seconds: 5});
    }

    async tapHamburgerIcon() {
        await ActionHelper.waitForElement(this.getObjectLocator().hamburgerIcon, 5);
        await ActionHelper.click(this.getObjectLocator().hamburgerIcon);
    }

    async taplogInMenuItem() {
        await ActionHelper.waitForElement(this.getObjectLocator().logInMenuItem, 5);
        await ActionHelper.click(this.getObjectLocator().logInMenuItem);
    }

    async tapUsernameOptions() {
        await ActionHelper.waitForElement(this.getObjectLocator().usernameOption1, 5);
        await ActionHelper.click(this.getObjectLocator().usernameOption1);
    }

    async enterUsername(username) {
        await ActionHelper.waitForElement(this.getObjectLocator().usernameField, 5);
        await ActionHelper.sendText(this.getObjectLocator().usernameField, username);
    }

    async enterPassword(password) {
        await ActionHelper.clearText(this.getObjectLocator().passwordField);
        await ActionHelper.sendText(this.getObjectLocator().passwordField, password);
    }

    async tapLogin() {
        await ActionHelper.waitForElement(this.getObjectLocator().loginButton, 5);
        await ActionHelper.click(this.getObjectLocator().loginButton);
    }

    async verifyProductsScreenDisplayed() {
        await ActionHelper.waitForElement(this.getObjectLocator().productsTitle, 5);
        return ActionHelper.isVisible(this.getObjectLocator().productsTitle);
    }

    async tapProduct(name) {
        const locator = this.getObjectLocator().productByName(name);
        await ActionHelper.waitForElement(locator, 5);
        await ActionHelper.click(locator);
    }

    async verifyProductDetailDisplayed() {
        await ActionHelper.waitForElement(this.getObjectLocator().addToCartButton, 5);
        return ActionHelper.isVisible(this.getObjectLocator().addToCartButton);
    }

    async tapAddToCart() {
        await ActionHelper.click(this.getObjectLocator().addToCartButton);
    }

    async verifyCartBadgeCount(count) {
        await ActionHelper.waitForElement(this.getObjectLocator().cartBadge, 5);
        const actualCount = await ActionHelper.getText(this.getObjectLocator().cartBadge);
        if (actualCount !== count) {
            throw new Error(`Expected cart badge "${count}" but found "${actualCount}"`);
        }
    }

    async tapCartIcon() {
        await ActionHelper.waitForElement(this.getObjectLocator().cartIcon, 5);
        await ActionHelper.click(this.getObjectLocator().cartIcon);
    }

    async verifyItemInCart(name) {
        const locator = this.getObjectLocator().productByName(name);
        await ActionHelper.waitForElement(locator, 5);
        return ActionHelper.isVisible(locator);
    }

    async tapCheckout() {
        await ActionHelper.waitForElement(this.getObjectLocator().checkoutButton, 5);
        await ActionHelper.click(this.getObjectLocator().checkoutButton);
    }

    async verifyCheckoutInfoDisplayed() {
        await ActionHelper.waitForElement(this.getObjectLocator().checkoutInfoTitle, 5);
        return ActionHelper.isVisible(this.getObjectLocator().checkoutInfoTitle);
    }
}

module.exports = new SauceLabDemoAppPage();