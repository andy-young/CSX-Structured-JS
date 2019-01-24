function factorial(num, product = 1) {
	return num === 0 ? product : factorial(num - 1, product *= num);
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
