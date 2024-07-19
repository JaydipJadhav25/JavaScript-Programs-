// async function hellow(){
//     console.log("hellow");
// }
// // hellow();
// console.log(hellow());



// function api (){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() =>{
//        console.log("data");
//        resolve(200);
//         }, 2000);
//     });
// }

// async function getdata (){
//     console.log("feaching data 1.............")
//     await api();
//     console.log("feaching data 2.............")

//     await api();
// }

// getdata();
// console.log(getdata());


console.log("callback solve in async -await:")

function setdata(data ){
    return new Promise ((resolve ,reject) => {
        setTimeout(() => {
            console.log("your data " ,data);
            resolve("success ")
        
        }, 2000);
    });
}

 async function data(){

    console.log("feaching data 1.............")
    
    await setdata(1);

    console.log("feaching data 2.............")

    await setdata(2);

    alert("success login your account :")
 }

 data();

///////////////////////////////////


