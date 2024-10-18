// Faulty Calculator which performs the wrong operations with probability of 10%.

//Result
let result = 0;

//looping boolean
let isRun = true;

//function for right operations 
function rightOperend(num1,o,num2){
  if (o == '+'){
    result = num1 + num2;
    isRun = false;
  }
  else if (o == '-'){
    result = num1 - num2;
    isRun = false;
  }
  else if (o == '*'){
    result = num1 * num2;
    isRun = false;
  }
  else if(o == '/'){
    result = num1 / num2;
    isRun = false;
  }
  else{
    alert("  Invilid input try again");
  }
}

//function for wrong operations
function wrongOperend(num1,o,num2){
  if (o == '+'){
    result = num1 - num2;
    isRun = false;
  }
  else if (o == '-'){
    result = num1 / num2;
    isRun = false;
  }
  else if (o == '*'){
    result = num1 + num2;
    isRun = false;
  }
  else if(o == '/'){
    result = num1 ** num2;
    isRun = false;
  }
  else{
    alert("  Invilid input try again");
  }
}
""
//Random probability 
let probability = Math.floor(Math.random() * 100) + 1;

//user input
//check probability 
while(isRun){
  let num1 = parseFloat(prompt("  Enter 1st Number :"));
let operator = prompt("  Enter operand :");
let num2 = parseFloat(prompt("  Enter 2nd Number :"));

  if(probability <= 10){
    rightOperend(num1,operator, num2);
  }
  
else{
  wrongOperend(num1,operator, num2);
}
}

//print result
console.log(result);


