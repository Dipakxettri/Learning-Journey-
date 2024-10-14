//finding the final prices from an discount percentage 

let prices = [250,645,300,900,50];
let discountPercentage = 0.30;


//finding final prices of each items after applying discount of 30% in each prices
for(let i = 0; i<prices.length; i++){
  prices[i] = prices[i] * (1 - 
  discountPercentage);
}

//printing an final prices
for(let price of prices){
console.log(price);
}

