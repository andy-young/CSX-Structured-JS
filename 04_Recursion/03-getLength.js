// Get the length of an array using recursion without accessing its length property.

function getLength(array, count = 0) {
  if (array[count] || array.indexOf(undefined) === count) {
    count++;
    return getLength(array, count);
  } else return count;
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
console.log(getLength([undefined])); // -> 1
