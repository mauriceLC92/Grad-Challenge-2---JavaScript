/*
Challenge 1 - Santa's naughty list

Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day.
Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.
Comparison should be case sensitive, and the returned list return only one copy of each name. "Sam" and "sam" is allowed, but "sAm" and "sAm" is not.
*/
let santasList = ["Tom","Errol","Sam","Peter","Jennifer"];
let children = ["Errol", "Peter", "Jennifer","Jennifer"];

let santasList2 = ["Tom","Errol","Sam", "mistyMay","Peter","Jennifer", "macMerphy"];
let children2 = ["Errol", "Peter", "jennifer", "mistymay", "MacMerphy"];


let returnedSantaList = [];

function findChildren(santasList, children) 
{
    for(let j = 0; j < santasList.length; j ++)
    {
        
        if(santasList.includes(children[j]))
        {
            returnedSantaList.push(children[j])
        }
    }

    returnedSantaList = Array.from(new Set(returnedSantaList));
    return returnedSantaList.sort();

}

console.log(findChildren(santasList, children));
