let h1 = document.querySelector("h1");
console.dir(h1);
// console.log(hd);
// console.log(hd.innertext);
console.dir(h1.innerHTML);
h1.innerText = h1.innerText+"from jaydip jadhav student ";
console.dir(h1.innerText);

let div = document.querySelectorAll(".box");
// console.dir(div);
// //indual dic acess

// console.dir(div[0]);
// console.log(div[0]);

// console.log(div[1]);


// console.log(div[2]);

// //change contant 

// div[0].innerText = " 1st div";
// console.log(div[0]);

// div[1].innerText = " 2nd div";
// console.log(div[1]);

// div[2].innerText = " 3rd div";
// console.log(div[2]);

console.log(" js zindhagi :");
let idx = 1;
for(div of div){
    console.log(div);
    console.log(div.innerText);
    // div[idx].innerText = `${idx} new div `; wrong kram div made att dirct value ahe bachii
  div.innerText = ` new ${idx} div`;
  

    idx++;
}
  
console.log(div);




