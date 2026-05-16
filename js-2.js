// Remove Elements from Array Start
// To remove elements from the left side of an array, the splice() method is applied starting from index 0.
// It takes two parameters: the starting index and the number of elements to remove.
// The method returns an array containing the removed elements.

 // remove 5 from this array


function fun(n) {
    var arr = [2, 4, 5, 6, 3]
    var i = arr.indexOf(n);

    if (i !== n) {
        arr.splice(i, 1);
    
    }

    console.log("after remove the no. arr is : ");
    console.log(arr);
}

fun(5);