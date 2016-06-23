var fs = require('fs');

var stream = fs.createReadStream('./package.json');
stream.on('open', function() {
  console.log('=== I/O: open');
});

process.nextTick(function () {
  console.log("nextTick: 1");
  process.nextTick(function () {
    console.log("nextTick: 2");
    process.nextTick(function () {
      console.log("nextTick: 3");
    });
    process.nextTick(function () {
      console.log("nextTick: 4");
    });
  });

  process.nextTick(function () {
    console.log("nextTick: 5");
    process.nextTick(function () {
      console.log("nextTick: 6");
    });
    process.nextTick(function () {
      console.log("nextTick: 7");
    });
  });
});

setTimeout(function() {
  console.log('setTimeout');
}, 0);