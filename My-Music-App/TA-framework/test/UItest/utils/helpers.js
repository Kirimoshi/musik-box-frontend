function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) {
            return "";
        } else {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        }
    });
}

module.exports = {
    camelize
};
