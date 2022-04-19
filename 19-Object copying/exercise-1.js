const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

// Modifica la proprietà "firstName" di person2 in "Simon"

person2.firstName = " Simon ";

console.log(person1);
console.log(person2);

/* modificando l'oggetto person2 viene modificato l'oggetto person1 perchè 
per gli oggetti non avviene uno scambio di valori, bensi viene assagnata la stessa allocazione in memoria, 
quindi entrambe punteranno allo stesso oggetto.*/