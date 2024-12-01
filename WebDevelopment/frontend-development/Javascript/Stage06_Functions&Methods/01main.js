//Functions in JS

//Function Defination :
function functionName(){
  //do some work
}

function functionName(parameter1,parameter2){//parametors
  //do some work
}

//Function Call :
functionName();
functionName(2,8);//arguments - The 2 will be for parameter 1 and 8 will be for parameter 2

//Note : Function parameters are local variables of function - Block Scope

let nameV = "Deepak";
function name(n){
  console.log(nameV)
}

name(nameV);
