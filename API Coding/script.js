const URL = "https://potterapi-fedeperin.vercel.app/en/books";
let book_des = document.querySelector("#book_des");
let book = document.querySelector("#book");
let hide = document.querySelector("#hide");

(async function getBooks() {
    console.log("Getting Data ...");
    let response = await fetch(URL);
    console.log(response);   //JSON Format
    let data = await response.json();
    console.log(data);
    let book_des_data = data[2].description
    console.log(book_des_data);
    book_des.innerText = book_des_data;
})();

function showData() {
    book_des.classList.remove('hide');
    console.log("Shown");
}

function hideData() {
    book_des.classList.add("hide");
    console.log("Hidden");
}
book.addEventListener('click', showData);
hide.addEventListener('click',hideData);