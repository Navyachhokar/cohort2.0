const btn = document.querySelector('button');
const main = document.querySelector('main');
const arr = ['JS is fun','I love JS', 'DOM is amazing', 'Learning JS is great', 'Coding is awesome', 'Debugging is part of coding', 'Practice makes you perfect', 'Stay curious', 'Keep exploring', 'Build projects', 'Share knowledge', 'Collaborate with others'];
btn.addEventListener('click',function(){
    const h1 = document.createElement('h1');
    const random = Math.floor(Math.random()*arr.length);
    h1.innerHTML = arr[random];
    h1.style.position = 'absolute';
    h1.style.color = 'white';
    const x = Math.random()*80;
    const y = Math.random()*80;
    const r = Math.random()*360;
    const scl = Math.random()*4;
    h1.style.left = x+'%';
    h1.style.top = y+'%';
    h1.style.rotate = r+'deg';
    h1.style.scale = scl;

    main.appendChild(h1);
    
    // const box = document.createElement('div');
    // box.style.width = '50px';
    // box.style.height = '50px';
    // const c1 = Math.floor(Math.random()*256);
    // const c2 = Math.floor(Math.random()*256);
    // const c3 = Math.floor(Math.random()*256);
    // const x = Math.random()*100;
    // const y = Math.random()*100;
    // box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    // box.style.position = 'absolute';
    // box.style.left = x+'%';
    // box.style.top = y+'%';
    // box.style.rotate = Math.random()*360+'deg';
    // main.appendChild(box);
})