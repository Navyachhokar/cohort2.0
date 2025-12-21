var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');

main.addEventListener('mousemove', (elem)=> {
    cursor.style.left = elem.x + 'px';
    cursor.style.top = elem.y + 'px';
    
})

// different mouse event listeners
// mouseover
main.addEventListener('mouseover',function(val){
    // console.log('mouseover event performed');
    // console.log(val); //gives event details
})
// dblclick
main.addEventListener('dblclick',function(val){
    // console.log('dblclick event performed');
    // console.log(val); //gives event details
})
// click
main.addEventListener('click',function(val){
    // console.log('click event performed');
    // console.log(val); //gives event details
})
// mouseleave
main.addEventListener('mouseleave',function(val){
    // console.log('mouseleave event performed');
    // console.log(val);//gives event details
})
// mouseenter
main.addEventListener('mouseenter',function(val){
    // console.log('mouseenter event performed');
    // console.log(val); //gives event details
})
// mousemove
main.addEventListener('mousemove',function(val){
    // console.log('mousemove event performed');
    // console.log(val); //gives event details
})
// mouseout
main.addEventListener('mouseout',function(val){
    // console.log('mouseout event performed');
    // console.log(val); //gives event details
})
//Difference between mouseover and mouseenter events
// mouseover fires when entering an element or its children and bubbles, 
// while mouseenter fires only once when entering the element itself and does not bubble.




