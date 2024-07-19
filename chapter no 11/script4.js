console.log("use callback avode using promise chain :");

// function setdata(data ,nextdata){
//     setTimeout(() => {
//         console.log("your data " ,data);
//         if(nextdata){
//             nextdata();
//         }
//     }, 2000);
// }
function setdata(data ,nextdata){
    return new Promise ((resolve ,reject) => {
        setTimeout(() => {
            console.log("your data " ,data);
            resolve("success ")
            if(nextdata){
                nextdata();
            }
        }, 2000);
    });
}
// function setdata2(data ,nextdata){
//     return new Promise ((resolve ,reject) => {
//         setTimeout(() => {
//             console.log("your data " ,data);
//             resolve("success ")
//             if(nextdata){
//                 nextdata();
//             }
//         }, 4000);
//     });
// }

// console.log("feaching data 1......");
// setdata(1).then((res) => {
//     console.log(res);

// console.log("feaching data 2......");

//  setdata2(2).then((res) =>{
//    console.log(res);
//  });
// })

// console.log("feaching data 1......");
// setdata(1).then((res) => {
//     console.log(res);

// console.log("feaching data 2......");

//  setdata(2).then((res) =>{
//    console.log(res);
//  }); 
// })  THIS IS OK BUT STILL ADDTION UPDATE


setdata(1)
.then((res) =>{
   return setdata(2);
}).then((res) =>{
    // console.log(res);
    return setdata(3);
}).then((res) =>{
    console.log(res);
});