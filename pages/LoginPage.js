import { expect } from '@playwright/test';

export default class LoginPage {

    constructor(page) {
        this.page = page;

        // Locator
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.notifButton = page.locator('#__BVID__50__BV_toggle_');
        this.logoutBtn = page.locator('#__BVID__56__BV_toggle_');

        this.errorMessage = page.locator('div.alert-body.text-center span');
    }

    async open() {
        await this.page.goto(
            'https://collection-crms-site-jkt.skyworx.co.id/login',
            {
                waitUntil: 'domcontentloaded'
            }
        );

        await this.page.addStyleTag({
        content: 'body { zoom: 75%; }'
         });
    }

    async login(username, password) {
        await this.page.reload();

        await this.username.fill(username);

        await this.password.fill(password);

        await this.page.waitForTimeout(10000);
        await this.loginButton.click();

    }

    async getErrorMessage() {

        return await this.errorMessage.innerText();

    }

    async logout() {

        await this.logoutBtn.click();

        await this.page.getByRole('menuitem', {
            name: 'Logout'
        }).click();

        await this.page.getByRole('button', {
            name: 'Yes, Logout'
        }).click();

    }

    async retryIfCaptcha() {

    const text = await this.errorMessage.textContent();

    if (text?.toLowerCase().includes('captcha')) {
        await this.loginButton.click();
    }

}

}

