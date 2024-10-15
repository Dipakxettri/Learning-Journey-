// Arrow Functions => compact way of writing a function
// The '=>' Arrow symbol defines this is a Arrow function

//syntax :
const functionName = (param1,param2) => {
  //do some work
}//in this the function will store in functionName

//code :
const sum = (a,b)=>{
  console.log(a+b);
}
sum(1,1);//call

const mult = (a,b) => {
  console.log(a*b);
}
mult(2,2);

//Note : in arrow function a function is stored in normal variable so we can change its value like a normal variable 