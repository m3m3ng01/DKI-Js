import { expect } from '@playwright/test';

export default class Alert {

    constructor(page) {

        this.page = page;

        this.confirmProceedButton = this.page.getByRole('button', {
    name: 'Yes, proceed',
    exact: true
});

        this.successMessage = page.locator('#swal2-html-container');

        this.okButton = page.getByRole('button', {
            name: 'OK'
        });

        this.deleteButton = page.getByRole('button', {
            name: 'Hapus'
        });
    }

    async clickConfirmProceed() {
        await this.confirmProceedButton.click();
    }
    async getAlertText() {

        const text = await this.successMessage.innerText();

        console.log(text);

        return text;

    }

    async verifySuccess(message = 'Success') {

        await expect(this.successMessage)
            .toContainText(message);

    }

    async clickOk() {

        await this.okButton.click();

    }

    async clickDelete() {

        await this.deleteButton.click();}

}