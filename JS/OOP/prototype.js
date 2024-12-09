let computer = { cpu:12}
let lenevo = {
    screen: "HD",
    __proto__: computer

};

let tomHardware = {
    ram: "74GB",
    __proto__:computer
};
// console.log('lenevo',lenevo.__proto__);
// console.log('tomHardware',tomHardware.__proto__);

let genericCar ={tyres: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, genericCar);
console.log('tesla',Object.getPrototypeOf(tesla))