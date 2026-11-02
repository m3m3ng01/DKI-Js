import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import superAdminData from '../test-data/parameterSuperAdmin.json';
import Parameter from '../pages/SuperadminPage';
import Alert from '../pages/AlertPage';


test.describe('Superadmin Parameter Management', () => {
    test('TC_PARAM_001 - Superadmin login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const parameterPage = new Parameter(page);
        const alertPage = new Alert(page);

        //Login sebagai superadmin
        await loginPage.open();
        await loginPage.login(
            superAdminData.userSuperAdmin.username,
            superAdminData.userSuperAdmin.password
        );
        //navigate menu Aktivitas
        await parameterPage.navigateMenuAktivitas();
        await parameterPage.Show100DataPerPage();
        await parameterPage.ApproveAktivitas();

    });
});
