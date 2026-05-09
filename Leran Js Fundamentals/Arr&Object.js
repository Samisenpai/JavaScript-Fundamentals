// Array oparetions 
// const names = [1, 2, 3, 4, 5, 6]
// const strs = names.map((name) => name.toString());
// console.log(strs);

// here we Used map method to make all items in array to string 

// const numbers = [1, 2, 3, 4, 5, false, NaN]
// const filterArr = numbers.filter((n) => n);
// console.log(filterArr)

// filter Method only return Truthy Values.
// list of falsy Values 
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// the ultimate Reduce Method 

const numbers = [1, 2, 3, 4, 5, 6];
// const sum = numbers.reduce((a, b) => a + b)
// console.log(sum);

// const result = numbers.reduce((acc, cur, i) => {
//     if(i === 0) {
//         acc += '[';
//     } if(cur){
//         acc += cur.toString() + (i < numbers.length - 1 ? ',' : '');
//     } if ( i === numbers.length - 1){
//         acc += ']';
//     }
//     return acc
// }, '');

// console.log(result);
// console.log(typeof result)

const result = numbers.reduce((acc, cur) =>{
    if(cur) {
        acc.push(cur.toString());
    }
    return acc;
}, []);
console.log(result);