//another method to import and export the things
//called common js method

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

module.exports= {
    add,
    subtract,
    multiply,
}