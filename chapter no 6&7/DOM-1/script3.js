let div = document.querySelector("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para);
console.log(para.getAttribute("id"));
console.log(para.getAttribute("class"));

para.setAttribute("class" ,"newclass");
console.log(para.getAttribute("class"));
console.log(para);

let box = document.querySelector(".box");
console.log(box);
box.style.backgroundColor = "red";
box.style.padding = "10px";
box.style.color = "black";


let newbtn = document.createElement("button");
newbtn.innerText = "new button";
newbtn.style.backgroundColor = "yellow";
// newbtn.style.border = "(2px white solid )";
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
div.after(newbtn);

let newheading = document.createElement("h1");
newheading.innerText = "new heading add using js ";
newheading.style.alignItems = "center";
// newheading.style.alignItems = "";

document.querySelector("body").prepend(newheading);
document.querySelector(".para2").remove();

let para3 = document.querySelector(".contant");
console.log(para3);
para3.setAttribute("class" ,"new");


