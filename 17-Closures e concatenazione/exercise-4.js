function calculate() {
  let num = 0;
  return calcolo = {
    add(numero){
      num = num + numero;
      return this;
    },
    multiply(numero){
      num = num * numero;
      return this;
    },
    sub(numero){
      num = num - numero;
      return this;
    },
    divide(numero){
      num = num / numero;
      return this;
    },
    printResult(){
      console.log(num);
    }
  }

  }


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7