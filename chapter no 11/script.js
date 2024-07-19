console.log("hellow 1");
console.log("hellow 2");


// setTimeout(hellow,4000);

setTimeout(() => {
    console.log("settimeout function run")
    
}, 5000);

console.log("hellow 3"); 
console.log("hellow 4");

//callbacks
function sum(a ,b){
   setTimeout( () =>{
    console.log(a+b);
   },10000);
}

function cal(a,b ,sumcallbck){
    sumcallbck(a, b);
}

cal(19,20,sum);
//////
const sum2 = () =>{
console.log(10+20);
};

setTimeout(sum2,5000);

// setTimeout(cal,5000);

// callback hell : 

// function setdata(data){
//     setTimeout(() => {
//         console.log("your data " ,data);
//     }, 2000);
// }

// setdata(1);2se
// setdata(2);2se
// setdata(3);2se

console.log("use callback :");

function setdata(data ,nextdata){
    setTimeout(() => {
        console.log("your data " ,data);
        if(nextdata){
            nextdata();
        }
    }, 2000);
}


setdata(1, ()=> {
 setdata(2, () => {
    setdata(3 , () => {
        setdata(4);
    })
 });
});
// my code : //////////////////////////////////////////////////////
// setdata(1 ,() =>{
//     setdata(2 ,() =>{
//         setdata(3);
//     });
    
// });


// function setdata(data ,nextdata,setfun){
//     setTimeout(() => {
//         console.log("your data " ,data);
//         if(nextdata){
//             nextdata();
//         }
//     }, 2000);
//    setfun();
// }

// setdata(1 ,() =>{
//     setdata(2 ,() =>{
//         setdata(3 , () =>{
//               setTimeout(() => {
//                 console.log("data", data);

//               },5000);
//         });
//     });
    
// });
 print1 =() => {

    console.log("jaydip")
};

function pass(print1){
    print1();
}
///////////////////////////////////////////////////////////


pass(print1);