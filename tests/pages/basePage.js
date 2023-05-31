exports.Base = class Base  {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page
    }
    
    async navigate() {
        await this.page.goto("https://letkabackend.click/");
    };
};