/*
Create a function PersonConstructor that uses the this keyword to save a
single property onto its scope called greet. greet should be a function
that logs the string "hello".
*/

function PersonConstructor() {
  this.greet = () => console.log("hello");
  this.add2 = num => {
    this.num = num + 2;
    console.log(this.num);
  };
}

const simon = new PersonConstructor();

simon.greet(); // -> Logs 'hello'
simon.add2(2); // -> Logs 4
