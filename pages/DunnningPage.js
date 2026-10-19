import { expect } from '@playwright/test';
import DunnningData from '../test-data/dunning.json';
import Alert from '../pages/AlertPage';

export default class DunningCall {
    constructor(page) {
        this.page = page;

        this.alertPage = new Alert(page);

        this.tasklistNPLBuket = page
            .locator('button.panel-toggle')
            .filter({
                has: page.locator('.panel-title', {
                    hasText: 'Tasklist NPL',
                }),
            });

        this.norekTasklistNPL = page
            .locator('tbody tr')
            .nth(0)
            .locator('td')
            .nth(2);

        this.dataEmergencyContact = page
            .locator('.section-head')
            .filter({
                has: page.locator('h3.section-title', {
                    hasText: 'Data Emergency Contact',
                }),
            });
        
         this.dataAgunan = page
            .locator('.section-head')
            .filter({
                has: page.locator('h3.section-title', {
                    hasText: 'Data Agunan',
                }),
            });

        this.btnTambahEmergencyContact = this.dataEmergencyContact.getByRole(
            'button',
            {
                name: 'Tambah',
                exact: true,
            },
        );

        this.btnTambahAgunan = this.dataAgunan.getByRole(
            'button',
            {
                name: 'Tambah',
                exact: true,
            },
        );

        this.addContactEmergency = page
            .locator('.modal-content')
            .filter({
                has: page.locator('.modal-title', {
                    hasText: 'Tambah Emergency Kontak',
                    exact: true,
                }),
            });

        this.editContactEmergency = page
            .locator('.modal-content')
            .filter({
                has: page.locator('.modal-title', {
                    hasText: 'Edit Emergency Contact',
                    exact: true,
                }),
            });

        this.namaEmergencyContact = this.addContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama',
                    exact: false,
                }),
            })
            .locator('input.form-control');

        this.namaEmergencyContactEdit = this.editContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama',
                    exact: false,
                }),
            })
            .locator('input.form-control');

        this.noKontakEmergencyContact = this.addContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'No Kontak',
                    exact: false,
                }),
            })
            .locator('input.form-control');

        this.noKontakEmergencyContactEdit = this.editContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'No Kontak',
                    exact: false,
                }),
            })
            .locator('input.form-control');

        this.alamatEmergencyContact = this.addContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Alamat',
                    exact: false,
                }),
            })
            .locator('textarea.form-control');

        this.alamatEmergencyContactEdit = this.editContactEmergency
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Alamat',
                    exact: false,
                }),
            })
            .locator('textarea.form-control');

        this.tableEmergencyContact = page
            .getByRole('heading', {
                name: 'Data Emergency Contact',
                exact: true,
            })
            .locator('xpath=following::table[1]');

        this.btnSaveEmergencyContact = this.addContactEmergency.getByRole(
            'button',
            {
                name: 'Save',
                exact: true,
            },
        );

        this.btnEditEmergencyContact = this.editContactEmergency.getByRole(
            'button',
            {
                name: 'Edit',
                exact: true,
            },
        );

        this.btnDeleteEmergencyContact = this.tableEmergencyContact
            .locator('tbody tr')
            .filter({
                has: this.page.getByRole('cell', {
                    name: 'Edited Nama Emergency Contact',
                    exact: true,
                }),
            })
            .locator('button.btn-danger');

        this.rowEmergencyContact = page.locator('tr').filter({
            has: page.locator('td:nth-child(2)').filter({
                hasText: /^Testing Nama Emergency Contact$/,
            }),
        });
        this.hasilDunningCall = page.locator('h3.section-title', {
            hasText: 'Hasil Dunning Call',
        });

       this.aktivitasDropdown = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('legend').filter({
            hasText: /^Aktivitas\s*\*/
        })
    })
    .locator('.multiselect');

        this.hasilAktivitasDropdown = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('legend').filter({
            hasText: /^Hasil Aktivitas\s*\*/
        })
    })
    .locator('.multiselect');

         this.pihakYangDihubungiDropdown = page
            .locator('fieldset.b-form-group')
            .filter({
                has: page.locator('legend', {
                    hasText: 'Pihak yang Dihubungi',
                }),
            })
            .locator('.multiselect');

        this.inputTanggalJanjiBayar = this.page
    .locator('fieldset')
    .filter({ hasText: 'Tanggal Janji Bayar' })
    .locator('input[data-test-id="dp-input"]');
      
    this.jumlahJanjiInput = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('label').filter({
            hasText: /^Jumlah Janji/
        })
    })
    .locator('input.form-control');

    this.alasanMenunggakDropdown = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('legend').filter({
            hasText: /^Alasan Menunggak/
        })
    })
    .locator('.multiselect');

    this.pengelompokanAkunDropdown = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('label').filter({
            hasText: /^Pengelompokan Akun/
        })
    })
    .locator('.multiselect');

    this.keteranganLainnyaInput = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('label').filter({
            hasText: /^Keterangan Lainnya/
        })
    })
    .locator('input.form-control');

    this.catatanInput = this.page
    .locator('fieldset.b-form-group')
    .filter({
        has: this.page.locator('label').filter({
            hasText: /^Catatan/
        })
    })
    .locator('textarea.form-control');

    this.saveButtonDunning = this.page.getByRole('button', {
    name: 'Save',
    exact: true
});

        this.btnEditAgunan = this.page
    .locator('tr')
    .filter({
        has: this.page.getByRole('cell', {
            name: /COLL/,
        })
    })
    .locator('button.btn-primary');
    }

    async addAgunan() {
        await this.btnTambahAgunan.click();

        const modal = this.page.locator('#dynamic-modal-edit-PANEL018-008');

const dropdownJenisAgunan = modal
    .locator('fieldset')
    .filter({ hasText: 'Pilih Jenis Agunan' })
    .locator('.multiselect-search');

await dropdownJenisAgunan.click();

await modal.getByRole('option', {
    name: DunnningData.agunan.jenisAgunan,
    exact: true
}).click();

        await this.page
            .locator('#FIELD018-008-001-003')
            .fill(agunanData.namaPemilik);

        await this.page
            .locator('#FIELD018-008-001-004')
            .fill(agunanData.alamatAgunan);

        await this.page
            .locator(
                'fieldset:has(label[for="jenis_dokumen"]) .multiselect-wrapper',
            )
            .click();

        await this.page
            .getByRole('option', {
                name: agunanData.buktiKepemilikan,
                exact: true,
            })
            .click();

        await this.page
            .locator('#FIELD018-008-001-006')
            .fill(agunanData.keteranganAgunan);

        await this.page
            .locator('#FIELD018-008-001-007')
            .fill(String(agunanData.nilaiPengikatan));

        await this.page
            .locator('#FIELD018-008-001-008')
            .fill(String(agunanData.nilaiPasar));

        await this.page
            .locator('#FIELD018-008-001-009')
            .fill(String(agunanData.nilaiLikuidasi));

        await this.page
            .locator('.modal-content')
            .filter({ hasText: 'Tambah Agunan' })
            .getByRole('button', { name: 'Save', exact: true })
            .click();
    }

    async editAgunan(agunanData) {
        await this.btnEditAgunan.click();
         // Pilih Jenis Agunan
    const jenisAgunan = this.page.locator(
        'fieldset:has(label[for="jenis_agunan"]) .multiselect-wrapper'
    );

    await jenisAgunan.click();

    await this.page.getByRole('option', {
        name: agunanData.jenisAgunan,
        exact: true
    }).click();

    // Nama Pemilik
    await this.page
        .locator('#FIELD018-008-002-003')
        .fill(agunanData.namaPemilik);

    // Alamat Agunan
    await this.page
        .locator('#FIELD018-008-002-004')
        .fill(agunanData.alamatAgunan);

    // Bukti Kepemilikan
    const buktiKepemilikan = this.page.locator(
        'fieldset:has(label[for="jenis_dokumen"]) .multiselect-wrapper'
    );

    await buktiKepemilikan.click();

    await this.page.getByRole('option', {
        name: agunanData.buktiKepemilikan,
        exact: true
    }).click();

    // Keterangan Agunan
    await this.page
        .locator('#FIELD018-008-002-006')
        .fill(agunanData.keteranganAgunan);

    // Nilai Jaminan (Pengikatan)
    await this.page
        .locator('#FIELD018-008-002-007')
        .fill(String(agunanData.nilaiPengikatan));

    // Nilai Pasar
    await this.page
        .locator('#FIELD018-008-002-008')
        .fill(String(agunanData.nilaiPasar));

    // Nilai Likuidasi
    await this.page
        .locator('#FIELD018-008-002-009')
        .fill(String(agunanData.nilaiLikuidasi));

    // Tanggal Appraisal
    await this.page
        .locator('[uid="FIELD018-008-002-010"] input[data-test-id="dp-input"]')
        .click();

    // Masa Berlaku tidak wajib diubah karena tidak bertanda *
    // dan nilainya sudah terisi pada form edit.

    // Klik Save pada modal Edit Agunan
    await this.page
        .locator('#dynamic-modal-edit-PANEL018-008')
        .getByRole('button', {
            name: 'Edit',
            exact: true
        })
        .click();
    }
    

    async navigateTasklistMenu() {
        await this.page.getByText(DunnningData.navigateMenu.menu).click();
    }

    async navigateTasklistNPL() {
        await this.tasklistNPLBuket.click();
        const norekTasklistNPL = await this.norekTasklistNPL.innerText();
        console.log(norekTasklistNPL);
        await this.norekTasklistNPL.click();
    }

    async addEmergencyContact() {
        await this.btnTambahEmergencyContact.click();
        await this.namaEmergencyContact.fill(
            DunnningData.emergencyContact.namaEmergencyContact,
        );
        await this.noKontakEmergencyContact.fill(
            DunnningData.emergencyContact.noKontakEmergencyContact,
        );
        await this.alamatEmergencyContact.fill(
            DunnningData.emergencyContact.alamatEmergencyContact,
        );
        await this.btnSaveEmergencyContact.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.clickOk(); // Wait for the alert to disappear

        try {
            await expect(this.tableEmergencyContact).toContainText(
                DunnningData.emergencyContact.namaEmergencyContact,
            );

            console.log(
                `PASS: Nama ${DunnningData.emergencyContact.namaEmergencyContact} ditemukan di tabel Emergency Contact.`,
            );
        } catch (error) {
            console.error(
                `FAIL: Nama ${DunnningData.emergencyContact.namaEmergencyContact} tidak ditemukan di tabel Emergency Contact.`,
            );

            console.error(error.message);
        }
    }

    async editEmergencyContact() {
        await this.rowEmergencyContact
            .getByRole('button')
            .first()
            .click();

        await this.namaEmergencyContactEdit.fill(
            DunnningData.emergencyContact.namaEmergencyContactEdit,
        );
        await this.noKontakEmergencyContactEdit.fill(
            DunnningData.emergencyContact.noKontakEmergencyContactEdit,
        );
        await this.alamatEmergencyContactEdit.fill(
            DunnningData.emergencyContact.alamatEmergencyContactEdit,
        );
        await this.btnEditEmergencyContact.click();
        await this.page.waitForTimeout(3000);
        await this.alertPage.clickOk(); // Wait for the alert to disappear

        try {
            await expect(this.tableEmergencyContact).toContainText(
                DunnningData.emergencyContact.namaEmergencyContactEdit,
            );

            console.log(
                `PASS: Nama ${DunnningData.emergencyContact.namaEmergencyContactEdit} ditemukan di tabel.`,
            );
        } catch (error) {
            console.error(
                `FAIL: Nama ${DunnningData.emergencyContact.namaEmergencyContactEdit} tidak ditemukan di tabel.`,
            );
        }
    }

    async deleteEmergencyContact() {
        await this.btnDeleteEmergencyContact.click();
        await this.alertPage.clickDelete();
        await this.page.waitForTimeout(3000);
        await this.alertPage.clickOk(); // Wait for the alert to disappear
    }

    async inputHasilDunningCall() {
        await this.hasilDunningCall.scrollIntoViewIfNeeded();
        await this.aktivitasDropdown.click();

        await this.page
            .getByRole('option', {
                name: 'Penagihan',
                exact: true,
            })
            .click();

        await this.pihakYangDihubungiDropdown.click();
        
        await this.page
            .getByRole('option', {
                name: 'Debitur',
                exact: true,
            })
            .click();

        await this.hasilAktivitasDropdown.click();

         await this.page
             .getByRole('option', {
                 name: 'Janji Bayar',
                 exact: true,
             })
             .click();

         await this.inputTanggalJanjiBayar.click();
         await this.page.locator('[data-test-id="dp-2026-10-31"]').click();
   
      await this.jumlahJanjiInput.fill('1000000');

      await this.alasanMenunggakDropdown.click();
      await this.page
          .getByRole('option', {
              name: 'Lainnya',
              exact: true,
          })
          .click();
    
        await this.keteranganLainnyaInput.fill('Keterangan Lainnya Test');
        
        await this.pengelompokanAkunDropdown.click();

        await this.page.getByRole('option', {
            name: 'Janji Bayar',
            exact: true
        }).click();

        await this.catatanInput.fill('Debitur berjanji melakukan pembayaran pada tanggal yang disepakati.');
        await this.saveButtonDunning.click();
        await this.alertPage.clickConfirmProceed(); // Wait for the alert to disappear
    }}
