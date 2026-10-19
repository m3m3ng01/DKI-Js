import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import AssignToRM from '../pages/AssignmentPage';
import Alert from '../pages/AlertPage';
import assingmentData from '../test-data/assignment.json';
import BasePage from '../pages/BasePage';



test.describe('Assignment To RM', () => {

    test('TC_ASSIGN_001 - Assign RM Success', async ({ page }) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        const assignToRMPage = new AssignToRM(page);
        const alertPage = new Alert(page);

        // Login
        await loginPage.open();

        await loginPage.login(
            assingmentData.userPimpinanDepartemen.username,
            assingmentData.userPimpinanDepartemen.password
        );

        //await page.waitForTimeout(10000);
        //await loginPage.retryIfCaptcha();

        // Assignment 10 debitur
        await assignToRMPage.assignToRM10();
        
       // pilih menu assignment
        //await assignToRMPage.navigateMenuAssignment();

        //Test Filter ALL
        //await assignToRMPage.checkAllFilterOptions();
        //Test Download Assignment Data
       // await assignToRMPage.clickDownloadAssignmentData();
        


    

    });

});