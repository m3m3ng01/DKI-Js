import { test, expect } from '@playwright/test';

import LoginPage from '../pages/LoginPage';
import Parameter from '../pages/AdminPage';
import Alert from '../pages/AlertPage';
import adminData from '../test-data/parameterAdmin.json';
import BasePage from '../pages/BasePage';


test.describe('Parameter Management', () => {

    test('TC_PARAM_001 - Add Parameter Success', async ({ page }) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        const parameterPage = new Parameter(page);
        const alertPage = new Alert(page);

        // Login
        await loginPage.open();

        await loginPage.login(
            adminData.userAdmin.username,
            adminData.userAdmin.password
        );

        //await page.waitForTimeout(10000);
        //await loginPage.retryIfCaptcha();

        // Assignment 10 debitur
      //  await assignToRMPage.assignToRM10();
        
       // pilih menu Aktivitas
       // await parameterPage.navigateMenuAktivitas();
       // await parameterPage.tambahAktivitas();

    // pilih menu Pihak Yang Dihubungi
       // await parameterPage.navigateMenuPihakYangDihubungi();
       // await parameterPage.tambahPihakYangDihubungi();

    // pilih menu Hasil Aktivitas
     //   await parameterPage.navigateMenuHasilAktivitas();
     //   await parameterPage.tambahHasilAktivitas();
    
    // pilih menu Alasan Menunggak
        await parameterPage.navigateMenuAlasanMenunggak();
        await parameterPage.tambahAlasanMenunggak();

    // pilih menu Daftar KJPP
    //    await parameterPage.navigateMenuDaftarKJPP();
    //    await parameterPage.tambahKJPP();

    // pilih menu Daftar Balai Lelang
    //    await parameterPage.navigateMenuBalaiLelang();
    //    await parameterPage.tambahBalaiLelang();

    // pilih menu Kode Transaksi
    //    await parameterPage.navigateMenuKodetransaksi();
    //    await parameterPage.tambahKodetransaksi();

    //pilih menu Jenis Agunan
    //    await parameterPage.navigateMenuJenisAgunan();
    //    await parameterPage.tambahJenisAgunan();

    //pilih menu Bukti Kepemilikan
    //    await parameterPage.navigateMenuBuktiKepemilikan();
    //    await parameterPage.tambahBuktiKepemilikan();

    //pilih menu No. Rekening Debet
    //  await parameterPage.navigateMenuNoRekeningDebet();
    //    await parameterPage.tambahNoRekeningDebet();

        //pilih menu Kode Plan
    //await parameterPage.navigateMenuKodePlan();
    //await parameterPage.tambahKodePlan();
    });
})