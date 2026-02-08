for( let i = 1; i<=50; i++){
    // console.log(i);    
}
let sum = 0;
let i = 1;
while(i<11){
    sum += i;
    i++;
}
// console.log(sum);

let str = "Javascript";
// str.split("").forEach(ch => {
//     // console.log(ch); 
// });

// Array.from(str).forEach(char => {
// returns new array but str is unchanged, we'll have to reassign to change its type   // console.log(char);  
// })
[...str].forEach(char => {
    // console.log(char);  
})

// for(let i = 1; i<=20; i++){
//     if(i%2 ==0){
//         continue;
//     }
//     else{
//         console.log(i);   
//     }
// }

// let j = 5;
// do{
//   console.log(j); 
//   --j;
// }
// while(j>0)
let num = 5;
let fact = 1;
for(let i = 1; i<=num; i++){
   fact *= i;
}
// console.log(fact);
let grid = '';
for(let i = 0; i<3; i++){  
    for(let j = 0; j<3; j++){
        grid += "*";
    }
    grid += '\n';
}
console.log(grid);


let array = new Array(1,2,3,4);
let reverserd = [];
for(let i=array.length-1; i>=0; i--){
    reverserd.push(array[i]);
}
console.log(reverserd);

array.reverse();
console.log(array);

for(let i = 1; i<=100; i++){
    if(i%5 == 0){
        console.log(i);  
    }
}

for(let i = 1; i<11; i++){
    console.log(`7x${i}=${7*i}`);
}
