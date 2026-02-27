import { test, expect } from '@playwright/test';

test('testerbud testing', async ({ page }) => {
  await page.goto('https://testerbud.com/practice-forms');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practice and Learn Selenium Web Form Automation | TesterBud/);

  const countryofresidencedropdown = page.locator("xpath=//label[text()='Country of Residence']//following-sibling::select");
  await countryofresidencedropdown.scrollIntoViewIfNeeded();
  await countryofresidencedropdown.selectOption('United States');
  await page.waitForTimeout(1000);
  await expect(countryofresidencedropdown).toHaveValue('United States');
 
  const titledropdown = page.locator("xpath=//label[text()='Title']//following-sibling::select");
  await titledropdown.scrollIntoViewIfNeeded();
  await titledropdown.selectOption('Mr.');
  await page.waitForTimeout(1000);
  await expect(titledropdown).toHaveValue('Mr.');

  const firstnametextbox = page.locator("xpath=//label[text()='First Name']//following-sibling::input");
  await firstnametextbox.scrollIntoViewIfNeeded();
  await firstnametextbox.fill('Pallavi');
  await page.waitForTimeout(1000);
  await expect(firstnametextbox).toHaveValue('Pallavi');

  const lastnametextbox = page.locator("xpath=//label[text()='Last Name']//following-sibling::input");
  await lastnametextbox.scrollIntoViewIfNeeded();
  await lastnametextbox.fill('Deore');
  await page.waitForTimeout(1000);
  await expect(lastnametextbox).toHaveValue('Deore');

  const dob = page.locator("xpath=//input[@placeholder='YYYY-MM-DD']");
  await dob.scrollIntoViewIfNeeded();
  await dob.fill('2026-02-09');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  await expect(dob).toHaveValue('2026-02-09');

  //input[@placeholder='dd/mm/yyyy']

  const doj = page.locator("xpath=//input[@placeholder='dd/mm/yyyy']");
  await doj.scrollIntoViewIfNeeded();
  await doj.fill('09/02/2026');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  await expect(doj).toHaveValue('09/02/2026');

  const email = page.locator("xpath=//input[@type='email']");
  await email.scrollIntoViewIfNeeded();
  await email.fill('dvthakur919@gmail.com');
  await page.waitForTimeout(1000);
  await expect(email).toHaveValue('dvthakur919@gmail.com');


  const phonecountrycodedropdown = page.locator("xpath=//label[text()='Phone Number']//following-sibling::div//select");
  await phonecountrycodedropdown.scrollIntoViewIfNeeded();
  await phonecountrycodedropdown.selectOption('+1');
  await page.waitForTimeout(1000);
  await expect(phonecountrycodedropdown).toHaveValue('+1');

  const phonenumbertext = page.locator("xpath=//input[@type='tel']");
  await phonenumbertext.scrollIntoViewIfNeeded();
  await phonenumbertext.fill('9898989898');
  await page.waitForTimeout(1000);
  await expect(phonenumbertext).toHaveValue('9898989898');

  const emailradiobutton = page.locator("xpath=//input[@value='email']");
  await emailradiobutton.scrollIntoViewIfNeeded();
  await emailradiobutton.click();
  await page.waitForTimeout(1000);
  const selected = await emailradiobutton.isChecked();
  if(selected == true)
  {
    console.info('radio email checked');

  }
  
  const submitbutton = page.locator("xpath=//button[@type='submit']");
  await submitbutton.scrollIntoViewIfNeeded();
  await submitbutton.click();
  await page.waitForTimeout(1000);

  const detailsaddedverification = page.locator("xpath=//div[text()='Details Successfully Added!']");
  await detailsaddedverification.isVisible();
  await page.waitForTimeout(1000);

  await page.close();



});