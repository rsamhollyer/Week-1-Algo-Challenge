const assert = require("assert");
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

*/
const isValid = (s) => {
	if (s.length % 2 !== 0) return false;

	// const stringArr = s.split("");
	//we have an array of strings
	//we can't compare arr[i] ==== arr[i+1] because this won't pass : {[]}
	// we can't do palindrome because sometimes they're not nested

	//clever solution : loop, removing matching pairs
	while (s.length !== 0) {
		const original = s;
		console.log(s);
		s = s.replace("()", "");
		console.log(s);
		s = s.replace("[]", "");
		console.log(s);
		s = s.replace("{}", "");
		console.log(s);

		const didNotChange = s === original;
		//did s change at all? If not, return false
		if (didNotChange) {
			return false;
		}
	}
	return true;
};

let s = "()[]{}";
let s2 = "(]";
let s3 = "[(])";
let s4 = "{[([{[()]}])]}";
// assert.strictEqual(true, isValid(s));
// assert.strictEqual(false, isValid(s2));
console.log(isValid(s));
// console.log(isValid(s2));
// console.log(isValid(s3));
console.log(isValid(s4));
