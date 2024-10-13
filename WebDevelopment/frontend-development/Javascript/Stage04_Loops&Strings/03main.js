//Print all odd numbers from 0 to 100

let num = 0;
let isRun = true;
while(isRun){
  num++;
  if(num%2 != 0){
    document.write(num + " ");
  }
  if(num == 100){
      break;
    }
}
