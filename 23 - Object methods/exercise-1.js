const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  keys: function(){
  return ` first name: ${this.firstName} \n last name: ${this.lastName} \n age: ${this.age} `;
  }
}

// Print values of person using Object.keys

console.log(person.keys());