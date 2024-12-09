/*
function orderTea(teaType){
    function confirmorder(){
        return "Order confirmed for chai";
    }
    return confirmorder();
}
let orderConfirmation  = orderTea("masala")
console.log(orderConfirmation)
*/



/*
calculateTotal = (price, quantity) =>{
    const totalCost = price * quantity;
return(totalCost)
}

let price = calculateTotal(10,5)
console.log(price)
*/


function ProcessTeaOrder(teaFunction){
    return  teaFunction('earl grey')
}

let order = ProcessTeaOrder(makeTea)
console.log(ordre);
