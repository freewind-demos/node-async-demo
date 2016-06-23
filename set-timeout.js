console.log("111");

setTimeout(function() {
  console.log("setTimeout: 111")
}, 10);

setTimeout(function() {
  console.log("setTimeout: 222")
}, 2);

setTimeout(function() {
  console.log("setTimeout: 333")
}, 0);

console.log("222");