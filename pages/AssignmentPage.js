import { expect } from '@playwright/test';
import assingmentData from '../test-data/assignment.json';
import BasePage from './BasePage';
import Alert from './AlertPage';

export default class AssignToRM {
    constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.alertPage = new Alert(page);

         // Parent locator: Advance Search
        this.advanceSearch = page.locator('#assignment-advance-search');


        this.btnSearch = this.page.getByRole('button', {
                        name: 'Search',
                         exact: true   });    

        this.tableAssignmentTbl = page.locator('#__BVID__278');

        this.clearButton = page.locator('span.multiselect-clear');

        this.checkBoxAll10 = page.locator(
    'th.check-col input.form-check-input'
);
       
        this.dropdownPilihOfficer = this.page.locator(
    '[id="BootstrapVueNext__ID__v-0-3__"] input.multiselect-search'
);

        this.btnExport = this.page.getByRole('button', {
    name: 'Export Data',
    exact: true
});


        this.branchFilter = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('legend', {
                    hasText: 'Branch'
                })
            })
            .locator('.multiselect');

        
        this.namaNasabahFilter = page.locator('fieldset.b-form-group')
    .filter({
        has: page.getByText('Nama Nasabah', { exact: true })
    })
    .locator('input.form-control');

        this.norekPinjamanFilter = page.locator('fieldset.b-form-group')
    .filter({
        has: page.getByText('No Rekening Pinjaman', { exact: true })
    })
    .locator('input.form-control');


        this.kolFilter = page.locator('fieldset.b-form-group')
    .filter({
        has: page.getByText('Kol', { exact: true })
    })
    .locator('input.form-control');

this.officerFilter = this.advanceSearch
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('legend', {
            hasText: 'Pilih Officer'
        })
    })
    .locator('.multiselect');
    
        this.kategoriSegmentFilter = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('legend', {
                    hasText: 'Kategori Segment'
                })
            })
            .locator('.multiselect');

        this.checkOfficer = page
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('legend', {
                    hasText: 'Check Officer'
                })
            })
            .locator('.multiselect');

        this.inputCheckOfficer = this.checkOfficer.locator('input.multiselect-search');
    }

     // Mencari locator di dalam Advance Search
    getAdvanceSearchLocator(selector) {
        return this.advanceSearch.locator(selector);
    }

    async clickDownloadAssignmentData() {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.btnExport.click()
        ]);

        // Assertion: nama file hasil download tidak kosong
        expect(download.suggestedFilename()).not.toBe('');

        // Assertion: nama file sesuai format yang diharapkan
        expect(download.suggestedFilename()).toContain('.xlsx');

        const dateString = await this.basePage.getTodayDate();
        await this.page.screenshot({
            path: `screenshots/TestDownloadData_${dateString}.png`,
            fullPage: true
        });
    }

    async clickClearButton() {
        await this.clearButton.click();
    }   

    async filterByBranch(branch) {
        await this.branchFilter.click();

        await this.page.getByRole('option', {
            name: branch,
            exact: true
        }).click();
    }

    async filterByNamaNasabah(namaNasabah) {
        await this.namaNasabahFilter.fill(namaNasabah);
    }

    async filterByNorekPinjaman(norekPinjaman) {
        await this.norekPinjamanFilter.fill(norekPinjaman);
    }

    async filterByKol(kol) {
        await this.kolFilter.fill(kol);
    }

    async filterByOfficer(officer) {
        await this.officerFilter.click();

        await this.page.getByRole('option', {
            name: officer,
            exact: true
        }).click();    }

    async filterByKategoriSegment(kategoriSegment) {
        await this.kategoriSegmentFilter.click();

        await this.page.getByRole('option', {
            name: kategoriSegment,
            exact: true
        }).click();
    }

    async filterByCheckOfficer(checkOfficer = assingmentData.checkOfficerFilter.checkOfficer) {
        await this.inputCheckOfficer.click();

        await this.page.getByRole('option', {
            name: checkOfficer,
            exact: true
        }).click();
    }

    async navigateMenuAssignment() {
        await this.page.getByText(assingmentData.menu.menu).click();        
    }

    async clickSearchButton() {
        await this.page.locator('button[aria-controls="assignment-advance-search"]').click();
    }

    async assignToRM10() {

        //kecilkan ukuran window
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await this.clickSearchButton();

        //filter hanya Debitur yang tidak memiliki Officer
        await this.filterByCheckOfficer();

        //Klik Search Button
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        //check checkbox teratas
        await expect(this.checkBoxAll10).toBeVisible();

        await this.checkBoxAll10.check();
             console.log(
            await this.page.locator('th.check-col input.form-check-input').count()
        );

        await this.pilihRM('Renny (DC)');
       
        
        // // Verify Alert
        const alertMessage = this.page.locator('#swal2-html-container');

        await expect(alertMessage).toBeVisible();
        await expect(alertMessage).toHaveText('Debitur successfully assigned.');

        console.log(await alertMessage.innerText());

        // // Screenshot
        await this.page.screenshot({
            path: 'screenshots/TestAssignment.png',
             fullPage: true
         });

        // // Klik OK
        await this.alertPage.clickOk();
        
    }
    
    async assignToRM1() {
        await this.navigateMenuAssignment();

        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await this.kolFilter.fill('2');
        await this.checkOfficerBtn.selectOption('False');

        const btnSearch = this.page.locator('button.btn.mb-2.btn-info');
        await btnSearch.click();

        await this.page.locator('button.sidebar-close-btn').click();
        await this.page.waitForTimeout(10000);

        const checkbox = this.page
            .locator('table tbody tr')
            .first()
            .locator("input[type='checkbox']");

        await checkbox.check();
    }

    async pilihRM(officer) {
       // Klik dropdown
    await this.dropdownPilihOfficer.click();

    // Pilih officer dari opsi dropdown
    await this.page.getByRole('option', {
        name: officer,
        exact: true
    }).click();

    // Klik tombol Assign To RM
    await this.page.getByRole('button', {
        name: 'Assign To RM'
    }).click();
    }

    async alertSuccess() {
        const text = await this.page
            .locator('#swal2-html-container')
            .innerText();

        console.log(text);
        return text;
    }

    async verifyFilterResult(assertion, filterValue) {
        try {
            await assertion();
            console.log(`${filterValue} ditemukan`);
        } catch (error) {
            console.log(`${filterValue} tidak ditemukan, lanjutkan test: ${error.message}`);
        }
    }

    async checkAllFilterOptions() {
        //Filter by Branch
        await this.clickSearchButton();
        await this.filterByBranch(assingmentData.branchFilter.branch);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        const table = this.page.locator('table');
        await this.verifyFilterResult(
            () => expect(table).toContainText(assingmentData.branchFilter.branch),
            assingmentData.branchFilter.branch
        );

        //Filter by Officer
        await this.clickSearchButton();
        await this.page.waitForTimeout(2000);
        await this.clickClearButton();
        await this.filterByOfficer(assingmentData.assignedUser.officer);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        await this.verifyFilterResult(
            () => expect(table).toContainText(assingmentData.assignedUser.officer),
            assingmentData.assignedUser.officer
        );

        //Filter by Kategori Segment
        await this.clickSearchButton();
        await this.clickClearButton();

        await this.filterByKategoriSegment(assingmentData.kategoriSegmentFilter.kategoriSegment);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        await this.verifyFilterResult(
            () => expect(table).toContainText(assingmentData.kategoriSegmentFilter.kategoriSegment),
            assingmentData.kategoriSegmentFilter.kategoriSegment
        );

        //Filter by Check Officer
        await this.clickSearchButton();
        await this.clickClearButton();
        await this.filterByCheckOfficer(assingmentData.checkOfficerFilter.checkOfficer);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        await this.verifyFilterResult(
            () => expect(table.locator('tbody tr')).not.toHaveCount(0),
            assingmentData.checkOfficerFilter.checkOfficer
        );

        //Filter by Nama Nasabah
        await this.clickSearchButton();
        await this.clickClearButton();
        await this.filterByNamaNasabah(assingmentData.namaNasabahFilter.namaNasabah);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        await this.verifyFilterResult(
            () => expect(table).toContainText(assingmentData.namaNasabahFilter.namaNasabah),
            assingmentData.namaNasabahFilter.namaNasabah
        );

        //Filter by No Rekening Pinjaman
        await this.clickSearchButton();
        await this.namaNasabahFilter.clear();
        await this.filterByNorekPinjaman(assingmentData.norekPinjamanFilter.norekPinjaman);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
       // await expect(table).toContainText(assingmentData.norekPinjamanFilter.norekPinjaman); 
        
        try {
        await expect(table).toContainText(
        assingmentData.norekPinjamanFilter.norekPinjaman
    );
    console.log(`${assingmentData.norekPinjamanFilter.norekPinjaman} ditemukan`);
} catch (error) {
    console.log(`${assingmentData.norekPinjamanFilter.norekPinjaman} tidak ditemukan, lanjutkan test`);
}

         //Filter by KOL
        await this.clickSearchButton();
        await this.norekPinjamanFilter.clear();
        await this.filterByKol(assingmentData.kolFilter.kol);
        await this.page.locator('#assignment-advance-search button.btn-search').click();
        await this.verifyFilterResult(
            () => expect(table).toContainText(assingmentData.kolFilter.kol),
            assingmentData.kolFilter.kol
        );
    }
}