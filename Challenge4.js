
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

let result = [];
const Admin = {
    name: "",
    companyId: "",
    type: "",
};

const Moderator = {
    name: "",
    companyId: "",
    type: "",
};

const User = {
    name: "",
    companyId: "",
    type: "",
};

function orchestrateUsers(users) // Method 1
{
    result = users.reduce(function (r, a) {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
    }, Object.create(null));
}

orchestrateUsers(userList);
console.log(result); //typeof: Object with arrays inside
console.log(result.Admin[0]);



function searchUsers(orchestratedUsers, userTypes, property, value) {
    // Add code here
}