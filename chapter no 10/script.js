const emp = {
 tax() {
    console.log("tax rat is 10%");

 },

};

const arjun ={
    salery : 100000,

};

arjun.__proto__= emp;
console.log(arjun.tax());

console.log("classes : ");


class car{
    // let brand ;

constructor(rs){
    this.rs = rs;
    console.log(rs);

}
    start(){
        console.log("startig a car ;")
    }
    stop(){
        console.log("stoptig a car ;")
    }
  setbrnd(brnd){
    this.brndname= brnd;
    console.log(this.brndname);//brand vai defind for object tya sathi this 
  }
 
};
let car1 = new car(10);//constructore is working 
car1.start();
car1.stop();
car1.setbrnd("tata")
// console.log(car);


console.log("inhreitences  :");

class parent{

    show () {
      console.log("class parent ")
    
        
    }
}

class chaild extends parent{


}

let c = new chaild;
let result = c.show();
console.log(result);


console.log("super : ");

class person{
    constructor(name){
        this.name =name;
        console.log("person constructoe ")
        console.log("person name :",name)


    }
}
class eng extends person{
    constructor(name){
        
        super(name);
        console.log("eng constructoe ")

    }
}
let obj= new eng("jaydip");
