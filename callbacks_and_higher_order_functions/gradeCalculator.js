function gradeCalculator(grade) {
  //your code goes here...
	const grades = {
    A: grade >= 90,
    B: grade >= 80,
    C: grade >= 70,
    D: grade >= 60,
    F: grade <  60
  }
  return Object.keys(grades).find(key => grades[key] === true);
}

//Un-comment the lines below to test your code

console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"