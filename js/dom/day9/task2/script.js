const para = document.querySelector('p');
const text = para.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let i = 0;
function randomText(){
    const str = text.split("").map((char,index)=> {
          if(index < i){
            return char;
          }
          return characters.split("")[Math.floor(Math.random()*52)];

    }).join("");
    para.innerText = str;
    i += 0.5;
}


setInterval(randomText, 100);