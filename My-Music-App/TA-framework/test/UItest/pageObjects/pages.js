import { SignUpPage } from "./signUpPage";
import { SignInPage } from "./signInPage"
import { HomePage } from "./homePage"

class Pages {
    constructor() {
        this.signUp = new SignUpPage();
        this.signIn = new SignInPage();
        this.home = new HomePage();
        // Add more instances as needed
    }

    async click(element) {
       await element.click();
    }
}
export default Pages = new Pages();