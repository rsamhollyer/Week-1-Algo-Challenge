//Each email is 20pts
function campusCup(arr) {
	let newArr = [];
	let newObj = {};

	arr.forEach((index) => newArr.push(index.split("@")[1]));

	newArr.reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 0;
		}
		obj[item] += 20;
		return newObj;
	}, newObj);

	for (let key in newObj) {
		newObj[key] = Math.floor(newObj[key] / 100) * 100;
	}

	let resultarray = Object.entries(newObj).sort((a, b) => {
		if (a[1] > b[1]) {
			return -1;
		} else if (a[1] < b[1]) {
			return 11;
		} else if (a[0] > b[0]) {
			return 1;
		} else if (a[0] < b[0]) {
			return -1;
		} else {
			return 0;
		}
	});
	return resultarray.map((stuff) => stuff[0]);
}

emails = ["john.doe@mit.edu", "admin@rain.ifmo.ru", "noname@mit.edu"];
//expected order: ["mit.edu", "rain.ifmo.ru"] - since neither uni got any extra space and mit comes before rain in alpha order.
// console.log(campusCup(emails));

emails2 = [
	"b@harvard.edu",
	"c@harvard.edu",
	"d@harvard.edu",
	"e@harvard.edu",
	"f@harvard.edu",
	"a@student.spbu.ru",
	"b@student.spbu.ru",
	"c@student.spbu.ru",
	"d@student.spbu.ru",
	"e@student.spbu.ru",
	"f@student.spbu.ru",
	"g@student.spbu.ru",
];

// the output should be campusCup(emails) = ["harvard.edu", "student.spbu.ru"].
// console.log(campusCup(emails2));

emails3 = [
	"a@rain.ifmo.ru",
	"b@rain.ifmo.ru",
	"c@rain.ifmo.ru",
	"d@rain.ifmo.ru",
	"e@rain.ifmo.ru",
	"noname@mit.edu",
];
// the output should be: campusCup(emails4) = ["rain.ifmo.ru", "mit.edu"]
// console.log(campusCup(emails3));

emails4 = [
	"a@rain.ifmo.ru",
	"a@mit.edu.ru",
	"b@mit.edu.ru",
	"c@mit.edu.ru",
	"d@mit.edu.ru",
	"e@mit.edu.ru",
	"f@mit.edu.ru",
	"g@mit.edu.ru",
	"h@mit.edu.ru",
	"i@mit.edu.ru",
	"j@mit.edu.ru",
	"k@mit.edu.ru",
	"l@mit.edu.ru",
	"m@mit.edu.ru",
	// "n@mit.edu.ru",
	// "o@mit.edu.ru",

	"b@rain.ifmo.ru",
	"c@rain.ifmo.ru",
	"d@rain.ifmo.ru",
	"e@rain.ifmo.ru",
	"f@rain.ifmo.ru",
	"g@rain.ifmo.ru",
	"h@rain.ifmo.ru",
	"i@rain.ifmo.ru",
	"j@rain.ifmo.ru",
	"k@rain.ifmo.ru",
	"l@rain.ifmo.ru",
	"m@rain.ifmo.ru",
	"n@rain.ifmo.ru",
	"o@rain.ifmo.ru",
	"p@rain.ifmo.ru",
	"q@rain.ifmo.ru",
	"r@rain.ifmo.ru",
	"s@rain.ifmo.ru",
	"t@rain.ifmo.ru",
	"u@rain.ifmo.ru",
	"v@rain.ifmo.ru",
	"w@rain.ifmo.ru",
	"x@rain.ifmo.ru",
	"y@rain.ifmo.ru",
];

console.log(campusCup(emails4));
