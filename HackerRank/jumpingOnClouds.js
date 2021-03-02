const assert = require("assert");
function jumpingOnClouds(c) {
	//We always start on index 0 - implies looping
	//We want to stop on the last 0 value - arr[arr.length-1]
	// Along the way we count # of jumps
	//Can jump by 1 or 2
	//Cannot land on value of 1
	let jumps = -1;
	let i = 0;

	while (i < c.length) {
		//look at c[i+1] & c[i+2]
		//prefer c[i+2] if not equal to 1
		const hop2Valid = i + 2 <= c.length - 1;
		const hop2IsValid = c[i + 2] !== 1;
		if (hop2Valid && hop2IsValid) {
			i = i + 2;
		} else {
			i++;
		}
		jumps++;
	}

	return jumps;
}
const c = [0, 0, 1, 0, 0, 1, 0];
const d = [0, 0, 0, 1, 0, 0];
// console.log(jumpingOnClouds(c));
// assert.equal(jumpingOnClouds(c), 5);
assert.equal(jumpingOnClouds(d), 3);
