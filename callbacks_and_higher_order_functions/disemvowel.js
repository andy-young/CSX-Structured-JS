
disemvowel = (string) => string.replace(/[aeiou]/ig, "");

//Comment in the code below to test your function:

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'
