//Identify total grade from total marks


let totalMarks = parseFloat(prompt("Enter the total marks (out of 100):"));

let grade;

if (totalMarks >= 90 && totalMarks <= 100) {
  grade = 'A+';
} else if (totalMarks >= 80 && totalMarks < 90) {
  grade = 'A';
} else if (totalMarks >= 70 && totalMarks < 80) {
  grade = 'B+';
} else if (totalMarks >= 60 && totalMarks < 70) {
  grade = 'B';
} else if (totalMarks >= 50 && totalMarks < 60) {
  grade = 'C';
} else if (totalMarks >= 40 && totalMarks < 50) {
  grade = 'D';
} else if (totalMarks >= 0 && totalMarks < 40) {
  grade = 'F';  // Fail
} else {
  grade = 'Invalid marks';
}

alert("The grade is: " + grade);