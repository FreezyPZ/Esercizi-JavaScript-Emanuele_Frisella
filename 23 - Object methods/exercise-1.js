const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
}

// Print values of person using Object.keys

console.log(Object.keys(person)[0] + `: ${person.firstName}\n`,Object.keys(person)[1] + `: ${person.lastName}\n`, Object.keys(person)[2] + `: ${person.age}`);