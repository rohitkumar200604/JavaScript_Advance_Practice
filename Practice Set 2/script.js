//<======================== Q1 ========================>
let btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.setAttribute("id","btn");
document.body.prepend(btn);

//<======================= Q2 =========================>
let para = document.querySelector(".mypara");
// para.setAttribute("class","para");
para.classList.add("para");
