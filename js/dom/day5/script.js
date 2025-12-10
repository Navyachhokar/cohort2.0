var img = document.querySelector('#mainImage');
var heart = document.querySelector('#heart');
var hearticon = document.querySelector('#hearticon');

img.addEventListener('dblclick', function(){
    heart.style.opacity = 1;
    hearticon.style.background =
    'linear-gradient(to right bottom,rgb(250, 248, 251),rgb(162, 108, 215), rgb(112, 41, 183) 60%)';
    hearticon.style.backgroundClip = 'text';
    hearticon.style.webkitBackgroundClip = 'text';
    hearticon.style.color = 'transparent';

    heart.style.transform = 'translate(-50%,-50%) scale(1.4) rotate(0deg)';
    setTimeout(() => {
        heart.style.transform ='translate(-50%,-300%) scale(1) rotate(60deg)';
    },800);
    setTimeout(() => {
        heart.style.opacity = 0;   
    },1000);
    setTimeout(() => {
        heart.style.transform ='translate(-50%,-50%) scale(0) rotate(0deg)'; 
    },1200);
})

hearticon.addEventListener('click', function(){
    hearticon.style.background =
    'linear-gradient(to right bottom,rgb(250, 248, 251),rgb(162, 108, 215), rgb(112, 41, 183) 60%)';
    hearticon.style.backgroundClip = 'text';
    hearticon.style.webkitBackgroundClip = 'text';
    hearticon.style.color = 'transparent';

})

