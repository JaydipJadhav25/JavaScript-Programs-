function asyn1 (){

    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("data 1");
        resolve("success fulll run1")
        },4000);
    });
}

function asyn2 (){

    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("data 2 ");
        resolve("success fulll run 2")
        },4000);
    });
}

// console.log("feaching data 1 ................")

// let p1 = asyn1();
// p1.then((rse) =>{
//     console.log(rse);
// })

// console.log("feaching data 2................")

// let p2 = asyn1();
// p2.then((rse) =>{
//     console.log(rse);
// })

//use promise chai not use callback function :
console.log("feaching data 1................")
// function id (){
// prompt("enter your email id : ");

// }
// id();
prompt("enter your email id : ");

 asyn1().then((rse) =>{
    // console.log(rse);
    console.log("feaching data 2.............");
    alert("acc is searching.....")
 asyn2().then((rse) =>{
// console.log("feaching data 2................")
    
    // console.log(rse)
   if(asyn2){
    prompt("enter password:")

      
   }
   else{
    alert("enter again correct usernamae ");
    // id()

   }
})
  


})

/////////////////////////////////////////////////////////

