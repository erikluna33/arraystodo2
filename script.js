// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr, val){
    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val;
    return arr;
}
console.log(pushFront([99], 7));







// Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function



const popFront = (arr) => {
    let firstVal = arr[0];

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    console.log(`The first value of the given array is ${firstVal}`);
    arr.length = arr.length-1;
    return arr;

}


console.log(popFront([0,5,10,15]));






// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]



const insertAt = (arr,idx,val) => {
    for(let i = arr.length; i > idx; i--){
        arr[i] = arr[i-1]
    }
    arr[idx] = val;
    return arr;

}
console.log(insertAt([9,33,7], 1, 42));






// BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

const removeAt = (arr, idx) => {
    let removeVal = arr[idx];
    for(let i = idx; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    console.log(`The deleted value from the array is ${removeVal}`);
    arr.length = arr.length -1;
    return arr
    

}
console.log(removeAt([1000,3,204,77], 1));

