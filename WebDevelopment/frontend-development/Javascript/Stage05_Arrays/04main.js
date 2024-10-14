//Array Methods:

//there are two types of methods :
// 1. change the orginal array
// 2. not change orginal array but return new array

let arry = [2,4,7,8,10,12,18];
let arry2 = [20,22,24,27,28,40];

//1. push() - add to end
arry.push(20); // - add 20 in orginal array

//2. pop() - delete from end & return
arry.pop(); // - delete 18 in orginal string

//3. toString() - converts array in string
let updatedArry = arry.toString();// - create an copy array and then convert not in orginal one

//4. concat() - Joins multiple arrays & return 
let concatArry = arry.concat(arry2); // - joins array and array2 but not in orginal one - can be concat multiple arrays more then 2

//5. unsift() - add to start & return 
//arry.unsift(2); 

//6. shift() - delete from start & return 
arry.shift(); // - delete an value 4 in orginal array 

//7. slice() - slice(startindex,endindex) - returns a piece of the array
let sliceArry = arry.slice(2,4); // - slice the array in copy array not on orginal one

//8. splice() - splice(startindex,delete,newelement) - change orginal array which can add,remove and replace
arry.splice(0,1);

