let h2 = document.querySelector("h2");
h2.innerText = h2.innerText + " from Apna College Students";

let boxes = document.querySelectorAll(".box");
// let box1 = box[0];
// let box2 = box[1];
// let box3 = box[2];

// box1.innerText = "Box1"; 
// box2.innerText = "Box2";
// box3.innerText = "Box3";

let idx = 1 ;
for (let box of boxes) {
    box.innerText = `Box ${idx}`
    idx++
}
