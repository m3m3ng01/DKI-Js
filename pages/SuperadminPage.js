import { expect } from '@playwright/test';
import Alert from './AlertPage';
import superAdminData from '../test-data/parameterSuperAdmin.json';
import { saveGeneratedData } from '../utils/dataStorage';


export default class Parameter {
     constructor(page) {
        this.page = page;
        this.alertPage = new Alert(page);

    this.containerPerPage = this.page.locator(
    'div.inbox-table-footer__per-page');

    this.lblShow = this.containerPerPage.getByText(
    'Show',
    { exact: true });

    this.dropdownPerPage = this.containerPerPage.locator('select');

     }

     async navigateMenuAktivitas() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(superAdminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: superAdminData.submenu.submenuAktivitas,
            exact: true,
        }).click();   
        await this.page.getByText(superAdminData['sub-submenu']['sub-submenuAktivitas']).click();  
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu aktivitas
        await this.page.screenshot({ path: `screenshots/SuperAdminParameter/Aktivitas/navigateMenuAktivitas_${waktuTesting}.png` });
    }

    async Show100DataPerPage() {
        await this.lblShow.click();
        await this.dropdownPerPage.selectOption('100');
        await this.page.waitForTimeout(3000); // Wait for the page to load
    }

        async ApproveAktivitas() {
            const waktuTesting = NamaGenerator.generatetanggaltesting();
            const namaAktivitas = NamaGenerator.generateNamaAktivitas();
            await this.btnTambahAktivitas.click();
            await this.namaAktivitasTambah.fill(namaAktivitas);
            await this.codeAktivitasTambah.fill(namaAktivitas);
            await this.page.waitForTimeout(3000); // Wait for the page to load
            await this.page.screenshot({ path: `screenshots/AdminParameter/Aktivitas/tambahAktivitas_${waktuTesting}.png` });
            await this.submitBtn.click();
            await this.page.waitForTimeout(3000); // Wait for the table to update
            await this.alertPage.confirmProceedButton.click();
            await this.page.waitForTimeout(3000); // Wait for the table to update
            await this.page.screenshot({ path: `screenshots/AdminParameter/Aktivitas/submitAktivitas_${waktuTesting}.png` });
            await this.alertPage.okButton.click();
            
            // Simpan data hasil generate
            saveGeneratedData('aktivitas', {
                nama: namaAktivitas,
                createdAt: new Date().toISOString(),
                status: 'created'
            });
        }
}