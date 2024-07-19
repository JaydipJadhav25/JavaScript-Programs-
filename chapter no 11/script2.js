console.log("promises :");

// let promise = new promise((resolve , reject) => {

// // console.log(" i am promise "); erorr kran promise cha p is captila haway 
// });

// let promise = new Promise ((resolve , reject) => {
//  console.log("i am Promise ");
//  resolve("done"); 
// });



// let promise = new Promise ((resolve , reject) => {
//     console.log("i am Promise ");
// //    reject("some erorr");
//    });

// console.log(promise);

// normal cuse promise class

// function setdata(data ,nextdata){
//    return pro = new Promise ((resolve , reject) => {
//     setTimeout(() => {
//           console.log("your data " ,data);
//         // resolve("sucess full run : ");
//     //    handle erorr 
         
//          reject(" some erorr occures :");
//         if(nextdata){
//             nextdata();
//         }
//     }, 6000);
//    });
// }


// console.log(setdata());
// setdata(1, () =>{
//    setdata(2);
// });   NO use 

// setdata();

// let result = setdata(123);
// console.log(result);



console.log(" .then and ctach methode :");


const getpromise = () =>{
  return  new Promise ((resolve ,reject) => {
        console.log("run promise : ");
        // resolve("sucess");
        reject("erorres")
    })
}

// function getpromise (){
//     return  new Promise ((resolve ,reject) => {
//         console.log("run promise : ");
//         // resolve("sucess");
//         reject("erorres")
//     })
// }  as pn done ahe 

let = promiseresult = getpromise();

// promiseresult.then(() =>{
//     console.log("promise is fullfiled : ")
// })  erorr ali adi kram promise retur kel navat , jre promise alch nhi tr erorr shoe honar na 


promiseresult.then(() =>{
    console.log("promise is fullfiled : ")
}) 
promiseresult.catch(() =>{
    console.log("promise is reject , try again  ")
}) 