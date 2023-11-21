import { Sidebar } from "./sidebar";
import { ToastifyWindow } from "./toastifyWindow";
import { Pagination } from "./pagination";

class BaseElements {
    constructor() {
        this.sidebar = new Sidebar();
        this.toastify = new ToastifyWindow();
        this.pagination = new Pagination();
    }
}

export default BaseElements = new BaseElements();