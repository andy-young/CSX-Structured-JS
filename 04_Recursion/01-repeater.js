// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

function repeater(char, limit = 5) {
  char += char[0];
  if (char.length === limit) return char;
  return repeater(char);
}

console.log(typeof repeater);
console.log(repeater("g"));
console.log(repeater("j"));
