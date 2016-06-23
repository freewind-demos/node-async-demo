var fs = require('fs');
var sleep = require('sleep').sleep;

function showQueue() {
  console.log(process._getActiveRequests().length);  
}

showQueue();

var stream = fs.createReadStream("./package.json");

showQueue();

// block the code for 3s
sleep(3);

showQueue();

var i = 0;

stream.on('open', function() {
  console.log('file is opened');
});

stream.on('data', function(data) {
  i += 1;
  showQueue();
  console.log('data ' + i + ': ' + data.length);
});


stream.on('end', function() {
  console.log('------------ end -----------');
  showQueue();
})


