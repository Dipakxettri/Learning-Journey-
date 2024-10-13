//Data Types

//Primitives :

//1) int 
let intValue = 20;
//2) String
let stringValue = "Deepak";
//3) Boolean
let isTrue = true;
//4) undefined
let undefinedValue;
//5)Null
let nullValue = null;
//6)Bigint
//7)Symbol

/*Non Primitives :
=> objections of values (Arrays,Functions)

object:
key:value = {
  name : "Deepak",
  age : 18,
}
*/

const student = {//object can be update even with const
  fullName : "Deepak",
  age : 18,
  gpa : 3.2,
  isPass : true,
}

//Access keys
console.log(student["fullName"]);
//or
console.log(student.age);
