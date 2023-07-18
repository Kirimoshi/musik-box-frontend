export class BasePage {
    open (path) {
        return browser.url(`http://localhost:3001/${path}`)
    }
}