function Person(name, age){
    this.name = name
    this.age = age

}

function Car(make,model){
    this.make = make
    this.model = model
}

let myCar1 = new Car("Toyota","Camry")
let myCar2 = new Car("Hundai","Siraz")
// console.log(myCar1)
// console.log(myCar2)


let person1 = new Person("Anshuman", 20)
let person2 = new Person("Avichal",20)
// console.log(person1)
// console.log(person2)

function Tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")
console.log(lemonTea.describe())

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());