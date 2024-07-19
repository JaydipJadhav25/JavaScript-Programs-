// const url= "https:cat-fact.herokuapp.com/facts";
const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json'
// const url= "https:cat-fact.herokuapp.com/facts";


// let promise = fetch(url);
// console.log(promise);

//using asysnc await

const getdata = async () => {
console.log("getting data...............")
let response = await fetch(url);
console.log(response);
let data = await response.json();
console.log("data : " ,data);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
// console.log(data[4]);
// document.querySelector("h2").innerText =data[1].text;
// document.querySelector("h2").innerText =data[00];
// let option = Object.keys(data)
// console.log( "option" ,option[1]);
// document.querySelector("h2").innerText = option[1];
// for (const key in data.inr) {
//         const keyinfo = data.inr[key];
//           console.log( key ,"=" , keyinfo);
// document.querySelector("h2").innerText =`${key} = ${keyinfo}`;
// document.querySelector(".option").innerText =key

     
//     }

// let option = Object.keys(data.inr)
// console.log("option", option, "data", data[option]);
// document.querySelector(".option").innerText =option

// document.querySelector("h2").innerText =`${option} = ${data[option]}`;

// console.log(data.inr)
// document.querySelector("h2").innerText =`data is ${option}`;

 const dropdown = document.querySelectorAll("select")
 console.log(dropdown);
for(let select of dropdown) {
      for (key in data.inr) {
        // console.log(key)
        let newoption = document.createElement("option")
        newoption.innerText = `${key} = ${data.inr[key]}`;
        newoption.value= key;
        // console.log(newoption)
        select.append(newoption);
        
      } 


}






};

getdata();
// console.log(getdata());