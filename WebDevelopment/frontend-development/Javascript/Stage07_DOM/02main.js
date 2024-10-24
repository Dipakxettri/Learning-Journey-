//Coloring the boxes

//generating 5 digit random numbers :
let randomNum;
let randomNums = ["0","0","0","0","0"];
for(let i = 0; i<=4;i++){
  randomNum = Math.floor(Math.random() * 5) + 1;
  randomNums[i] = randomNum;
  //document.write(randomNums[i]);
}

//now generating a random colors from that random numbers :
let colors = ["red","blue","yellow","green","pink"];
let randomColors = ["0","0","0","0","0"];

for(let i = 0; i<=4 ; i++){
  if(randomNums[i] == 1){
  randomColors[i] = colors[0];
}
else if(randomNums[i] == 2){
  randomColors[i] = colors[1];
}
else if(randomNums[i] == 3){
  randomColors[i] = colors[2];
}
else if(randomNums[i] == 4){
  randomColors[i] = colors[3];
}
else{
  randomColors[i] = colors[4];
}
}

/*for(let i = 0; i<=4; i++){
  document.write(randomColors[i]);
}*/

//now applying the random colors in the boxes :
let boxes = document.getElementsByClassName("box");
for(let i = 0; i<boxes.length; i++){
  boxes[i].style.backgroundColor = randomColors[i];
}