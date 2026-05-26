function countfrequency(arr) {
    let freq = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        freq[num - 1]++;
    }
    return freq;
}
console.log(countfrequency([2, 3, 4, 2, 3, 5]))


// function countFrequency(arr) {

//     let n = arr.length;

//     // Result array with 0
//     let freq = new Array(n).fill(0);

//     // Loop through array
//     for (let i = 0; i < n; i++) {

//         let num = arr[i];

//         // Increase frequency
//         freq[num - 1]++;
//     }

//     return freq;
// }

// console.log(countFrequency([2, 3, 2, 3, 5]));