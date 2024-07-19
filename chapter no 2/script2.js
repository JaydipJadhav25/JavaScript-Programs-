let score;
score = prompt("enter you marks : ");

if(score>0 && score<=49){
    console.log("score = ",score, "grade is = F")
}
else if(score>=50 && score<=59){
    console.log("D");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=70 && score<=79){
    console.log("B");
}
else if(score>=80 && score<=100){
    console.log("A");
}
else{
    console.log("thank you ");
    console.log("fail ")
}