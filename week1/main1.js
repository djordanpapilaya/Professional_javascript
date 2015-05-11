/**
 * Created by MacBookDjordan on 11/05/15.
 */
//Opdracht1
var number  = 10;
var number2 = number;
number += 20;

console.log(number);
console.log(number2);

console.log("____________");
//opdracht2

var object = {
  amount : 20
};
var object2 = object;
object.amount += 20;

console.log(object.amount);
console.log(object2.amount);

console.log("____________");

//opdracht 3
function amount(){
    var sum = 0;
    for(var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(amount(1,5,7,9));

console.log("____________");

//opdracht 4
var array = [4, "hallo", "Doei"];


var arrayAlert = function(array, action){
    if (action == "log"){
        console.log(array);
    } else if(action == "alert") {
        alert(array);
    }
};

arrayAlert(array, "alert");