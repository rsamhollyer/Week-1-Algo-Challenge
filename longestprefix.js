const longestCommonPrefix = function (strs) {
	let length = Infinity;
	let newArr = [];
	strs.forEach((str) => {
		if (str.length < length) {
			length = str.length;
		}
		return strs.forEach((string) => string.splice(0, length));
	});
	newArr = [...strs];
	return newArr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
