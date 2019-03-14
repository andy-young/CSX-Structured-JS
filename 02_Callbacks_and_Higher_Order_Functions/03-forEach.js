/*
Part 1 -----------------------------------------------------------------------
Create a function forEach which takes an array and a callback, and runs the
callback on each element of the array. forEach does not return anything.
Please do not use the native forEach or map method.

var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

Part 2 -----------------------------------------------------------------------
Now let's rebuild map from challenge 1. This time instead of using a for loop, you're going to use the forEach we just created.

*/
function forEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key);
    }
  }
}

function map(collection, callback) {
  let acc = [];

  if (Array.isArray(collection)) {
		forEach(collection, (el, i) => acc.push(callback(el, i)));
  } else {
  	  acc = {};
	    forEach(collection, (el, key) => acc[key] = callback(el, key));
	}
  return acc;
}

console.log(typeof forEach); // should log: 'function'
forEach(['a', 'b', 'c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], n => n - 2)); // should log: [1, 2, 3]
console.log(map({a: 1, b: 2, c: 3}, num => num ** 2)); // should log: { a:1, b: 4, c: 9 }
