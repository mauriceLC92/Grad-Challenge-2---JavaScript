/*
Challenge 2 - Code Breaking

Write the compression and decompression functions for this basic "encryption" algorithm.
Compression Example:
The string aabbbcccccaa compresses to a2b3c5a2
The string xxyzzzx compressed to x2y1z3x1

Decompression Example:
The string g2j2 decompresses to ggjj
The string a1b1c1d1e1 decompresses to abcde
*/


var compressedArr = [];
var compressedStrArr = "";


function compression(strInput)
{
    let s = strInput.match(/([a-zA-Z])\1*/g) || [];
    return s.map(function(itm)
    {

        compressedArr.push([itm.charAt(0), itm.length]);
        arrToString(compressedArr);
        
        //return compressedArr;
    });
}
function arrToString(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        compressedStrArr = arr.toString();
        compressedStrArr = compressedStrArr.replace(/,/g, '');
    }
}

//compression("aabbbcccccaa");
//compression("xxyzzzx");
//console.log(compressedStrArr);


function decompression(str) // adjust to check if it is taking in an alphanumeric value
{
    var decompressedStr = "";
    for(let i = 0; i < str.length; i++)
    {
        if(i%2 == 0)
        {
            decompressedStr += str.charAt(i).repeat(parseInt(str.charAt(i+1)));
            //console.log(str.charAt(i).repeat(parseInt(str.charAt(i+1))));
        }
    }
    return decompressedStr;
}

console.log(decompression("a1b1c1d1e1"));
console.log(decompression("g2j2"));
