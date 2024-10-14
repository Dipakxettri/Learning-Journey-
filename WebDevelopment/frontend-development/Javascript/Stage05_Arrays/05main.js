// Add and Remove an companies name

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// a. remove the first company from the array
companies.shift();

//b. remove uber & add ola in it place 
companies.splice(1,1,"Ola");

//c. add Amazon at the end
companies.push("Amazon");

//Note : all these methods will be make changes in orginal array