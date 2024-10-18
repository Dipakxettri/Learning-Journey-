//Business Name Genarator by combining list of adjectives,shop name and another words.

/*
Adjectives :
Crazy
Amazing
Fire

Shop Name :
Engine 
Foods
Garments

Another Words :
Bros
Limited
Hub
*/

//alert(randomNum);

//Adjectives :
let adjectives1 = "Crazy";
let adjectives2 = "Amazing"
let adjectives3 = "Fire";

//Shop Names :
let shop1 = "Engine";
let shop2 = "Foods";
let shop3 = "Garments";

//Another word
let anotherWords1 = "Bros";
let anotherWords2 = "Limited";
let anotherWords3 = "Hub";

//function to generate the random name from the list
let adjective,shopName,anotherWord;
function generateRandomNames(){
  
  //loops
  //loop for Adjectives
  for(let i = 0; i<1; i++){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
      adjective = adjectives1;
    }
    else if(randomNum == 2){
      adjective = adjectives2;
    }
    else{
      adjective = adjectives3;
    }
  }
  
  //for for ShopName
  for(let i = 0; i<1; i++){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
      shopName = shop1;
    }
    else if(randomNum == 2){
      shopName = shop2;
    }
    else{
      shopName = shop3;
    }
  }
  
  //loop for another words
  for(let i = 0; i<1; i++){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum == 1){
      anotherWord = anotherWords1;
    }
    else if(randomNum == 2){
      anotherWord = anotherWords2;
    }
    else{
      anotherWord = anotherWords3;
    }
  }
  
}

//calling function
generateRandomNames();

//Now finally combining an all generated elements
let businessName = adjective + shopName + anotherWord;
console.log(businessName);
