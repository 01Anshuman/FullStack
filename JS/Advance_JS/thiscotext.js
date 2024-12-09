const person = {
    name :"Anshuman",
    greet(){
        console.log(`Hi,I am ${this.name}`);
    },
};

person.greet();

const greetFunction = person.greet
greetFunction()
//Hi, I am Undefined
//while realocating the fucntion to another variable refernce doesn't get with them.

const boundGreet = person.greet.bind({name: "Umang"})
boundGreet()
//Hi, I am Umang
//with help of bind keyword manually injecting the reference to new function/variable


