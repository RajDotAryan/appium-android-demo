const {config} = require('./wdio.conf');
const AndroidInfo = require('./android.info');
//const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:maxInstances': 1,
        'appium:automationName': 'uiautomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:appPackage': 'com.saucelabs.mydemoapp.android',
        'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
        //'appium:app': path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android

exports.config = config;
