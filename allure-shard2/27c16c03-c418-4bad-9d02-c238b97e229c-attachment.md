# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefix.spec.ts >> @regression forgot pwd link exist test
- Location: tests/loginpagefix.spec.ts:25:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Login" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
    - generic [ref=e74]:
      - generic [ref=e76]:
        - generic [ref=e78]:
          - heading "New Customer" [level=2] [ref=e79]
          - paragraph [ref=e80]:
            - strong [ref=e81]: Register Account
          - paragraph [ref=e82]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
          - link "Continue" [ref=e83] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
        - generic [ref=e85]:
          - heading "Returning Customer" [level=2] [ref=e86]
          - paragraph [ref=e87]:
            - strong [ref=e88]: I am a returning customer
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: E-Mail Address
              - textbox "E-Mail Address" [ref=e92]
            - generic [ref=e93]:
              - generic [ref=e94]: Password
              - textbox "Password" [ref=e95]
              - link "Forgotten Password" [ref=e96] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
            - button "Login" [ref=e97] [cursor=pointer]
      - complementary [ref=e98]:
        - generic [ref=e99]:
          - link "Login" [ref=e100] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e101] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e102] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e103] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e104] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e105] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e106] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e107] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e108] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e109] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e110] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e111] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e112] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e113]:
    - generic [ref=e114]:
      - generic [ref=e115]:
        - generic [ref=e116]:
          - heading "Information" [level=5] [ref=e117]
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "About Us" [ref=e120] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e121]:
              - link "Delivery Information" [ref=e122] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e123]:
              - link "Privacy Policy" [ref=e124] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e125]:
              - link "Terms & Conditions" [ref=e126] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e127]:
          - heading "Customer Service" [level=5] [ref=e128]
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Contact Us" [ref=e131] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e132]:
              - link "Returns" [ref=e133] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e134]:
              - link "Site Map" [ref=e135] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e136]:
          - heading "Extras" [level=5] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Brands" [ref=e140] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e141]:
              - link "Gift Certificates" [ref=e142] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e143]:
              - link "Affiliate" [ref=e144] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e145]:
              - link "Specials" [ref=e146] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e147]:
          - heading "My Account" [level=5] [ref=e148]
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link "My Account" [ref=e151] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e152]:
              - link "Order History" [ref=e153] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e154]:
              - link "Wish List" [ref=e155] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e156]:
              - link "Newsletter" [ref=e157] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e158]
      - paragraph [ref=e159]:
        - text: Powered By
        - link "OpenCart" [ref=e160] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1   | import { CsvHelper } from '../src/utils/CsvHelper';
  2   | import { ExcelHelper } from '../src/utils/ExcelHelper';
  3   | import { JsonHelper } from '../src/utils/JsonHelper';
  4   | 
  5   | 
  6   | import { test, expect } from '../src/fixtures/pagefixtures';
  7   | import * as allure from "allure-js-commons";
  8   | import { meta, log, testData } from 'reporting-labs';
  9   | 
  10  | test.beforeEach(async ({ loginPage }) => {
  11  |     await loginPage.goToLoginPage();
  12  | });
  13  | 
  14  | //AAA
  15  | test('@smoke login page title test', async ({ loginPage }) => {
  16  |     meta({ priority: 'P2', severity: 'minor', owner: 'Naveen', story: 'US101', epic: 'ep300', feature: 'F30', issue: 'bug34' });
  17  | 
  18  |     let pageTitle = await loginPage.getPageTitle();
  19  |     console.log('Login page title : ', pageTitle);
  20  | 
  21  |     await log('Login page title : ', pageTitle);
  22  |     expect(pageTitle).toBe('Account Login');
  23  | });
  24  | 
  25  | test('@regression forgot pwd link exist test', async ({ loginPage }) => {
  26  |     meta({ priority: 'P1', severity: 'critical', owner: 'Himanshu', story: 'US102', epic: 'ep300', feature: 'F31', issue: 'bug35' });
  27  | 
> 28  |     expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
      |                                                       ^ Error: expect(received).toBeTruthy()
  29  | });
  30  | 
  31  | test('@regression user is able to login to app with valid credentials', async ({ loginPage, homePage }) => {
  32  | 
  33  |     meta({ priority: 'P1', severity: 'blocker', owner: 'Manish', story: 'US102', epic: 'ep300', feature: 'F31', issue: 'bug35' });
  34  |     await testData({ username: process.env.USERNAME!, password: process.env.PASSWORD! }, 'Login');
  35  | 
  36  |     await allure.suite("Login Tests");
  37  |     await allure.severity("critical");
  38  |     await allure.feature("Authentication");
  39  |     await allure.story("Valid Login");
  40  |     await allure.description("Verify user can login with valid credentials");
  41  | 
  42  |     await allure.step("Login with valid creds", async () => {
  43  |         await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
  44  |     });
  45  | 
  46  |     await allure.step("Verify logout link is visible", async () => {
  47  |         expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
  48  |     });
  49  | 
  50  |     await allure.step("Verify logout home page title is visible", async () => {
  51  |         expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
  52  |     });
  53  | 
  54  | });
  55  | 
  56  | 
  57  | //DD_0: using test data from fixtures: sequence run
  58  | test(`login to app with invalid credentials with fixture data`, async ({ loginPage, testData }) => {
  59  |     for (let row of testData) {
  60  |         await loginPage.doLogin(row.username, row.password);
  61  |         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  62  | 
  63  |     }
  64  | });
  65  | 
  66  | 
  67  | //pros:
  68  | // light weight, easy to maintain/read, 3rd party lib, no license, flat files, fs, good for large set of test data
  69  | //DD_1: read csv data directly fromn the CSV file and loop the test method row wise...
  70  | let testCSVData = CsvHelper.readCsv('src/testdata/logindata.csv');
  71  | for (let row of testCSVData) {
  72  |     test(`@regression login to app with invalid credentials with CSV data - ${row.username} - ${row.password}`, async ({ loginPage, homePage }) => {
  73  | 
  74  |         meta({ priority: 'P2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
  75  |         await testData(testCSVData, 'Invalid Login Data');
  76  | 
  77  |         await loginPage.doLogin(row.username, row.password);
  78  |         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  79  |     });
  80  | };
  81  | 
  82  | //cons:
  83  | //1. maintenance
  84  | //2. MS Licenses
  85  | //DD_2: read xlsx data directly fromn the excel file and loop the test method row wise...
  86  | let testExcelData = ExcelHelper.readExcel('src/testdata/opencarttestdata.xlsx', 'login');
  87  | for (let row of testExcelData) {
  88  |     test(`login to app with invalid credentials with Excel Data - ${row.username} - ${row.password} `, async ({ loginPage, homePage }) => {
  89  |         meta({ priority: 'P2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
  90  |         await testData(testExcelData, 'Invalid Login Data');
  91  | 
  92  |         await loginPage.doLogin(row.username, row.password);
  93  |         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  94  |     });
  95  | };
  96  | 
  97  | //Pros:
  98  | //1. inbuilt method: parse, lightweight, smaller data source
  99  | //DD_3: read JSON data directly fromn the JSON file and loop the test method row wise...
  100 | let testJSONData = JsonHelper.readJson('src/testdata/logindata.json');
  101 | for (let row of testJSONData) {
  102 |     test(`login to app with invalid credentials with JSON Data - ${row.username} - ${row.password} `, async ({ loginPage, homePage }) => {
  103 |         meta({ priority: 'P2', severity: 'major', owner: 'Ajit', story: 'US103', epic: 'ep301', feature: 'F32', issue: 'bug36' });
  104 |         await testData(testJSONData, 'Invalid Login Data');
  105 | 
  106 |         await loginPage.doLogin(row.username, row.password);
  107 |         expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();
  108 |     });
  109 | };
  110 | 
  111 | 
  112 | //common features test:
  113 | test('@smoke App logo exists on Login Page', async ({ basePage }) => {
  114 |     expect(await basePage.isLogoVisible()).toBeTruthy();
  115 | });
  116 | 
  117 | test('@smoke Search Box exists on Login Page', async ({ basePage }) => {
  118 |     expect(await basePage.isSearchBoxVisible()).toBeTruthy();
  119 | });
  120 | 
  121 | test('@smoke Cart exists on Login Page', async ({ basePage }) => {
  122 |     expect(await basePage.isCartButtonVisible()).toBeTruthy();
  123 | });
  124 | 
  125 | test('@smoke Footers exists on Login Page', async ({ basePage }) => {
  126 |     expect(await basePage.getPageFootersCount()).toBe(16);
  127 | });
```