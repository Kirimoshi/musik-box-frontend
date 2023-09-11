export class BasePage {
    constructor() {
        this.url = '';
    }
    async open() {
        await browser.url(this.url);
    }
}
