import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import loginData from '../test-data/login.json';

test.describe('Login Module', () => {

    test('TC_LOGIN_001 - Invalid Username', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            loginData.invalidUsername.username,
            loginData.invalidUsername.password
        );

        await expect(loginPage.errorMessage)
            .toContainText('Username or password is invalid.');

        await page.screenshot({
            path: 'screenshots/InvalidUsername.png',
            fullPage: true
        });

    });

    test('TC_LOGIN_002 - Invalid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            loginData.invalidPassword.username,
            loginData.invalidPassword.password
        );

        const errorText = await loginPage.errorMessage.textContent();

        if (errorText?.toLowerCase().includes('captcha')) {

            await loginPage.loginButton.click();}

        else {

            await page.screenshot({
            path: 'screenshots/InvalidPassword.png',
            fullPage: true
            });

}

    });

    test('TC_LOGIN_003 - Login Success', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        const errorText = await loginPage.errorMessage.textContent();
        
        if (errorText?.toLowerCase().includes('captcha'))
            {await loginPage.loginButton.click();}
            else {
                await expect(page)
            .toHaveURL('https://collection-crms-site-jkt.skyworx.co.id/login');

                await page.screenshot({
            path: 'screenshots/LoginSuccess.png',
            fullPage: true
        });}

    });

});