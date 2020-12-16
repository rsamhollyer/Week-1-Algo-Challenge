/*
P3. Group Anagrams
Write a function that takes in an array of strings and groups anagrams together.
Anagrams are strings made up of exactly the same letters, where order doesn’t matter. For example, cinema and iceman are anagrams; similarly foo and ofo are anagrams.
Your function should return a list of anagram groups in no particular order.
Sample Input
[“yo”, “act”, “flop”, “tac”, “foo”, “cat”, “oy”, “olfp”]
Sample Output
[[“yo”, “oy”], [“flop”, “olfp”], [“act”, “tac”, “cat”], [“foo”]]
Note: Watch your runtime.  Make sure you’re not creating a n^3 runtime. Would sorting first actually be beneficial in this problem? (
 */

const anagramsArray = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];

const anaFunc = (arr) => {
	let newAnagrams = [];
	let newObj = {};

	arr.forEach((w) => {
		w = w.split("").sort().join("");
		newAnagrams.push(w);
	});

	newAnagrams.forEach((w, idx) => {
		if (!newObj[w]) {
			newObj[w] = [];
		}
		newObj[w].push(arr[idx]);
	});
	return Object.values(newObj);
};

console.log(anaFunc(anagramsArray));
