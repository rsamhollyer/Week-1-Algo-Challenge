let s1 = "aabcc";
let s2 = "adcaa";

function x(s1, s2) {
	let count = 0;
	let s1Dict = {};

	for (let i = 0; i < s1.length; i++) {
		let char = s1.charAt(i);
		// Is this character in the dictionary as a key?
		if (!(char in s1Dict)) {
			s1Dict[char] = 1;
		} else {
			s1Dict[char] += 1;
		}
	}
	for (let j = 0; j < s2.length; j++) {
		let char2 = s2.charAt(j);
		if (char2 in s1Dict && s1Dict[char2] > 0) {
			s1Dict[char2]--;
			count++;
		}
	}

	console.log(count);
}

x(s1, s2);
