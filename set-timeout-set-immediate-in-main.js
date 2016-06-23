setTimeout(function timeout () {
  console.log('timeout');
},0);

setImmediate(function immediate () {
  console.log('immediate');
});

/////////////////////////////
/*
$ node d.js
immediate
timeout
$ node d.js
timeout
immediate
*/