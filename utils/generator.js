export default class NamaGenerator {
    static #generateNama(prefix) {
        const now = this.generatetanggaltesting();

        return `${prefix}_${now}`;
    }

    static generatetanggaltesting(){
        const now = new Date();
        const jam = String(now.getHours()).padStart(2, '0');
        const menit = String(now.getMinutes()).padStart(2, '0');
        const detik = String(now.getSeconds()).padStart(2, '0');
        const tanggal = String(now.getDate()).padStart(2, '0');
        const bulan = String(now.getMonth() + 1).padStart(2, '0');
        return `${tanggal}${bulan}_${jam}${menit}${detik}`;
    }
    static generateNamaAktivitas() {
        return this.#generateNama('Aktivitas');
    }

    static generateNamaPihakYangDihubungi() {
        return this.#generateNama('PihakYangDihubungi');
    }

    static generateNamaHasilAktivitas() {
        return this.#generateNama('HasilAktivitas');
    }

    static generateNamaAlasanMenunggak() {
        return this.#generateNama('AlasanMenunggak');
    }

    static generateNamaKJPP() {
        return this.#generateNama('KJPP');
    }

    static generateNamaBalaiLelang() {
        return this.#generateNama('BalaiLelang');
    }

    static generateNamaKodetransaksi() {
        return this.#generateNama('Kodetransaksi');
    }

    static generateNamaJenisAgunan() {
        return this.#generateNama('JenisAgunan');
    }

    static generateNamaBuktiKepemilikan() {
        return this.#generateNama('BuktiKepemilikan');
    }

    static generateNamaNoRekeningDebet() {
        return this.#generateNama('NoRekeningDebet');
    }

    static generateNamaKodePlan() {
        return this.#generateNama('KodePlan');
    }
}
