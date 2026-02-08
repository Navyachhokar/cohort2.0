let movies = ['The Godfather','The Shawshank Redemption','Parasite','Dangal','Inception'];
//join elements of of array
console.log(movies.join('-'));
//accesing elements using index
console.log(movies[1]);
//unshift - adds element at the start of an array
movies.unshift('Bahubali');
console.log(movies);
movies.unshift('chennai express');
console.log(movies);
//pop - removes from last of array(shift - removes from start of array)
movies.pop();
console.log(movies);
// slice(start,end) - extracts a part of an array
let arr2 = movies.slice(0,3);
console.log(arr2);
//indexof
console.log(movies.indexOf(5));
//checking element using includes function
console.log(movies.includes(3));
//concatenate
let arr3 = movies.concat(arr2);
console.log(arr3);
//sorting array
let array = [2,5,10,2,6];
array.sort((x,y)=>x-y);
console.log(array);//ascending order

array.sort((x,y)=>y-x);
console.log(array);//descending order
//copy array elements
let duplicateArray = array;//assignment method copies the reference
console.log(duplicateArray === array);
duplicateArray.push(9);
console.log(array);
console.log(duplicateArray);

let copy = array.slice();//slice makes a shallow copy
// let copy = [...array]
// let copy = Array.from(a)
console.log(copy===array);
copy.push(8);
console.log(copy);
console.log(array);

//slice and [...a] creates new array
// === compares references for objects not contents.


    