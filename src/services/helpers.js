export function isNumberOnly(text) {
    var regex = /^[0-9]+$/;
    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export function validateEmail(mail1) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail1)) {
        return (true)
    }
    return (false)
}