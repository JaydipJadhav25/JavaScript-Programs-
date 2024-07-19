let sub = false;
function check(){
    return new Promise((resolve , reject) =>{
          setTimeout(() => {
            console.log("user name if found :");
         resolve(200);    
          }, 2000);
    });
}

async function user(){
    alert("finding you user name .................")
     await check();
     alert("find successfully :");
      msg.innerText ="now, fill a password :"
    //   await check();
 

}

// user();



let name=document.querySelector(".name");

// console.dir(name);
let submite = document.querySelector(".submit");
let msg =document.querySelector(".msg")
// console.log(msg.innerText);




  submite.addEventListener("click",() =>{
    if(submite){
        sub =true;
        console.log(sub);
        user();
       }   
       else{
        sub =false;
        console.log(sub);
    
       }
  });
document.querySelector(".pass").addEventListener("click", () =>{
    alert("create account successfully .")
    
})