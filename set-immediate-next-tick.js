var fs = require('fs');

console.log("111");

var stream = fs.createReadStream('./package.json');

stream.on('open', function() {
  console.log('IO: file is opened');
});

stream.on('data', function(data) {
  console.log('IO: read some data');
});

stream.on('end', function() {
  console.log('IO: end');
});


setImmediate(function() {
  console.log("setImmediate: 222");
});

process.nextTick(function() {
  console.log("nextTick: 333");
});

setImmediate(function() {
  console.log("setImmediate: 444");
});

process.nextTick(function() {
  console.log("nextTick: 555");
});

setTimeout(function() {
  console.log("setTimeout: 666");
}, 0);



