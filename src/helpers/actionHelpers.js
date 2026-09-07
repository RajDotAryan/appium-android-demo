class ActionHelper {

    static async launchBrowserUrl(urlToLaunch) {
        await browser.url(urlToLaunch)
    }

    static async getTitle() {
        return browser.getTitle();
    }

    static async launchApp() {
        driver.activateApp('com.saucelabs.mydemoapp.android');
    }

    static async switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static async pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static async isVisible(locator) {
        const el = await $(locator);
        return el.isDisplayed();
    }

    static async click(locator) {
        const el = await $(locator);
        await el.click();
    }

    static async waitForElement(locator, waitTimeInSeconds) {
        const el = await $(locator);
        await el.waitForDisplayed({ timeout: waitTimeInSeconds * 1000 });
        await el.waitForEnabled({ timeout: waitTimeInSeconds * 1000 });
    }

    static async clearText(locator) {
        const el = await $(locator);
        await el.clearValue();
    }

    static async sendText(locator, inputText) {
        const el = await $(locator);
        await el.setValue(inputText);

    }

    static async getText(locator) {
        const el = await $(locator);
        return await el.getText();
    }

    static async tapByCoordinates(locator) {
        const el = await $(locator);
        await el.waitForDisplayed({ timeout:  10000 });

        const location = await el.getLocation();
        const size = await el.getSize();

        const centerX = Math.floor(location.x + size.width / 2);
        const centerY = Math.floor(location.y + size.height /2);

        driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: {pointerType: 'touch'},
                actions: [
                    {type: 'pinterMove', duration: 0, x: centerX, y: centerY},
                    {type: 'pointerDown', button: 0},
                    {type: 'pause', duration: 100},
                    {type: 'pointerUp', button: 0},
                ]
            }
        ]);
        driver.releaseActions();
    }
}

module.exports = ActionHelper;
