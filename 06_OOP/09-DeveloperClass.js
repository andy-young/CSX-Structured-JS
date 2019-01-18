/*
Create a class DeveloperClass that creates objects by extending the PersonClass
class. In addition to having a name property and greet method, DeveloperClass
should have an introduce method. When called, introduce should log the string
"Hello World, my name is [name]".
*/

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("hello");
  }
}

class DeveloperClass extends PersonClass {
  constructor(name) {
    super(name);
  }

  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

const thai = new DeveloperClass("Thai", 32);

console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
thai.greet(); // -> Logs 'hello'
