// alert("welcome sir , good morning ");

// let h1 = document.querySelector("h1")
// console.dir(h1.innerText)

// h1.innerText = "abc";

// console.log(window);
// window.console.log("hello")


//vvvIMP : 
// console.log(window.document);
// console.dir(window.document);

// console.dir(document);
// console.log(documet.body);
// console.dir(document.body.childNodes[1]);
// document.body.style.background = "red";

// console.dir(document.body.childNodes[3]);
// document.body.childNodes[3].innerText = "abcd";


// let cont = document.body.childNodes[1];
// console.log(cont);


console.log("dom mainplute : ");

let heading = document.getElementById("header");
// console.log(heading);
// console.dir(heading);
// heading = "jadhav";
let contant = document.getElementsByClassName("con");
console.dir(contant);
console.log(contant);
let headings = document.getElementsByClassName("head-class");
console.log(headings);
console.dir(headings);

let btn = document.getElementsByTagName("button");
console.dir(btn);
console.log(btn);

let btn1 = document.querySelector("button");
console.dir(btn1);
console.log(btn1);

let btn2 = document.querySelectorAll("button");
console.dir(btn2);
console.log(btn2);

// console.log(btn2.tagName);
console.log("propertires of dom  : ");

let contant2 = document.getElementById("cont");
console.dir(contant2);
console.log(contant2);

console.log(contant2.innerText);
// console.dir(contant2.innerText);

let info = document.querySelector(".myclass");
console.dir(info);
console.log(info.innerText);
console.log(info.innerHTML);

let  newinfo = document.querySelector("h6");
console.dir(newinfo);
console.dir(newinfo.innerText);
newinfo.innerText = " new heading ";
console.dir(newinfo);
console.dir(newinfo.innerHTML);
// console.log(newinfo.innerHTML);

newinfo.innerHTML = "<h5> new element add </h5> <div> done </div>"
console.dir(newinfo.innerText);









