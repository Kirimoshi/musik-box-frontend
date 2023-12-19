import { BasePage } from "./basePage";

export class SendByMe extends BasePage{
    constructor() {
        super();
        this.url = `sent`;
    }

    get cancelRequestButton() {
        return $$(`.friend-card__icon--cancel`)
    }

}