const person = {
  firstName: '',
  lastName: '',
  set fullName(name) {
    [this.firstName,this.lastName] = name.split(' ')
  },
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = Object.create(person);
const simon = Object.create(person);
john.fullName = 'John Doe';
simon.fullName = 'Simon Collins';

console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins