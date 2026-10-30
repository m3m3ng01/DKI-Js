import { expect } from '@playwright/test';
import BasePage from './BasePage';
import Alert from './AlertPage';
import adminData from '../test-data/parameterAdmin.json';
import NamaGenerator from '../utils/generator.js';
import { saveGeneratedData } from '../utils/dataStorage.js';



export default class Parameter {
     constructor(page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.alertPage = new Alert(page);

        this.btnTambahAktivitas = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahPihakYangDihubungi = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahHasilAktivitas = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahAlasanMenunggak = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahKJPP = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahBalaiLelang = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahKodetransaksi = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahJenisAgunan = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahBuktiKepemilikan = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahNoRekeningDebet = page.locator("//button[normalize-space()='Tambah']")
        this.btnTambahKodePlan = page.locator("//button[normalize-space()='Tambah']")


        this.Aktivitas = page
            .locator('button.panel-toggle')
            .filter({
                has: page.locator('.panel-title', {
                    hasText: 'Tambah Parameter Hasil Aktivitas',
                }),
            });
        
        this.namaPihakYangDihubungiTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Pihak Yang Dihubungi',
                    exact: false,
                }),
            })
            .locator('input.form-control');

        this.namaKodePlanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Kode Plan',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaNoRekeningDebetTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama No. Rekening Debet',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaBuktiKepemilikanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Bukti Kepemilikan',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaJenisAgunanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Jenis Agunan',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaBalaiLelangTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Balai Lelang',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaKJPPTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama List KJPP',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaAktivitasTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Aktivitas',
                    exact: false,
                }),
            })
            .locator('input.form-control');

             this.namaHasilAktivitasTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Hasil Aktivitas',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaAlasanMenunggakTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Alasan Menunggak',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.namaKodetransaksiTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Nama Kode Transaksi',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeAktivitasTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

             this.codeKodePlanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeNoRekeningDebetTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeBuktiKepemilikanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeJenisAgunanTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeKodetransaksiTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeBalaiLelangTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeHasilAktivitasTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeKJPPTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codePihakYangDihubungiTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.codeAlasanMenunggakTambah = page.locator('fieldset.b-form-group')
            .filter({
                has: page.locator('label', {
                    hasText: 'Code',
                    exact: false,
                }),
            })
            .locator('input.form-control');

            this.submitBtn = this.page.getByRole('button', {
            name: 'Submit',
            exact: true
            });
         
     }

    async navigateMenuAktivitas() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuAktivitas,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuAktivitas']).click();  
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu aktivitas
        await this.page.screenshot({ path: `screenshots/AdminParameter/Aktivitas/navigateMenuAktivitas_${waktuTesting}.png` });
    }

     async navigateMenuKodePlan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuKodePlan,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuKodePlan']).click();   
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Kode Plan
        await this.page.screenshot({ path: `screenshots/AdminParameter/KodePlan/navigateMenuKodePlan_${waktuTesting}.png` });
    }

        async navigateMenuBuktiKepemilikan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuBuktiKepemilikan,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuBuktiKepemilikan']).click();   
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Bukti Kepemilikan
        await this.page.screenshot({ path: `screenshots/AdminParameter/BuktiKepemilikan/navigateMenuBuktiKepemilikan_${waktuTesting}.png` });
    }

    async navigateMenuNoRekeningDebet() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuNoRekeningDebet,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuNoRekeningDebet']).click();   
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu No. Rekening Debet
        await this.page.screenshot({ path: `screenshots/AdminParameter/NoRekeningDebet/navigateMenuNoRekeningDebet_${waktuTesting}.png` });
    }

    async navigateMenuDaftarKJPP() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuDaftarKJPP,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuDaftarKJPP']).click();   
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Daftar KJPP
        await this.page.screenshot({ path: `screenshots/AdminParameter/DaftarKJPP/navigateMenuDaftarKJPP_${waktuTesting}.png` });
    }

     async navigateMenuAlasanMenunggak() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuAlasanMenunggak,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuAlasanMenunggak']).click();   
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Alasan Menunggak
        await this.page.screenshot({ path: `screenshots/AdminParameter/AlasanMenunggak/navigateMenuAlasanMenunggak_${waktuTesting}.png` });
    }


    async navigateMenuPihakYangDihubungi() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuPihakYangDihubungi,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuPihakYangDihubungi']).click();
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Pihak Yang Dihubungi
        await this.page.screenshot({ path: `screenshots/AdminParameter/PihakYangDihubungi/navigateMenuPihakYangDihubungi_${waktuTesting}.png` });
    }

        async navigateMenuHasilAktivitas() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuHasilAktivitas,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuHasilAktivitas']).click();
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Hasil Aktivitas
        await this.page.screenshot({ path: `screenshots/AdminParameter/HasilAktivitas/navigateMenuHasilAktivitas_${waktuTesting}.png` });
    }
    

    async navigateMenuBalaiLelang() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuBalaiLelang,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuBalaiLelang']).click();
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Balai Lelang
        await this.page.screenshot({ path: `screenshots/AdminParameter/BalaiLelang/navigateMenuBalaiLelang_${waktuTesting}.png` });
    }

    async navigateMenuKodetransaksi() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuKodetransaksi,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuKodetransaksi']).click();
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Kode Transaksi
        await this.page.screenshot({ path: `screenshots/AdminParameter/Kodetransaksi/navigateMenuKodetransaksi_${waktuTesting}.png` });
    }

        async navigateMenuJenisAgunan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        await this.page.getByText(adminData.menu.menu).click();       
        await this.page.getByRole('link', {
            name: adminData.submenu.submenuJenisAgunan,
            exact: true,
        }).click();   
        await this.page.getByText(adminData['sub-submenu']['sub-submenuJenisAgunan']).click();
        await this.page.waitForTimeout(3000); // Wait for the page to load
        //screemshot masuk ke menu Jenis Agunan
        await this.page.screenshot({ path: `screenshots/AdminParameter/JenisAgunan/navigateMenuJenisAgunan_${waktuTesting}.png` });
    }


    async tambahAktivitas() {
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

     async tambahPihakYangDihubungi() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaPihakYangDihubungi = NamaGenerator.generateNamaPihakYangDihubungi();
        await this.btnTambahPihakYangDihubungi.click();
        await this.namaPihakYangDihubungiTambah.fill(namaPihakYangDihubungi);
        await this.codePihakYangDihubungiTambah.fill(namaPihakYangDihubungi);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/PihakYangDihubungi/tambahPihakYangDihubungi_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.page.waitForTimeout(3000); // Wait for the alert to appear
        await this.page.screenshot({ path: `screenshots/AdminParameter/PihakYangDihubungi/submitPihakYangDihubungi_${waktuTesting}.png` });
        await this.alertPage.okButton.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        saveGeneratedData('pihakYangDihubungi', {
            nama: namaPihakYangDihubungi,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

      async tambahHasilAktivitas() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaHasilAktivitas = NamaGenerator.generateNamaHasilAktivitas();
        await this.btnTambahHasilAktivitas.click();
        await this.namaHasilAktivitasTambah.fill(namaHasilAktivitas);
        await this.codeHasilAktivitasTambah.fill(namaHasilAktivitas);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/HasilAktivitas/tambahHasilAktivitas_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.page.screenshot({ path: `screenshots/AdminParameter/HasilAktivitas/submitHasilAktivitas_${waktuTesting}.png` });
        await this.alertPage.okButton.click();
        saveGeneratedData('hasilAktivitas', {
            nama: namaHasilAktivitas,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

     async tambahAlasanMenunggak() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaAlasanMenunggak = NamaGenerator.generateNamaAlasanMenunggak();
        await this.btnTambahAlasanMenunggak.click();
        await this.namaAlasanMenunggakTambah.fill(namaAlasanMenunggak);
        await this.codeAlasanMenunggakTambah.fill(namaAlasanMenunggak);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/AlasanMenunggak/tambahAlasanMenunggak_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.page.waitForTimeout(3000); // Wait for the alert to appear
        await this.page.screenshot({ path: `screenshots/AdminParameter/AlasanMenunggak/submitAlasanMenunggak_${waktuTesting}.png` });
        await this.alertPage.okButton.click();
        saveGeneratedData('alasanMenunggak', {
            nama: namaAlasanMenunggak,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

    async tambahKJPP() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaKJPP = NamaGenerator.generateNamaKJPP();
        await this.btnTambahKJPP.click();
        await this.namaKJPPTambah.fill(namaKJPP);
        await this.codeKJPPTambah.fill(namaKJPP);
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/AlasanMenunggak/tambahAlasanMenunggak_${waktuTesting}.png` });
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('kjpp', {
            nama: namaKJPP,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

        async tambahBalaiLelang() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaBalaiLelang = NamaGenerator.generateNamaBalaiLelang();
        await this.btnTambahBalaiLelang.click();
        await this.namaBalaiLelangTambah.fill(namaBalaiLelang);
        await this.codeBalaiLelangTambah.fill(namaBalaiLelang);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/BalaiLelang/tambahBalaiLelang_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('balaiLelang', {
            nama: namaBalaiLelang,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

        async tambahKodetransaksi() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaKodetransaksi = NamaGenerator.generateNamaKodetransaksi();
        await this.btnTambahKodetransaksi.click();
        await this.namaKodetransaksiTambah.fill(namaKodetransaksi);
        await this.codeKodetransaksiTambah.fill(namaKodetransaksi);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/Kodetransaksi/tambahKodetransaksi_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('kodeTransaksi', {
            nama: namaKodetransaksi,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

        async tambahJenisAgunan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaJenisAgunan = NamaGenerator.generateNamaJenisAgunan();
        await this.btnTambahJenisAgunan.click();
        await this.namaJenisAgunanTambah.fill(namaJenisAgunan);
        await this.codeJenisAgunanTambah.fill(namaJenisAgunan);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/JenisAgunan/tambahJenisAgunan_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('jenisAgunan', {
            nama: namaJenisAgunan,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

    async tambahBuktiKepemilikan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaBuktiKepemilikan = NamaGenerator.generateNamaBuktiKepemilikan();
        await this.btnTambahBuktiKepemilikan.click();
        await this.namaBuktiKepemilikanTambah.fill(namaBuktiKepemilikan);
        await this.codeBuktiKepemilikanTambah.fill(namaBuktiKepemilikan);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/BuktiKepemilikan/tambahBuktiKepemilikan_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('buktiKepemilikan', {
            nama: namaBuktiKepemilikan,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }

     async tambahNoRekeningDebet() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaNoRekeningDebet = NamaGenerator.generateNamaNoRekeningDebet();
        await this.btnTambahNoRekeningDebet.click();
        await this.namaNoRekeningDebetTambah.fill(namaNoRekeningDebet);
        await this.codeNoRekeningDebetTambah.fill(namaNoRekeningDebet);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/NoRekeningDebet/tambahNoRekeningDebet_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('noRekeningDebet', {
            nama: namaNoRekeningDebet,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }


         async tambahKodePlan() {
        const waktuTesting = NamaGenerator.generatetanggaltesting();
        const namaKodePlan = NamaGenerator.generateNamaKodePlan();
        await this.btnTambahKodePlan.click();
        await this.namaKodePlanTambah.fill(namaKodePlan);
        await this.codeKodePlanTambah.fill(namaKodePlan);
        await this.page.waitForTimeout(3000); // Wait for the page to load
        await this.page.screenshot({ path: `screenshots/AdminParameter/KodePlan/tambahKodePlan_${waktuTesting}.png` });
        await this.submitBtn.click();
        await this.page.waitForTimeout(3000); // Wait for the table to update
        await this.alertPage.confirmProceedButton.click();
        await this.alertPage.okButton.click();
        saveGeneratedData('kodePlan', {
            nama: namaKodePlan,
            createdAt: new Date().toISOString(),
            status: 'created'
        });
    }
}
