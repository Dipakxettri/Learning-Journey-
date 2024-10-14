//Average calculation from an Array

//variables 
let marks = [85,97,44,37,76,60];
let sum = 0;
let average = 0;
let totalNumValue = marks.length;

//loop to sum marks 
for(mark of marks){
  sum += mark;
}

//calculate average and print the result
average = sum / totalNumValue;
document.write(average);

