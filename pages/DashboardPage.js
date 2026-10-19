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
            'http://110.239.70.75:30001/login',
            {
                waitUntil: 'domcontentloaded'
            }
        );
    }

    async login(username, password) {
        await this.page.reload();

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();



    }}