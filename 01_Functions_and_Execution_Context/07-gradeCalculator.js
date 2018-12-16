// Create a function gradeCalculator which takes a grade (number) and console.logs its letter grade.

// grades 90 and above should return "A"

// grades 80 to 89 should return "B"

// grades 70 to 79 should return "C"

// grades 60 to 69 should return "D"

// 59 and below should return "F"

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