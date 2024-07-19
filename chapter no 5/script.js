// console.log(" function : ");

// function sum(x , y){
//    let s=x+y;
//     return s;

// }
// let val = sum(10,20);
// console.log("result :" ,val);

// const add =(x, y ) => {
//     return x+y;
// };
// let val2 = add(20,30 );
// console.log(val2);
// let count = 0 ;
// function countvol ( str )
// {
// for(const char of str)
// {
//     // console.log(char)
//     if(char ==="a" || char ==="e" ||char ==="i" ||char ==="o" ||char ==="u" ){
//         count++;
//     }
// }


// }
// console.log(count);

// // let str =prompt("enter any name  : ");
// // simple(str);
// countvol("abc");
// countvol("aaa");
// countvol("jaydip");

console.log("forEach loop : ");

let arr = [10,20,30,40,50];

arr.forEach((val) =>{
    console.log(val*val);
})

console.log("map : ");

let num  =[100, 2323,876,5,432,22];
num.map((vale ) => {
    console.log(vale);
})

let newarr = num.map((val) => {
    return val+val;
})
console.log(newarr);


console.log("filter  : ");
let newarr2 = num.filter((val) => {
    return val % 2 === 0 ;
})
console.log(newarr2);