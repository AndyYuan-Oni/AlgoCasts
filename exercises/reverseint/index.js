// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var sign = Math.sign(n);
    var nEl = (n * sign).toString();
    var arrayed = parseInt(nEl.split('').reverse().join(''));
    return arrayed * sign;

}

module.exports = reverseInt;