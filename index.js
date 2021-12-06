var randomNumber=Math.floor(Math.random() *6)+1;
var playerOneImages="dice"+randomNumber+".jpg";
var randomNumber1=Math.floor(Math.random() *6)+1;
var playerOneImages1="dice"+randomNumber1+".jpg";

document.querySelector('.img1').setAttribute('src',playerOneImages);
document.querySelector('.img2').setAttribute('src',playerOneImages1);