/*
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first

letters of the infinite string.

Example

The substring we consider is , the first characters of the infinite string. There are occurrences of a in the substring. 
*/

// Complete the repeatedString function below.
// function repeatedString(s, MAX) {
// 	// This is too slow for large numbers
// 	let c = 0; //how many 'a' chars we have seen
// 	let littleCounter = 0; // resetting counters
// 	let bigCounter = 0; // true counter , never exceeds MAX
// 	let len = s.length;

// 	while (bigCounter < MAX) {
// 		if (s[littleCounter] === "a") {
// 			c++;
// 		}

// 		littleCounter++;
// 		if (littleCounter === len) littleCounter = 0;
// 		bigCounter++;
// 	}

// 	return c;
// }

function repeatedString(s, MAX) {}

s = "aba";
n = 10;

//4

console.log(repeatedString(s, n));
