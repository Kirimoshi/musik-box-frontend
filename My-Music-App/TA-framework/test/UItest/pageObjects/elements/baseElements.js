import { Sidebar } from "./sidebar";
import { AlertWindow } from "./alertWindow";
import { Pagination } from "./pagination";

class BaseElements {
    constructor() {
        this.sidebar = new Sidebar();
        this.alert = new AlertWindow();
        this.pagination = new Pagination();
    }
}

export default BaseElements = new BaseElements();