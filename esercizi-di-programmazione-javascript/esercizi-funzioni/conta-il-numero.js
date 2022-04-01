/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/




function contaNumeri(){
  let numero=710;
  if(numero<10){
    console.log("è formato da 1 cifra")
  }
  else if(numero >= 10 && numero < 100){
    console.log(" è formato da 2 cifre")
  }
  else if(numero >= 100 && numero <= 999){
    console.log("è formato da 3 cifre")
  }
  else if(numero >= 1000 && numero <= 9999){
    console.log("è formato da 4 cifre")
  }
  else{
    console.log("ha più di 4 cifre")
  }
}

contaNumeri();