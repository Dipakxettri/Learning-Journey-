//Loops

/*
for
while
do-while
for-of Loop
for-in Loop
*/

//code:
//For Loop
let num = 0;
for(num = 0; num<=100; num++){
  document.write(num + " ");//prints 0 to 100
}

//while Loop
let num2 = 0;
while(true){
  document.write(num2 + " ");
  if(num2 == 100){
    break;//break the loop when the value of num2 becomes 101 so it will print 0 to 100
  }
  num2++
}

//Do-While Loop
let num3 = 0;
do{
 document.write(num3 + " ");//prints from 0 to 100
 num3++;
}while(num3<=100);

//for of Loop => The for-of loop is used for iterating over iterable objects like arrays or strings. Here’s an example:
let str = "Deepak";
for (let i of str){
  document.write(i);
}

//for in Loop => The for-in loop is typically used for iterating over the properties of an object. Here's an example using an object:
let obj = {
  a: 0, 
  b: 1,
  c: 2, 
  d: 3, 
  e: 4 
};

for (let key in obj) {
  document.write(key + ": " + obj[key] + " "); // prints key-value pairs
}