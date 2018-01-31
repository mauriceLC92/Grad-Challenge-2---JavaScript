/*
Challenge 3 - Quick and dirty network perf calculator

Send X requests to http://date.jsontest.com/ where X an argument to your program. 
Show the latency between each request and calculate the average time in milliseconds for all requests.
Reference: https://en.wikipedia.org/wiki/Unix_time
*/

let fetch = require('node-fetch');
let startTime = new Date().getTime();

let arrTime = [];
let totalTime = 0;

// fetch('http://date.jsontest.com/')
// .then((res)=> res.json())
// .then ((res) => {
//     arrTime.push(res.milliseconds_since_epoch);
//     console.log(res.milliseconds_since_epoch - startTime , "milliseconds");
//     console.log(arrTime);
// });


function networkPerfCalculator(numOfRequests)
{
    for(let i = 0; i < numOfRequests; i++)
    {
      fetchRequests();
    }
    
}

function fetchRequests()
{
  fetch('http://date.jsontest.com/')
  .then((res)=> res.json())
  .then ((res) => {

      arrTime.push(res.milliseconds_since_epoch - startTime);
      console.log("Latency for request:", arrTime.length ,"is: ",res.milliseconds_since_epoch - startTime , "milliseconds");
      //console.log(arrTime);
      
  });
}

networkPerfCalculator(5);

