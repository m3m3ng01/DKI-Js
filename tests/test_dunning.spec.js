import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DunningCall from '../pages/DunnningPage';
import DunnningData from '../test-data/dunning.json';
import AlertPage from '../pages/AlertPage';


test.describe('Dunning Call Tests', () => {
    test('TC_DUNNING_001 - Navigate to Dunning Call Page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dunningCallPage = new DunningCall(page);  
        const alertPage = new AlertPage(page);


         // Login
        await loginPage.open();

        await loginPage.login(
            DunnningData.userDunner.username,
            DunnningData.userDunner.password
        );

        // Navigate to Dunning Call Page
        await dunningCallPage.navigateTasklistMenu();

        //pilih debitur di Tasklist NPL
        await dunningCallPage.navigateTasklistNPL();

        // Add Emergency Contact
      //  await dunningCallPage.addEmergencyContact();

        //edit Emergency Contact
     //   await dunningCallPage.editEmergencyContact();

        //delete Emergency Contact
     //   await dunningCallPage.deleteEmergencyContact();

        // Add Agunan
        //await dunningCallPage.addAgunan();

        //edit Agunan
        //await dunningCallPage.editAgunan();

        //delete Agunan
        //await dunningCallPage.deleteAgunan();

        //input hasil Dunning Call
        await dunningCallPage.inputHasilDunningCall();
    });

    
});
