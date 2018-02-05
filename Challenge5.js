/*
Challenge 5 - Array Merge

Take the two arrays of objects that are provided and merge them in to one using the _id field as the unique identifier.
*/
//const data1 = require("file path of the json file")
//quick way to read in json file without using fs

let dataSet1 = 
[
	{
		"_id": "5a6eddfbe8618d7e1eb4a0be",
		"index": 0,
		"guid": "63278b6a-1788-4019-8a78-aea40af5e635",
		"isActive": true,
		"balance": "$1,707.40",
		"picture": "http://placehold.it/32x32",
		"age": 39,
		"eyeColor": "green",
		"name": {
			"first": "Blackwell",
			"last": "Sawyer"
		},
		"company": "ROOFORIA"
	},
	{
		"_id": "5a6eddfbfa1242db3d2f4dc4",
		"index": 1,
		"guid": "9a40bd1c-9cf5-4ab5-832d-09dbac2ae2fe",
		"isActive": true,
		"balance": "$2,833.82",
		"picture": "http://placehold.it/32x32",
		"age": 40,
		"eyeColor": "brown",
		"name": {
			"first": "Letha",
			"last": "Dodson"
		},
		"company": "GEEKY"
	},
	{
		"_id": "5a6eddfb0b9894958bdb5a7c",
		"index": 2,
		"guid": "c853c131-8a96-4671-abe8-daeca557810c",
		"isActive": false,
		"balance": "$2,451.08",
		"picture": "http://placehold.it/32x32",
		"age": 31,
		"eyeColor": "green",
		"name": {
			"first": "Candy",
			"last": "Rivers"
		},
		"company": "FANGOLD"
	},
	{
		"_id": "5a6eddfb7d04691e97a8818b",
		"index": 3,
		"guid": "14296317-16ed-47bf-bd24-7b69aab6cf41",
		"isActive": false,
		"balance": "$2,303.37",
		"picture": "http://placehold.it/32x32",
		"age": 36,
		"eyeColor": "brown",
		"name": {
			"first": "Powers",
			"last": "Hanson"
		},
		"company": "FUELTON"
	},
	{
		"_id": "5a6eddfb06076212972ad0a8",
		"index": 4,
		"guid": "ef7f01fb-6cb8-40c5-aeed-199a754d63b1",
		"isActive": false,
		"balance": "$1,463.85",
		"picture": "http://placehold.it/32x32",
		"age": 27,
		"eyeColor": "brown",
		"name": {
			"first": "Clark",
			"last": "Barlow"
		},
		"company": "QUILITY"
	}
];

let dataSet2 = 
[
	{
		"_id": "5a6eddfbe8618d7e1eb4a0be",
		"phone": "+1 (835) 551-2932",
		"address": "645 Beard Street, Kohatk, Northern Mariana Islands, 5276",
		"about": "Reprehenderit sint dolor eiusmod aute quis Lorem officia esse cupidatat eu elit irure Lorem veniam. Commodo in cillum veniam aliquip nulla excepteur excepteur cillum fugiat et amet anim laboris. Sunt officia nulla irure excepteur eiusmod pariatur sit officia laborum ad do mollit eu elit. In ut proident nisi laborum quis sit mollit cillum id in veniam eiusmod nostrud. Sit ut ullamco culpa ex amet cupidatat elit. Cillum ad excepteur consequat irure excepteur exercitation cupidatat aute labore labore ad labore. Sunt culpa voluptate consectetur velit.",
		"registered": "Thursday, February 16, 2017 10:54 AM",
		"latitude": "-86.223708",
		"longitude": "-65.566473"
	},
	{
		"_id": "5a6eddfbfa1242db3d2f4dc4",
		"phone": "+1 (923) 433-3901",
		"address": "510 Noll Street, Clinton, Kentucky, 6697",
		"about": "Non aute reprehenderit laborum voluptate aliqua reprehenderit occaecat adipisicing sint mollit Lorem sit in est. Consequat do labore quis ea ad consequat mollit deserunt do nisi pariatur magna nostrud amet. Et consectetur eu deserunt ut amet aliquip ex excepteur aliqua deserunt. Laborum sit cupidatat dolore dolore laborum eu pariatur consectetur eiusmod. Sit nulla cillum proident exercitation eu deserunt cillum occaecat laboris nostrud sit eu incididunt.",
		"registered": "Tuesday, October 31, 2017 9:11 AM",
		"latitude": "-89.091612",
		"longitude": "-81.413832"
	},
	{
		"_id": "5a6eddfb0b9894958bdb5a7c",
		"phone": "+1 (881) 512-2419",
		"address": "423 Milton Street, Boling, District Of Columbia, 905",
		"about": "Labore qui quis cupidatat ipsum proident et deserunt amet laboris sint fugiat velit laboris pariatur. Adipisicing reprehenderit incididunt dolore ea cillum nisi laboris qui eu nostrud voluptate ut. Consequat eu irure veniam sunt. Laboris enim eiusmod in cillum quis nisi culpa incididunt quis. Id Lorem ullamco velit sunt nisi do voluptate ea fugiat anim esse.",
		"registered": "Saturday, June 3, 2017 12:42 PM",
		"latitude": "-19.003299",
		"longitude": "18.605825"
	},
	{
		"_id": "5a6eddfb7d04691e97a8818b",
		"phone": "+1 (818) 451-2093",
		"address": "595 Matthews Court, Moscow, Marshall Islands, 7391",
		"about": "Laboris non id proident consectetur aliqua consectetur sunt anim. Irure ullamco aliquip voluptate magna esse eiusmod tempor ipsum voluptate. Exercitation tempor consequat quis id proident consequat eiusmod nisi tempor eu aliquip nisi. Ea eu ipsum pariatur consectetur in sunt occaecat sit qui est.",
		"registered": "Saturday, July 18, 2015 7:26 AM",
		"latitude": "-34.113455",
		"longitude": "-59.621055"
	},
	{
		"_id": "5a6eddfb06076212972ad0a8",
		"phone": "+1 (901) 405-3492",
		"address": "614 Congress Street, Vienna, North Carolina, 3501",
		"about": "Amet ad aute nulla ea nostrud anim est mollit aliquip magna id officia. Deserunt consequat incididunt ullamco exercitation tempor ea cillum irure qui ex id quis et occaecat. Consectetur pariatur magna nulla incididunt deserunt laboris cillum proident consequat aute. Cillum enim fugiat tempor do dolore sint officia cillum velit irure minim ad esse irure. Cupidatat amet qui pariatur est laboris sint veniam qui eu commodo sunt mollit amet esse.",
		"registered": "Friday, October 3, 2014 8:07 PM",
		"latitude": "-56.584711",
		"longitude": "-99.852343"
	}
];


let dataSetresult = [];//Array to store the result of the merger

function arrayMerge(arr1,arr2)
{
    const data1Len = arr1.length;
    const data2Len = arr2.length;

    if(data1Len >= data2Len) //Determine largest dataSet in case they are not the same size...Required for the include() function so all values in the smaller dataSet are compared to the bigger one
    {
        for(let i = 0; i < data1Len; i++)
        {
            if(arr1[i]._id.includes(arr2[i]._id))
            {
                dataSetresult.push(Object.assign(arr1[i], arr2[i]));//Does the merging
            }
        }
        return dataSetresult;
    }
    else //For if dataset2 is greater than dataset1
    {
        for(let i = 0; i < data1Len; i++)
        {
            if(arr2[i]._id.includes(arr1[i]._id))
            {
                dataSetresult.push(Object.assign(arr2[i], arr1[i])); //Does the merging
            }
        }
        return dataSetresult;
    }
}

arrayMerge(dataSet1, dataSet2);
console.log(dataSetresult);


