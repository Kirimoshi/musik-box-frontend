export class ToastifyWindow {
    constructor() {}

    get logoutSuccessMessage() {
        return $(`div .toast__logout--success p`)
    }

    get informationMessage() {
        return $(`div .Toastify__toast-body p`)
    }
}