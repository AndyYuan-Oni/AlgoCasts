// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');

}
//solution by me
// function reverse(str) {
//     var n = str.length;
//     var reversed = "";

//     for (var i = n - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     return reversed;

// }

module.exports = reverse;