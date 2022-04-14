function getKeys(obj) {
  for ( let cont in obj) {
    console.log(obj[cont]);
    }
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