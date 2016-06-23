setImmediate(function () {
  console.log("setImmediate: 1");
  setImmediate(function () {
    console.log("setImmediate: 2");
    setImmediate(function () {
      console.log("setImmediate: 3");
    });
    setImmediate(function () {
      console.log("setImmediate: 4");
    });
  });

  setImmediate(function () {
    console.log("setImmediate: 5");
    setImmediate(function () {
      console.log("setImmediate: 6");
    });
    setImmediate(function () {
      console.log("setImmediate: 7");
    });
  });
});

setTimeout(function() {
  console.log('setTimeout');
}, 0);