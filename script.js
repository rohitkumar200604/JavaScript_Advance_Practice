//DOM

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


//Objects and Classes
//Object
const student = {
    fullName: "Student",
    marks: "99.99",
    printMarks: function printMarks() {
        console.log("Marks:",this.marks);   //this.marks means student.marks
    }
}

//Prototype
const calcTax = {
    calTax() {
        console.log("The present tax rate is 10%");
        let tax = this.salary*0.1;
        console.log("The tax amount calculated is:",tax);
    },
};

const karan = {
    salary: 50000,
};

karan.__proto__ = calcTax;

//Class
class Car {
    constructor(brand, mileage) {
        console.log("Creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}
let fortuner = new Car("fortuner",10);
console.log(fortuner);
let nexus = new Car("nexus",12);
console.log(nexus);
let toyota = new Car("toyota",14);
console.log(toyota);

//Inheritance
class Person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("work");
    }
}
class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let clg_student = new Engineer();


//super keyword
class Person2 {
    constructor() {
        console.log("Enter parent constructor");
        this.species = "Homospaiens";
    }
    eat() {
        console.log("eat");
    }
}
class Engineer2 extends Person2 {
    constructor(branch) {
        console.log("Enter child constructor");
        super(); //to invoke parent class constructor
        this.branch = branch;
        console.log("Exit Child constructor");
    }
    work() {
        console.log("solve problems, build something");
    }
}

let Engobj = new Engineer2('Computer');


//try and catch 
let a = 5;
let b = 10;
console.log('a =',a);
console.log('b =',b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
try {
    console.log('a+b =',a+c);// error
} catch(err) {
    console.log(err);
}
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);
console.log('a+b =',a+b);

//Callback Hell
function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("Data:",dataID);
        if (getNextData) {
            getNextData();
        }
    },2000);    //time written in milliseconds
}

//Nested Callbacks
getData(1, () => {
    getData(2,() => {
        getData(3, () => {
            getData(4);
        })
    })
})

//Promise
 let promise = new Promise((resolve,reject) => {
     console.log("I am a promise");
    //resolve("success");
    //reject("some error occured");
 })

//Promise to solve Callback Hell
function getData (dataID, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try {
                console.log("Data:",dataID);
                resolve("success");
                if (getNextData) {
                    getNextData();
                }
            } catch (err) {
                reject("Some error occured");
            }
        },5000);
    })
}


//Promise Handeling
const getPromise = () => {
    return new Promise((resolve, reject) => {
        try {
            let a = 5;
            let b = 14;
            let sum = a+b;
            console.log("I am a promise for sum of numbers");
            if (sum) {
                resolve("success");
            }
        } catch (err) {
            console.log("some error occured");
            reject("rejected");
        }
    })
}

let prom = getPromise();
prom.then((res) => {
    console.log("Promise was resolved",res);
})
prom.catch((err) => {
    console.log("Promise was rejected",err);
})


//Promise Chaining
function asyncFunct(val) {
    return new Promise((resolve,reject) => {
        console.log(`Fetching data ${val}`);
        setTimeout(() => {
            console.log(`data${val}`);
            resolve("success");
        },4000);
    })
}
asyncFunct(1).then((res) => {
    return asyncFunct(2);
}).then((res) => {
    return asyncFunct(3);
}).then((res) => {
    return asyncFunct(4);
}).then((res) => {
    console.log(res);
})


//Async Await
function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200)
        },4000)
    });
}

async function GetWeatherData() {
    await api();  //1st call
    await api();  //2nd call
}

