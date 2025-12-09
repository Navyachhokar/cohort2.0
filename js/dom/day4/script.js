var button = document.querySelector("button")
var inner = document.querySelector(".inner");
var h2 = document.querySelector("h2");
var grow = 0;
button.addEventListener("click", function(){
    var num = 50 + Math.floor(Math.random()*50);
    button.style.pointerEvents = "none";
    var int = setInterval(function(){
              grow++;
              h2.innerHTML = grow+"%";
              inner.style.width = grow+"%";
    },num)

   setTimeout(function(){
    clearInterval(int);
    button.innerHTML = "Downloaded";
    button.style.opacity = "0.5";
    console.log("Downloaded in", num/10, "Seconds");
   },num*100);
})