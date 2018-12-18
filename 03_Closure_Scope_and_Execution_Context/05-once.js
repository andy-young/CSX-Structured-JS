/*
Write a function once that accepts a callback as input and returns a function.
When the returned function is called the first time, it should call the callback and return that output.
If it is called any additional times, instead of calling the callback again
it will simply return the output value from the first time it was called.
*/

// function once(cb) {
// 	let firstCall;

// 	function inner(input) {
// 		if(!firstCall) {
// 			firstCall = cb(input);
// 			return firstCall;
// 		} else {
// 			return firstCall;
// 		}
// 	}
// 	return inner;
// }

function once(cb) {
	let cachedResult;
  let fxnCalled = false;

	function oneCall(...args) {
		if (!fxnCalled) {
			cachedResult = cb(...args);
			fxnCalled = true;
		}
	return cachedResult;
    }
	return oneCall
}

var addByTwoOnce = once(function(num) {
  return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7