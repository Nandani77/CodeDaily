
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

function removedfalsy(arr) {
    let newarr = [];
    arr.forEach((n) => {
        if(n) {
            newarr.push(n);
        }

       
    });

    return newarr;
}

console.log(removedfalsy(arr));