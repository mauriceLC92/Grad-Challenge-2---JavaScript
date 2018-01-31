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

function networkPerfCalculator(numOfRequests)
{
    for(let i = 0; i < numOfRequests; i++)
    {
      fetchRequests();
    }
    
}
let requestSum = 0;
let i = 0;
function fetchRequests()
{

  fetch('http://date.jsontest.com/')
  .then((res)=> res.json())
  .then ((res) => {
      startTime;
      arrTime.push(res.milliseconds_since_epoch - startTime);
      console.log("Latency for request:", arrTime.length ,"is: ",res.milliseconds_since_epoch - startTime , "milliseconds");
      requestSum += arrTime[i];
      i++;
      console.log('Average time for all requests: ',(requestSum/arrTime.length), ' milliseconds');
  });
}

networkPerfCalculator(5);

