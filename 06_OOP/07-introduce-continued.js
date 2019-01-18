/*
Without editing the code you've already written, add an introduce method
to the PersonConstructor function that logs "Hi, my name is [name]".
*/

function PersonConstructor() {
  this.greet = () => console.log("hello");
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor("Mike", 30);

PersonConstructor.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name}`);
};

mike.introduce(); // -> Logs 'Hi, my name is Mike'
