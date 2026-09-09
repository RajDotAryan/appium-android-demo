const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    // Upload your APK to BrowserStack and replace this value
    // with the returned bs://<app-id>.
    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '13.0',
            'appium:deviceName': 'Google Pixel 7',
            'appium:app': 'bs://bs://cb15dcb932e1bb0d49b522733c4cc67ed33fb037',
            'appium:automationName': 'uiautomator2',
            'bstack:options': {
                projectName: 'Sauce Labs Demo App',
                buildName: `Build ${new Date().toISOString()}`,
                sessionName: 'Login and Checkout flow',
                debug: true,
                networkLogs: true,
                appiumVersion: '2.6.0'
            }
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'cucumber',

    specs: [
        './src/featureFiles/sauceLabDemoApp.feature'
    ],

    reporters: [
        'spec',

        [
            'cucumberjs-json', {
                jsonFolder: './reports/json',
                language: 'en'
            }
        ],

        [
            'allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    cucumberOpts: {
        require: [
            './src/stepDefinitions/sauceLabDemoApp.steps.js'
        ],

        backtrace: false,
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 120000,
        retry: 1
    },

    onComplete: function () {
        const { generate } = require('multiple-cucumber-html-reporter');

        generate({
            jsonDir: './reports/json',
            reportPath: './reports/html',

            metadata: {
                browser: {
                    name: 'Android',
                    version: '13.0'
                },
                device: 'Google Pixel 7',
                platform: {
                    name: 'Android',
                    version: '13.0'
                }
            },

            customData: {
                title: 'Run info',

                data: [
                    {
                        label: 'Project',
                        value: 'Sauce Labs Demo App'
                    },
                    {
                        label: 'Execution Start Time',
                        value: new Date().toString()
                    }
                ]
            }
        });
    }
};

exports.config = config;