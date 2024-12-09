/*
function Person(name,age){
    this.name = name;
    this.age = age;
}

let Anshu = new Person("Anshuman", 19)
console.log(Anshu)


Array.prototype.Anshuman =function(){
    return `Custom method ${this}`;
};

let myarr = [3,45,23]
console.log(myarr.Anshuman)


class Vehical {
    constructor(make, model){
       this.make = make
       this.model = model
    }

    start(){
        return `${this.model} is a Car from ${this.make}`
    }
}
*/


//Encapsulation
/*
class BankAccount {
    balance = 0;

    deposite(amount){
        this.balance += amount;
        return this.balance;
    }
   
    getBalance(){
        return `$ ${this.balance}`;
    }   
}
let account = new BankAccount();
console.log(account.getBalance())
*/



//Abstraction
class CoffeeMachine{
    start(){
        //complex calculation
        return "Starting the machine...."
    }

    brewcoffee(){
        return "brewing the coffee...."
    }

    pressStartButton(){
        let msgone = this.start();
        let msgTwo = this.brewcoffee();
        return `${msgone} + ${msgTwo}`;
    
    }
}

// let myMachine = new CoffeeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewcoffee())
// console.log(myMachine.pressStartButton());



//polymorphism
class Bird{
    fly(){
        return "Flying....";
    }
}

class Penguin extends Bird{
    fly(){
        return "Penguins can't fly";
    }
}

bird = new Bird()
// console.log(bird.fly())

bird2 = new Penguin()
// console.log(bird2.fly())




//static method
class Calci{
    static add(a,b){
        return a+b;
    }
}

let mini_calci = new Calci()
// console.log(mini_calci.add()) //throwing the error 

// console.log(Calci.add(2,4)) //6

