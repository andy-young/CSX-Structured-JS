/*
Write a function called runInOrder that accepts as arguments in this order -

an array of functions
an array of numbers representing times in milliseconds
runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. For example -

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye')
*/

// write fxn 'runInOrder' with args fxnArray, msArray
function runInOrder(fxnArr, msArr) {
  for (let i = 0; i < fxnArr.length; i++) {
    setTimeout(() => fxnArr[i](), msArr[i + -i]);
  }
}

function sayHi() {
  console.log("hi");
}
function sayBye() {
  console.log("bye");
}
function sayHowdy() {
  console.log("howdy");
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
