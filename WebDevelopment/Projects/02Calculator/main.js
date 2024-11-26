// alert("hi");

const bg = document.querySelector(".container");
const tB = document.getElementById("toggleB");

const display = document.getElementById("displayF");
const calc = document.querySelector(".calc");
const buttons = document.querySelector(".button");


tB.addEventListener("click",()=>{
    
    
    if(tB.textContent == "Dark Mode"){
        // bg.style.backgroundColor ="black";
        tB.style.backgroundColor = "white";
        tB.textContent = "White Mode";
        tB.style.color = "black";
        calc.style.backgroundColor = "#090004";
    }
    else{
        bg.style.backgroundColor = "rgb(213, 206, 206)";
        tB.textContent = "Dark Mode";
        tB.style.backgroundColor = "black";
        tB.style.color = "white";
        calc.style.backgroundColor = "white";



       

    }
})


