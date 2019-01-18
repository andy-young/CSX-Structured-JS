/*
Create a function personFromPersonStore that takes as input a name and an age.
When called, the function will create person objects using the Object.create
method on the personStore object.
*/

const personStore = {
  greet: () => console.log("hello")
};

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore("Sandra", 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
