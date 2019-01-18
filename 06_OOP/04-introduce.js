/* Without editing the code you've already written, add an introduce method to
the personStore object that logs "Hi, my name is [name]".
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

personStore.introduce = function() {
  console.log(`Hi, my name is ${this.name}`);
};

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
