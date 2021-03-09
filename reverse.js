function reverse(string) {
    let length = string.length -1;
    let reversed = "";

    for (length; length >= 0; length--) {
        reversed += string[length];
    }

    return reversed;
};

module.exports = reverse;