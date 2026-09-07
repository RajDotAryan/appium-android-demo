class SauceLabDemoAppScreen {
    constructor() {
        this.hamburgerIcon =
            '//android.widget.ImageView[@content-desc="View menu"]';
        this.logInMenuItem =
            '//android.widget.TextView[@content-desc="Login Menu Item"]';
        this.usernameField =
            '//android.widget.EditText[@resource-id="com.saucelabs.mydemoapp.android:id/nameET"]/parent::*';
        this.usernameOption1 =
            '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/username1TV"]';
        this.passwordField =
            '//android.widget.EditText[@content-desc="Password input field"]';
        this.loginButton =
            '//android.view.Button[@text="Login"]';
        this.productsTitle =
            '//android.widget.TextView[@text="Products"]';
        this.cartIcon =
            '//android.widget.ImageView[@content-desc="Displays number of items in your cart"]';
        this.cartBadge =
            '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/cartTV"]';
        this.addToCartButton =
            '//android.widget.Button[@content-desc="Tap to add product to cart"]';
        this.checkoutButton =
            '//android.widget.Button[@text="Proceed To Checkout"]';
        this.checkoutInfoTitle =
            '//android.widget.TextView[@resource-id="com.saucelabs.mydemoapp.android:id/checkoutTitleTV"]';
    }

    productByName(name) {
        return `//android.widget.TextView[@text="${name}"]/parent::*`;
    }
}

module.exports = new SauceLabDemoAppScreen();