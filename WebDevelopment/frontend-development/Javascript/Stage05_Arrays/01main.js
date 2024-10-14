//Arrays => Collection of items in an linear way


//creating an array :
let students = ["Deepak","Riyan","Aryan","Shyam"];//string array
let marks = [92,99,90,88,82,100];//integer array
let multiDataTypeArry = ["deepak",22];//array which contains both integer and string values
//Note : In js a array supports different datatypes in an single array


//Finding length 'arry.length' :
let length = students.length;
//Note : Array 's type is object

//Finding Type 'typeof arry' :
let type = typeof marks;

//Access Indices 'arr[index]' :
let accessIndex = students[0]; //stores Deepak
//Note : when we try to access a index which doesn't exists in an array then in this case we get undefined value

//Changing Value 'aay[index] = value' :
let changeIndex = marks[0] = 100;//change 92 into 100
//Note : array is mutable but Strings are immutable in javascript so we can't change the value of string


//Lopping/Iterating an array :

let arryInt = [2,4,7,9,22];

//for loop :
for(let i = 0; i<arryInt.length; i++){
  document.write(arryInt[i] + " ");//prints all values of arry
}

//for-of loop :
for(value of arryInt){
  document.write(value + " ");//prints all values of arry 
}

//printing an string array in uppercase using for of loop
let arryStr = ["Deepak ","Shyam"];
for(value of arryStr){
  document.write(value.toUpperCase());//this will print an arryStr in upper case 
}
