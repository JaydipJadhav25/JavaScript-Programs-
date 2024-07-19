let a =18; 
let b = 20;

c = a+b; 
console.log(c);
console.log("a =", a ,"b = ", b, " the sum is =",a+b);
console.log("a =", a ,"b = ", b, " the sum is =",a-b);
console.log("a =", a ,"b = ", b, " the sum is =",a+b);
console.log("a =", a ,"b = ", b, " the sum is =",a/b);


a--;
console.log(a);
// using --a
--a;
console.log(a); 

a +=3;console.log(a);


// comaprison opreators 
console.log(a==b);


//conditional statements 

// age = 12;
// if(age>18){
//     console.log("you are allowed to party  : ", age);
// }
// else{
//     console.log(" not allowd " , age);
// }

age = 0 ; 
if(age>18){
    console.log("you are allowed to party  : ", age);
}

else if(age ==0 ){
    console.log("bachhe ");
}
else{
    console.log(" not allowd " , age);
}

// ternary opertore 
age = 19; ;
let  result  = age  > 18 ? " adult" : " not adult"; 
console.log(" ans is  = ", result);

// alert("jaydip jadhav")

// jra input geych asel tr prompt use krtata
// let re = prompt(" give you rating ");
// console.log(re);

// pratices question

let num ; 
num = prompt("enter a number : ");
// c = num % 5;
// if(c==0){
//     console.log("num = ", num , " multiple of 5");
// }
if(num % 5==0){
    console.log("num = ", num , " multiple of 5");

}
else{
    console.log(" not multiple of 5 ")
}






