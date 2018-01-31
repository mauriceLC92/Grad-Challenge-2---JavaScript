
/*
Challenge 4 - Indexing & Searching

We have a large array of users which are comprised of 3 different user types ("Admin", "Moderator", "User").
Each user will have the following properties: ("name", "companyId", "type").

Your first method will take 1 parameter: an array of users and must return a grouped list according to the user property "type".

The second method will take 4 parameters: a grouped list (result from the first method), an array of user types to include in the search,
a string representing the user property to filter by and a string representing the value of the user property. 
This method must return an array of users as per the search parameters.

*/

let userList = [
    {
      "name": "Joe",
      "companyId": "A2100",
      "type": "Admin"
    },
    {
      "name": "Jane",
      "companyId": "A2100",
      "type": "Moderator"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Smith",
      "companyId": "A2100",
      "type": "User"
    },
    {
      "name": "Rocket",
      "companyId": "A3100",
      "type": "Admin"
    },
    {
      "name": "Rick",
      "companyId": "A3100",
      "type": "User"
    },
    {
      "name": "Tim",
      "companyId": "A4100",
      "type": "Admin"
    }
  ];

let result = {};

function orchestrateUsers(users) // Method 1
{
    result = users.reduce(function (r, a) {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
    }, {});
}

orchestrateUsers(userList); // Calls method 1 
console.log(result);// Prints the desired result for method 1

console.log("--------------------------------------------");// Seperating method 1 and 2's results

let userTypes = ['Admin','Moderator','User'];

let returnedUser = [];

function searchUsers(orchestratedUsers, userTypes, property, value) { // My method only filters with one userType, I couldnt get it to take an array before the end of the day


    returnedUser = orchestratedUsers[userTypes].filter(function (search)
    {
        return (search[property] === value);
    });

}

searchUsers(result, 'User', 'companyId', 'A2100');//Calls method 2...(cannot take in array for userType unfortunately...)

console.log(returnedUser);// Prints desired result for Method 2