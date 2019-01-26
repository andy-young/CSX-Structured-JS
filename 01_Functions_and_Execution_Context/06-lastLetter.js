// Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'

const lastLetter = word => word[word.length - 1];

// or

function lastLetter(word) {
	return word[word.length - 1]
}


// console.log(lastLetter("hello")); //=> "o"
// console.log(lastLetter("goodbye!")); //=> "!"
// console.log(lastLetter("ZeltoiD")); //=> "D"
// console.log(lastLetter("I love Javascript")); //=> "t"
