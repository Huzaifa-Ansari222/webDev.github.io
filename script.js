function a(){
 document.getElementById("demo").innerHTML="ERROR 404";
}

 function sum(){
    let number1= parseInt(document.getElementById("number1").value);
    let number2= parseInt(document.getElementById("number2").value);
    let result = number1+number2;
    document.getElementById("result").textContent=`${number1}+${number2}=${result}`;//just show the format
 }
 function sub(){
    let number11= parseInt(document.getElementById("number11").value);
    let number22= parseInt(document.getElementById("number22").value);
    let resul = number11-number22;
    document.getElementById("resul").textContent=`${number11}-${number22}=${resul}`;//just show the format
 }


// function ab(a,b){
//     return a+b;
// }
// var ans= ab(1,3);
// console.log(ans);

function ageChecker()
{
    let age= parseInt(document.getElementById("age").value);
    if(age <18)
    {
        document.getElementById("result2").textContent= `You are Not Eligible`;
    }
    else
    {
        document.getElementById("result2").textContent= `You are Eligible`;
    }
}

function loop(){
    let startt=parseInt(document.getElementById("start").value);
    let lastt=parseInt(document.getElementById("end").value);
     for(let i=1;i=lastt;i++){
        let result1=startt*i;
        document.getElementById("res").textContent+=`${startt}*${i}=${result1}`;
     }


}

