
var n1=Math.random();
n1=Math.floor((n1*6)+1);
var imgno1="dice"+n1+".png";
var imgsrc1="images/"+imgno1;
var leftimg=document.querySelectorAll("img")[0];
leftimg.setAttribute("src",imgsrc1);

var n2=Math.random();
n2=Math.floor((n2*6)+1);
var imgno2="dice"+n2+".png";
var imgsrc2="images/"+imgno2;
var rightimg=document.querySelectorAll("img")[1];
rightimg.setAttribute("src",imgsrc2);

if (n1>n2){
    document.querySelector("h1").innerHTML="🏆Player 1 WINS!";
}
else{
    document.querySelector("h1").innerHTML="🏆Player 2 WINS!";
}
if (n1==n2){
    document.querySelector("h1").innerHTML="It is a DRAW!";
}
