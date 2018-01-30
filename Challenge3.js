/*
Challenge 3 - Quick and dirty network perf calculator

Send X requests to http://date.jsontest.com/ where X an argument to your program. 
Show the latency between each request and calculate the average time in milliseconds for all requests.
Reference: https://en.wikipedia.org/wiki/Unix_time
*/



fetch('http://date.jsontest.com/').then((res)=> {
  console.log(res);
});

fetch('http://date.jsontest.com/').then((res)=> {
    console.log(res.milliseconds_since_epoch);
});



