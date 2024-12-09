// Asychronous : stands for taking pause or getting the change in synchronous behaviour.
setTimeout(() =>{
    sayHello();
},6000);



function sayHello(){
    console.log("I would simply saying Hello!");
}
 

for (let index =0; index<10; index++){
    console.log(index);
}