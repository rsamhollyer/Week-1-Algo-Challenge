function sockMerchant(n, ar) {
	let counter = 0;
	let sockArray = [];

	// let obj = ar.reduce((acc, cur) => {
	// 	if (!acc[cur]) {
	// 		acc[cur] = 1;
	// 		return acc;
	// 	} else {
	// 		acc[cur] += 1;
	// 		return acc;
	// 	}
	// }, {});
	// console.log(obj);

	// Object.keys(obj).forEach((k) => {
	// 	console.log(k);
	// 	if (obj[k] % 2 === 0) {
	// 		counter += obj[k];
	// 	} else {
	// 		obj[k] -= 1;
	// 		counter += obj[k];
	// 	}
	// });
	// return counter / 2;
	ar.forEach((sock) => {
		if (!sockArray.includes(sock)) {
			sockArray.push(sock);
		} else {
			counter++;
			sockArray = sockArray.filter((s) => sock !== s);
		}
	});
	return counter;
}

/* [[1,1],[2,2],[1,1]] - match 2 socks and place them in an array then push onto return array and return that array's length

[1,2,1,2,4,5,2,1,3,1]
*/

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
