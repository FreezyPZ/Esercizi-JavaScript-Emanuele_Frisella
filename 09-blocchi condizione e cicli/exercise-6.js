function getKeys(obj) {
  for (let keys in mimmo)
console.log(keys);
}

const mimmo = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(mimmo);
