function getLength(arr, i = 0) {
    if (arr.indexOf(undefined) > -1 || arr[0] || arr[0] !== arr[0]) {
			arr.pop();
      return getLength(arr, ++i);
    } else return i;
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
console.log(getLength([NaN])) // -> 1
console.log(getLength([NaN, NaN, NaN])) // -> 3
console.log(getLength([undefined])); // -> 1
console.log(getLength([undefined, undefined, undefined])); // -> 3
