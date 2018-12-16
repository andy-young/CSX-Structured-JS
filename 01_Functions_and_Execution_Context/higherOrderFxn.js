// Make a fxn that manipulates the elements in an array.
// Allow our 'Manipulator Function' to mimic the powers
// of other functions.

function arrayManipulator(array, otherFxn) {
  let changed = [];
  for (let i = 0; i < array.length; i++) {
    changed.push(otherFxn(array[i]));
  }
  return changed;
}

function square(number) {
  return number * number;
}

function squareRoot(number) {
  return Math.sqrt(number);
}

const squaredArray = arrayManipulator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], square)
console.log("Squaring: ", squaredArray);

const sqrtArray = arrayManipulator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], squareRoot)
console.log("squareRoot: ", sqrtArray);

const squareItBack = arrayManipulator(squaredArray, squareRoot)
console.log("Change the squared back to normal: ", squareItBack);

// We can possess this power because Functions in JS may co-exist with other
// objects equally, and thusly be used by one another.

// Higher-Order Functions are those that may receive and/or return Functions.