const keys =document.querySelectorAll('.piano-key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.dataset.note;
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 200);
    });
});

document.addEventListener("keypress", (e) => {
    const keyPressed = e.key.toLowerCase();
    const key = document.querySelector(`.piano-key[data-key="${keyPressed}"]`);
    console.log(key);
    if(!key) return;
    
        const note = key.dataset.note;
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'),200);
    
});



