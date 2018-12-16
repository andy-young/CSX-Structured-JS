// Write a function arrayBuilder that takes in a count object and returns an
// array filled with the appropriate numbers of elements.The order of the
// elements in the array does not matter, but repeated elements should be grouped.

function arrayBuilder(obj) {

	const numOfItems = Object.values(obj).reduce((a,b) => a + b, 0);
	const arr = [];

	for (let i = 0; i < numOfItems; i++) {
		let key = Object.keys(obj)[i];
		let keyTotal = obj[Object.keys(obj)[i]];

		for (let i = 0; i < keyTotal; i++) {
			arr.push(key);
        }
    }
	return arr;
}

//Comment in the code below to test your function:

console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []