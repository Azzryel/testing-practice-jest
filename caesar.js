function caesar(string, shift) {
    let caesarString = "";

    for(let i = 0; i < string.length; i++) {
        caesarString += charCodeMagic(string.charCodeAt(i), shift);
    }

    return caesarString;
};

function charCodeMagic(charCode, shift) {
    let newShift = shiftCheck(shift);
    if(charCode >= 65 && charCode <=90) {
        if((charCode + newShift) > 90) {
            let n = (charCode + newShift) - 90;
            return String.fromCharCode(64+n);
        }
        return String.fromCharCode(charCode + newShift);
    }
    else if (charCode >= 97 && charCode <= 122) {
        if((charCode + newShift) > 122) {
            let n = (charCode + newShift) - 122;
            return String.fromCharCode(96+n);
        }
        return String.fromCharCode(charCode + newShift);
    }
    return String.fromCharCode(charCode);
};

function shiftCheck (shift) {

    if(shift > 25) {
        return (shift % 25);
    }
    else { return shift;}
}


export { caesar }