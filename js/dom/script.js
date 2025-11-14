let val = document.querySelector('.val');
let Inc = document.getElementById('button1');
let Dec = document. getElementById('button2');
count = 0;
Inc.addEventListener('click', function(){
    count++;
    val.innerHTML = count;
})
Dec.addEventListener('click', function(){
    count--;
    val.innerHTML = count;
})
