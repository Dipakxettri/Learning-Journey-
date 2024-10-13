// Basic Calculator program in javascript (JS)

let num1 = Number(prompt("  Enter 1st Number :"));
let operator = prompt(" Enter Operator :");
let num2 = Number(prompt("  Enter 2nd Number :"));

//Note : In Js the prompt take string as a input by dufult so we need to specify its type by own using " Number() " or " parseFloat()" methods

if(operator == '+'){
  alert(num1 + num2);
}
else if(operator == '-'){
  alert(num1 - num2);
}
else if(operator == '×'){
  alert(num1 * num2);
}
else if(operator == '÷'){
  alert(num1 / num2);
}
else{
  alert("Incorrect input");
}
