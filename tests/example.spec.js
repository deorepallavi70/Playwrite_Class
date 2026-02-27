
import { test, expect } from '@playwright/test';

test('Login page title and enter username', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await expect(page).toHaveTitle(/OrangeHRM/);

  const usernametextbox= page.locator('xpath=//input[@name="username"]');
  await usernametextbox.fill('Admin');
  await page.waitForTimeout(2000);
  await expect(usernametextbox).toHaveValue('Admin');
   await page.waitForTimeout(2000);

   const passwordtextbox= page.locator("xpath=//input[@name='password']");
   await passwordtextbox.fill('admin123');
   await page.waitForTimeout(2000);
   await expect(passwordtextbox).toHaveValue('admin123');
   await page.waitForTimeout(2000);

   const loginbutton=page.locator("xpath=//button[@type='submit']");
   await loginbutton.click();
   await page.waitForTimeout(2000);

   const  dashboardlabel=page.locator("xpath=//h6[text()='Dashboard']");
    await expect(dashboardlabel).toBeVisible();

    await page.close();

});
