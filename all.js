var fs = require('fs');

var stream = fs.createReadStream('./package.json');

stream.on('open', function() {
  console.log('=== I/O: open');
});

stream.on('data', function(data) {
  console.log('=== I/O: data ' + data.length);
});

stream.on('end', function() {
  console.log('=== I/O: end');
});

setImmediate(function() {
  console.log('setImmediate 1');
  setImmediate(function() {
    console.log('setImmediate 2');
    process.nextTick(function() {
      console.log('nextTick in Immediate 2');
    })
  });
});

process.nextTick(function() {
  console.log('nextTick 1');
  process.nextTick(function() {
    console.log('nextTick 2');
    process.nextTick(function() {
      console.log('nextTick in nextTick 2');
    })
  });
});

setTimeout(function() {
  console.log('setTimeout 1');
  setTimeout(function() {
    console.log('setTimeout 2');
    process.nextTick(function() {
      console.log('nextTick in setTimeout 2');
    })
  }, 0);
}, 0);
