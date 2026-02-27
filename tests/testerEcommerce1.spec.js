import { test, expect } from '@playwright/test';

test('testerbud testing', async ({ page }) => {
    await page.goto('https://testerbud.com/practice-ecommerece-website');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Dummy E-commerce | TesterBud/);

    const laptopProQty = page.locator("xpath=//div[text()='Laptop Pro']//following-sibling::div//input[@id='quantity-1']");
    await laptopProQty.scrollIntoViewIfNeeded();
    await laptopProQty.click();
    await laptopProQty.clear();
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await expect(laptopProQty).toHaveValue('3');

    const laptopProAddtocart = page.locator("xpath=//div[text()='Laptop Pro']//following-sibling::div//following-sibling::button[text()='Add to Cart']");
    await laptopProAddtocart.click();
    await page.waitForTimeout(500);


    const globalsearch = page.locator("xpath=//input[@type='search']");
    await globalsearch.fill('Wireless Mouse');
    await page.waitForTimeout(500);

    const wirelessmouse = page.locator("xpath=//div[text()='Wireless Mouse']//following-sibling::div//input[@id='quantity-2']");
    await wirelessmouse.scrollIntoViewIfNeeded();
    await wirelessmouse.click();
    await wirelessmouse.clear();
    await page.waitForTimeout(500);
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowUp');

    await globalsearch.clear();

    await page.waitForTimeout(500);
    await expect(wirelessmouse).toHaveValue('2');

    const wirelessmouseaddtocart = page.locator("xpath=//div[text()='Wireless Mouse']//following-sibling::div//following-sibling::button[text()='Add to Cart']");
    await wirelessmouseaddtocart.click();
    await page.waitForTimeout(500);

    const carttext = page.locator("xpath=//button[@class='position-relative btn btn-outline-light']//span");
    await carttext.scrollIntoViewIfNeeded();
    await expect(carttext).toHaveText('5');
    await page.waitForTimeout(500);

    const cartbutton = page.locator("xpath=//button[@class='position-relative btn btn-outline-light']");
    await cartbutton.scrollIntoViewIfNeeded();
    await cartbutton.click();
    await page.waitForTimeout(500);

    const totalprice = page.locator("xpath=//div[@class='fw-bold']");
    console.info((await totalprice.textContent()).includes('3650.00'));
    await page.waitForTimeout(500);

    const proceedtobuy = page.locator("xpath=//button[text()='Proceed to Buy']");
    await proceedtobuy.click();
    await page.waitForTimeout(500);

    ////////// Home Assignment ////////////

    await page.mouse.wheel(0, 500);
  
    const FullName = page.locator("xpath=//input[@id='formName']");
    await FullName.fill('Amol Lubal');
    await expect(FullName).toHaveValue('Amol Lubal');
    await page.waitForTimeout(500);

    const StreetAddress = page.locator("xpath=//input[@id='formStreet']");
    await StreetAddress.fill('Baif Road, Wagholi');
    await expect(StreetAddress).toHaveValue('Baif Road, Wagholi');
    await page.waitForTimeout(500);

    const City = page.locator("xpath=//input[@id='formCity']");
    await City.fill('Pune');
    await expect(City).toHaveValue('Pune');
    await page.waitForTimeout(500);

    const State = page.locator("xpath=//input[@id='formState']");
    await State.fill('Maharashtra');
    await expect(State).toHaveValue('Maharashtra');
    await page.waitForTimeout(500);

    const ZIPCode = page.locator("xpath=//input[@id='formZip']");
    await ZIPCode.fill('412207');
    await expect(ZIPCode).toHaveValue('412207');
    await page.waitForTimeout(500);

    // await page.mouse.wheel(0, 500);

    const SaveAddressAndContinueToPayment_button = page.locator("xpath=//button[@type='button' and contains(text(),'Save Address & Continue to Payment')]");
    await SaveAddressAndContinueToPayment_button.click();
    const CardNumberLabel = page.locator("xpath=//label[text()='Card Number:']");
    await CardNumberLabel.screenshot({path:"E://Amol_Automation//playwright//Playwright_Automation//test-results//testscreenshot.png"});
    await expect(CardNumberLabel).toHaveText("Card Number:");
    await page.waitForTimeout(500);

    const CardNumber = page.locator("xpath=//input[@id='formCardNumber']");
    await CardNumber.fill('1234567890');
    await expect(CardNumber).toHaveValue('1234567890');
    await page.waitForTimeout(500);

    const CardExpirtyDate = page.locator("xpath=//input[@id='formExpiryDate']");
    await CardExpirtyDate.fill('12/26');
    await expect(CardExpirtyDate).toHaveValue('12/26');
    await page.waitForTimeout(500);

    const CVV = page.locator("xpath=//input[@id='formCVV']");
    await CVV.fill('1234');
    await page.keyboard.press('Tab');
    await expect(CVV).toHaveValue('1234');
    
    // await page.waitForTimeout(1000);
    

    const BuyNow_Button = page.locator("xpath=//button[@type='button' and contains(text(),'Buy Now')]");
    await BuyNow_Button.click();
    const SuccessfullyPurchasedMsg = page.locator("xpath=//p[contains(text(),'Woohoo!! Successfully purchased')]");
    await expect(SuccessfullyPurchasedMsg).toHaveText("Woohoo!! Successfully purchased");
    console.info("Order successfully purchased Message:- "+SuccessfullyPurchasedMsg);
    

    const Done_Button = page.locator("xpath=//button[@type='button' and contains(text(),'Done')]");
    await Done_Button.click();

        
   
      //await page.close();
















});