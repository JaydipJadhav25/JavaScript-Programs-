let btn = document.querySelector(".btn");

let color =document.querySelector("h2");

let body = document.querySelector("body");
let copy = document.querySelector(".copy");



const getcolore = () =>{
  const randomnum = Math.floor(Math.random()*16777215);
  const randomcode = "#"+randomnum.toString(16);
    // console.log(randomnum ,randomcode);
body.style.backgroundColor = randomcode;
color.innerText = randomcode;
navigator.clipboard.writeText(randomcode);


     
};




btn.addEventListener("click" , getcolore); //event call

getcolore(); //init call