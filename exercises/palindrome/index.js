// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    const reverse = str.split('').reverse().join('');
    return str === reverse;
}
// function palindrome(str) {

//     var n = str.length;
//     var reversed = "";
//     var result;
//     for (var i = n - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     if (reversed == str) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return result;
// }



module.exports = palindrome;