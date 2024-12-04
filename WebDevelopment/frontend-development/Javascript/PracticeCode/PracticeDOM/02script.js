const cont = document.querySelector(".container");
const butt1 = document.querySelector(".button1");
const butt2 = document.querySelector(".button2");
const butt3 = document.querySelector(".clear");

// Add a box
butt1.addEventListener("click", () => {
    let div = document.createElement("div");
    div.setAttribute("class", "box");
    div.innerHTML = "Hii";
    cont.append(div);
});

// Remove the first box
butt2.addEventListener("click", () => {
    let divv = document.querySelector(".box");
    if (divv) { // Ensure div exists before removing
        divv.remove();
    }
});

// Clear all boxes
butt3.addEventListener("click", () => {
    let divvv = document.querySelectorAll(".box"); // Corrected selector
    divvv.forEach((di) => {
        di.remove(); // Removes each box
    });
});
