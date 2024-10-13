// Creating an Gmail Account

let gmailUserName;
let l;
let isRun = true;

while(isRun){
  gmailUserName = prompt("  Enter your gmail username ex:abcd99 :");
l = gmailUserName.length;
  if(l>14){
    alert("  length should we lower then 14");
  }
  else if(l<4){
    alert("  length should be greater then 4 ");
  }
  else{
    break;
  }
}

alert(` your email is ${gmailUserName}@gmail.com`);


