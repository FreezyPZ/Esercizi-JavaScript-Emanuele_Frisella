function getKeys(obj) {

  const person = [];
  for ( let cont in obj) {
    person.push(cont);
    }
    return person;
  }

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);