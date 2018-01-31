/*
Challenge 6 - Recursion

Create a function that makes use of recursion to add the all the "total" properties up and return back to the user
*/

let fs = require('fs');
let recursiveData = JSON.parse(fs.readFileSync('recursionData.json', 'utf8'));


function totalSum(obj)
{
    let total = 0;
    for(let x in obj)
    {
        if(typeof obj[x] === "number")
            total += obj[x];
        else
            total += totalSum(obj[x]);
    }
    return total;
}

console.log(totalSum(recursiveData));