//defaut import 
import multiply from "./mathOperationM.js";
console.log(multiply(3,2))

//named import
import {add,subtract} from "./mathOperationM.js";
console.log(add(4,3))
console.log(subtract(6,2))