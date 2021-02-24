function jumpingOnClouds(c) {
	//We always start on index 0 - implies looping
	//We want to stop on the last 0 value - arr[arr.length-1]
	// Along the way we count # of jumps
	//Can jump by 1 or 2
	//Cannot land on value of 1
	let jumps = 0;
	let i = 0;

	while (i < c.length) {
		//look at c[i+1] & c[i+2]
		//prefer c[i+2] if not equal to 1
		if (c[i + 2] !== 1) {
			i = i + 2;
		} else {
			i++;
		}
		jumps++;
	}

	return jumps;
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
