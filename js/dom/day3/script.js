const btn = document.querySelector('button');
const main = document.querySelector('main');

btn.addEventListener('click',function(){
    const box = document.createElement('div');
    box.style.width = '50px';
    box.style.height = '50px';
    const c1 = Math.floor(Math.random()*256);
    const c2 = Math.floor(Math.random()*256);
    const c3 = Math.floor(Math.random()*256);
    const x = Math.random()*100;
    const y = Math.random()*100;
    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    box.style.position = 'absolute';
    box.style.left = x+'%';
    box.style.top = y+'%';
    box.style.rotate = Math.random()*360+'deg';
    main.appendChild(box);
})