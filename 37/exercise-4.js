class BankAccount{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposit(cifra){
        this.saldo = cifra + this.saldo;
    }
    withdraw(cifra){
        this.saldo = this.saldo - cifra ;
    }
    view(){
        console.log(this.saldo);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();