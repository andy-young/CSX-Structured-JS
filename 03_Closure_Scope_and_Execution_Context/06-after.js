// Write a function after that takes the number of times the callback
// needs to be called before being executed as the first parameter and
//the callback as the second parameter.

function after(count, cb) {
	function trigCB(input) {
        if (count === 0) {
        	return cb(input)
        } else {
            count--;
            return undefined
        }
    }
	count--
	return trigCB
}

var called = function(string) { return('hello ' + string); };
var afterCalled = after(3, called);

console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed