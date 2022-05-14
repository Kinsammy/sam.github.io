// Traffic light JavaScript
var number = prompt("enter  number");

if(number > 10 || number === 60){
  alert("Click on GREEN");
  document.getElementById("green").onclick=function(){
    document.getElementById("green").style.display="none";
    document.querySelector("body").style.background="green";
  }
} 
else if(number >1 || number === 1) {
  alert("Click on YELLOW");
  document.getElementById("yellow").onclick=function(){
    document.getElementById("yellow").style.display="none";
    document.querySelector("body").style.background="yellow";
    
} 
}
else {
  alert("Click on RED");
  document.getElementById("red").onclick=function(){
    document.getElementById("red").style.display="none";
    document.querySelector("body").style.background="red";
}
}