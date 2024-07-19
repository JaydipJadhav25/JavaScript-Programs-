let box = document.querySelector(".box2");

console.log(box);

box.onclick = () =>{
alert("box2 click : ");
console.log("box was click : ");
let i =  25 ; 
i++;
console.log(i);

};
 
let newbox = document.createElement("div");
newbox.innerText = "box3";
box.after(newbox);
newbox.classList.add("box3");

newbox.onmouseover = (e) =>{
    // let i =0;
    // console.log(i);
    // i++;
    console.log(e);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.target);
    

    
};

newbox.addEventListener("click" , (evt) =>{
    console.log("event listener was work :");
    console.log(evt.type);
    console.log(evt.target);

});
let modebtn =document.querySelector(".modebtn");
console.log(modebtn);
let cuurmode = "light"; 
modebtn.innerText= cuurmode;

let body = document.querySelector("body");


modebtn.addEventListener("click" , () => {
    console.log("clicked : ")
     if(cuurmode === "light")
     {
        
        cuurmode = "bark";
        // document.body.style.backgroundColor = "black";
        // document.body.style.color = "white";
         body.style.backgroundColor = "black";
         body.style.color = "white"
         modebtn.innerText= "dark"
         modebtn.style.backgroundColor = "white";
         modebtn.style.color = "black";
        
     }
     else{
        cuurmode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        modebtn.innerText= "light";
        modebtn.style.backgroundColor = "black";
        modebtn.style.color = "white";





     }
     console.log(cuurmode);
});