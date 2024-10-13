//String :
let name = "Deepak";
//index =>  012345

//access each index - varName[index]
document.write(name[0]);//print the index '0' of name which is 'D'

//finding length
document.write(name.length);

//finding type 
document.write(typeof name);




//Templete Literals => A way to jave embedded expressions in strings
let specialStr = `This is a template literals`;
document.write(specialStr);



//String Interpolation => To create strings by doing substitution of placeholders
const product = {
  itemName : "Book",
  price : 840,
}
let output = `The price of ${product.itemName} is ${product.price}`;//print the value of objects as a string
document.write(output);


//Escape Sequence Characters :
//1). \n - new line
//2). \t - tab space


//String methods :
/*
1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim() - removes whitespace
*/

