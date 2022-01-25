console.log("hello");
var coins=document.getElementById("coin")
function counter(){
let counts=setInterval(updated);
var upto=1000;
function updated(){
  
  coins.innerHTML=--upto;
              if(upto === 50) {
                  clearInterval(counts);
              }
          }}