function toggle_mode() {
    console.log("Changing Mode ...");
    if (mode === "light") {
        mode = "dark";
        document.body.style.backgroundColor = "#061E29";
        btn.setAttribute("id","btn_dark");
    } else {
        mode = "light";
        document.body.style.backgroundColor = "#F3F4F4";
        btn.setAttribute("id","btn_white");
    }
}
let btn = document.querySelector("button");
let mode = "light";
btn.addEventListener("click", toggle_mode);