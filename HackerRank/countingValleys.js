function countingValleys(steps, path) {
	// Write your code here
	let valleys = 0;
	let seaLevel = 0;

	path = path.split("");

	path.forEach((step, idx) => {
		if (step === "U") {
			seaLevel++;
			if (seaLevel === 0) {
				valleys++;
			}
		} else {
			seaLevel--;
		}
	});

	return valleys;
}
/* [U,D,D,D,U,D,U,U] - Count and return the number of valleys in the hike. A valley is when a D is followed immediately by a U */

console.log(countingValleys(8, "UDDDUDUU"));
