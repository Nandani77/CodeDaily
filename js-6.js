function secondLargest(arr) {

    let largest = -1;
    let secondLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        // New largest mila
        if (arr[i] > largest) {

            secondLargest = largest;
            largest = arr[i];

        }

        // Second largest check
        else if (arr[i] > secondLargest && arr[i] !== largest) {

            secondLargest = arr[i];

        }
    }

    return secondLargest;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));