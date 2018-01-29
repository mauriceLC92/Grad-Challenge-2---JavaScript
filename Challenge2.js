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

let strOutput = "";
var x = [];
var y = "";
function compression(strInput)
{
    let s = strInput.match(/([a-zA-Z])\1*/g) || [];
    return s.map(function(itm)
    {

        x = [itm.charAt(0), itm.length];
        console.log(x);
        y = y + x + "";
        console.log(y);
        return x;
    });
}


//console.log(compression("aabbbcccccaa"));
compression("aabbbcccccaa");
