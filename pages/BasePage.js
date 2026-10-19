export default class BasePage{

    constructor(page){

        this.page = page;

    }

    async click(locator){

        await this.page.locator(locator).click();

    }

    async fill(locator,text){

        await this.page.fill(locator,text);

    }

    async getTodayDate(){
       // Ambil tanggal hari ini
const today = new Date();

// Format tanggal menjadi DDMMYYYY
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

const dateString = `${day}${month}${year}`;

        return dateString;

    }

}