// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

let i = 0;
let str = "";

function repeater(char) {
  if (i === 5) {
    i = 0;
    let temp = str;
    str = "";
    return temp;
  } else {
    i++;
    str += char;
    return repeater(char);
  }
}

console.log(typeof repeater);
console.log(repeater("g"));
console.log(repeater("j"));
