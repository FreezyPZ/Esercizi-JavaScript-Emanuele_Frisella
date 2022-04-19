const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  values: function(){
    return ` ${this.firstName} \n ${this.lastName} \n ${this.age} `;
  }
}

// Print values of person using Object.values

console.log(person.values());