// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

function majority(arr, cb) {
	let trues = 0, falses = 0;
	const bools = arr.map(el => cb(el));

	bools.forEach(bool => bool === true ? trues++ : falses++);

	return trues > falses ? true : false;
}


var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false