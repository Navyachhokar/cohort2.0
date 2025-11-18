let box = document.querySelector('.box');
let btn = document.querySelector('button');
let color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    color.innerHTML = `rgb(${c1},${c2},${c3})`;
})