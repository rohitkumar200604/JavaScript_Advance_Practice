let button = document.getElementById("myId");
console.dir(button);
console.log(button);

let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

let mydiv = document.querySelector("#mydiv");
mydiv.style.backgroundColor = "white";

let butn = document.createElement("button");
butn.innerText = "Click me"
mydiv.after(butn);

butn.onclick = (evt) => {
    console.log("button was clicked");
}

mydiv.onmousemove = (e) => {
    console.log("You are inside the div");
} 

butn.addEventListener("click", () => {
    console.log("Button was pressed");
})
const remove_event = () => {
    console.log("Button was removed");
}
butn.addEventListener("click", remove_event);

butn.addEventListener("click", () => {
    console.log("Button was placed");
})

butn.removeEventListener("click", remove_event);