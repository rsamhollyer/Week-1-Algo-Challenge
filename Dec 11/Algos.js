//1.   From an unsorted array of numbers 1 to 100 excluding one number, how
//would you find the missing number?
let numbers = [];
for (let i = 1; i <= 100; i++) {
	numbers.push(i);
}
// console.log(numbers);

let newNumbers = numbers.filter((n) => n !== 15);

// console.log(newNumbers);

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

const shuffledArray = shuffle(newNumbers);

// console.log(shuffledArray);

//So lets create another array to check the first array with
// console.log(numbers);

//And a variable to show whats missing

const arrayChecker = (mixed, good) => {
	let lostNumber;
	if (!good.every((n) => mixed.includes((lostNumber = n)))) {
		return lostNumber;
	}
	return lostNumber;
};

// console.log(arrayChecker(shuffledArray, numbers));

// //2. From an unsorted array, check whether there are any two numbers that
// will sum up to any given number (example: ([1,5,7,8,4,3,9] ,6) returns
// true & ([1,5,7,8,4,3,9] , 3) returns false)

let someArray1 = [1, 5, 7, 8, 4, 3, 9];
let someArray2 = [1, 5, 7, 8, 4, 3, 9];

let sumTo1 = 6;
let sumTo2 = 3;

const sumToTarget = (arr, number) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === number) {
				return true;
			} else {
				return false;
			}
		}
	}
};

// console.log(sumToTarget(someArray1, sumTo1));
// console.log(sumToTarget(someArray2, sumTo2));
// 3. Return the lowest index at which a value should be inserted into an array
//    once it has been sorted. (example: ([1,2,3,5], 1.5) should return 1
//    because it's greater than 1 (index 0) and less than 2 (index 1).

const insertValueAtLowestIndex = (arr, value) => {
	let indexToGoTo;
	let yourNewArray = arr.sort((a, b) => a - b);
	let i = 0;

	for (let num of yourNewArray) {
		if (num < value) {
			i++;
		} else if (value > arr.length) {
			indexToGoTo = arr.length;
			return indexToGoTo;
		} else {
			indexToGoTo = i;
			return indexToGoTo;
		}
	}
	// yourNewArray.forEach((n, i) => {
	// 	if (n < value) {
	// 		continue;
	// 	} else {
	// 		indexToGoTo = i;
	// 		return indexToGoTo;
	// 	}
	// });
	return indexToGoTo;
};
console.log(insertValueAtLowestIndex([1, 2, 3, 4], 4.5));
// 4. Write an algorithm that returns the reverse of a given word. For example, boat returns taob.
let word = "boat";

const reverseWord = (string) => {
	return string.split("").reverse().join("");
};
console.log(reverseWord(word));
