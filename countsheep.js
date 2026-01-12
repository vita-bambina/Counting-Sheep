function countSheeps(sheep){
    return sheep.filter(Boolean).length;
}
let arr1 = [true,  true,  false, 
    true,  null,  true, 
    false, true,  true,
     true,  false, true];

console.log(countSheeps(arr1))
