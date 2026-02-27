import { test, expect } from '@playwright/test';

test('testerbud testing', async ({ page }) => {
  await page.goto('https://testerbud.com/practice-ecommerece-website');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dummy E-commerce | TesterBud/);

  const laptopProQty = page.locator("xpath=//div[text()='Laptop Pro']//following-sibling::div//input[@id='quantity-1']");
  await laptopProQty.scrollIntoViewIfNeeded();
  await laptopProQty.click();
  await laptopProQty.clear();
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('ArrowUp');
  await expect(laptopProQty).toHaveValue('3');

  const laptopProAddtocart = page.locator("xpath=//div[text()='Laptop Pro']//following-sibling::div//following-sibling::button[text()='Add to Cart']");
  await laptopProAddtocart.click();
  await page.waitForTimeout(1000);
  

  const globalsearch = page.locator("xpath=//input[@type='search']");
  await globalsearch.fill('Wireless Mouse');
  await page.waitForTimeout(1000);

  const wirelessmouse = page.locator("xpath=//div[text()='Wireless Mouse']//following-sibling::div//input[@id='quantity-2']");
  await wirelessmouse.scrollIntoViewIfNeeded();
  await wirelessmouse.click();
  await wirelessmouse.clear();
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('ArrowUp');

  await globalsearch.clear();

  await page.waitForTimeout(1000);
  await expect(wirelessmouse).toHaveValue('2');

  const wirelessmouseaddtocart = page.locator("xpath=//div[text()='Wireless Mouse']//following-sibling::div//following-sibling::button[text()='Add to Cart']");
  await wirelessmouseaddtocart.click();
   await page.waitForTimeout(1000);

  const carttext = page.locator("xpath=//button[@class='position-relative btn btn-outline-light']//span");
  await carttext.scrollIntoViewIfNeeded();
  await expect(carttext).toHaveText('5');
  await page.waitForTimeout(1000);

  const cartbutton = page.locator("xpath=//button[@class='position-relative btn btn-outline-light']");
  await cartbutton.scrollIntoViewIfNeeded();
  await cartbutton.click();
  await page.waitForTimeout(1000);

  const totalprice = page.locator("xpath=//div[@class='fw-bold']");
  console.info((await totalprice.textContent()).includes('3650.00'));
  await page.waitForTimeout(1000);  

  const proceedtobuy = page.locator("xpath=//button[text()='Proceed to Buy']");
  await proceedtobuy.click();
  await page.waitForTimeout(1000);  

});