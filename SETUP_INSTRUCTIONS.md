# Setup Instructions — GitHub Actions Pipeline + Device Farm + Allure Reports

## 1. Install required packages locally

```bash
npm install --save-dev @wdio/allure-reporter allure-commandline multiple-cucumber-html-reporter
```

## 2. Sign up for BrowserStack (free trial)

1. Go to https://www.browserstack.com/users/sign_up and create a free trial account
2. Go to https://app-automate.browserstack.com/dashboard to get your **Username** and **Access Key**

## 3. Upload your APK to BrowserStack (one-time)

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -F "file=@./apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"
```

The response returns something like:
```json
{ "app_url": "bs://c700ce5ee1b1a49da70c41c8fca31de490f471d3" }
```

Copy that `bs://...` value into `config/browserstack.config.js`, replacing `bs://<YOUR_APP_ID_HERE>`.

## 4. Add secrets to your GitHub repository

Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**

Add these two secrets:
- `BROWSERSTACK_USERNAME` → your BrowserStack username
- `BROWSERSTACK_ACCESS_KEY` → your BrowserStack access key

## 5. Copy these files into your project

- `.github/workflows/appium-tests.yml` → place at your repo root under `.github/workflows/`
- `config/browserstack.config.js` → place inside your existing `config/` folder

## 6. Enable GitHub Pages (for hosted Allure report, optional but impressive)

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: `gh-pages` / `/allure-report`

After your first successful pipeline run, your report will be viewable at:
```
https://<your-username>.github.io/<your-repo-name>/allure-report/
```

## 7. Trigger the pipeline

- **Automatically**: every push to `raj_mobileDemo` branch
- **On schedule**: daily at 9:00 AM IST (adjust the cron expression in the workflow file if needed)
- **Manually**: go to your repo → **Actions** tab → select "Appium Mobile Test Suite" → **Run workflow**

## 8. View results

- **Cucumber HTML report** and **Allure report** are both uploaded as downloadable artifacts on each workflow run (Actions tab → click the run → scroll to Artifacts)
- If GitHub Pages is enabled, the Allure report is also viewable directly via the hosted link above

## Cron cheat sheet (adjust as needed)

| Schedule | Cron expression |
|---|---|
| Daily 9:00 AM IST | `30 3 * * *` |
| Every 6 hours | `0 */6 * * *` |
| Weekdays only, 9:00 AM IST | `30 3 * * 1-5` |
| Every Monday 9:00 AM IST | `30 3 * * 1` |

(GitHub Actions cron always runs in UTC — IST is UTC+5:30)
