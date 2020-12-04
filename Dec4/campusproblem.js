//Each email is 20pts
function campusCup(arr) {
	let newArr = [];
	arr
		.forEach((index) => newArr.push(index.split("@")[1]))
		.reduce((obj, item) => {
			if (!obj[item]) {
				obj[item] = 0;
			}
			obj[item]++;
			return obj;
        }, {});
        let newObj ={,obj}
}

emails = ["john.doe@mit.edu", "admin@rain.ifmo.ru", "noname@mit.edu"];
//expected order: ["mit.edu", "rain.ifmo.ru"] - since neither uni got any extra space and mit comes before rain in alpha order.
console.log(campusCup(emails));
