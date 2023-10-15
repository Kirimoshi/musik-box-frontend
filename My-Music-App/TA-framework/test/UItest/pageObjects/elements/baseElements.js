import { Sidebar } from "./sidebar";
import { AlertWindow } from "./alertWindow";

class BaseElements {
    constructor() {
        this.sidebar = new Sidebar();
        this.alert = new AlertWindow();
    }
}

export default BaseElements = new BaseElements();