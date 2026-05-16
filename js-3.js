// Convert 2D array to CSV in javascript
// In JavaScript, converting a 2D array into a CSV(Comma - Separated Values) string is a common requirement when exporting data or generating text - based files.

// Problem Statement
// Given a 2D array, convert it into a CSV - formatted string where:

// Each row becomes a new line.
// Each element in a row is separated by a comma.

const array2D = [
    ["a", 'b'],
    ["c", "d"]
];

const csv = array2D
    .map(row => row.join(","))
    .join("\n");

console.log(csv);