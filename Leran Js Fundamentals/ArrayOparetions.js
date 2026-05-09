// Filter Numbers only in imperitive Way 

const arr = [ 1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]
let count = 0
for( let i = 0; i < arr.length; i++ ){
    for( let j = i; j < arr.length - 1; j++){
        if (!arr[j] || typeof arr[j] !== "number"){
            arr[j] = arr[ j + 1];
            arr[ j + 1] = undefined
        }
    }
    if(arr[i] === undefined){
        count++;
    }
}

arr.length -= count
console.log(arr);

const filteredArray = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]

// filteredArray.filter((v) =>{
//     if(typeof v === 'number'){
        
//     }
// })

// console.log(filteredArray)


let laptops = [
    {
        id: 1,
        brand: 'Samsung',
        model: 's1',
        price: 2000
    },
    {
        id: 2,
        brand: 'Samsung',
        model: 's2',
        price: 3000
    },
    {
        id: 3,
        brand: 'Samsung',
        model: 's3',
        price: 4000
    },
    {
        id: 4,
        brand: 'Samsung',
        model: 's4',
        price: 5000
    },
]

