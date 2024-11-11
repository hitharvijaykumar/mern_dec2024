let name="arun";
var country = "india";
function greet(name){
    return "hello,"+name;
}
console.log(greet("arun"))

let age=25;
if(age>=18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}
for(let i=0;i<5;i++){
    console.log(i);
}
let fruits = ["apple","orange","cherry"];
let cars ={brand:"toyota",model:"innova"};
document.getElementById("myElement").innerHTML="Hello world"

function exampleConst(){
    const z =10;
    console.log(z);
    if(true){
        const z =20;
        console.log(z);
    }
    console.log(z);
}
exampleConst();