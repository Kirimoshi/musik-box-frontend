export class Pagination {
    constructor() {}

    get rightArrow() {
        return $('button[data-right-arrow-id]');
    }

    get leftArrow() {
        return $('button[data-left-arrow-id]');
    }
}