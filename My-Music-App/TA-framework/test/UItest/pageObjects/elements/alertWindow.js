export class AlertWindow {
    constructor() {}

    get logoutSuccessMessage() {
        return $(`div .toast__logout--success p`)
    }

    get permissionMessage() {
        return $(`div .Toastify__toast-body p`)
    }
}