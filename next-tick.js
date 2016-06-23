console.log('111');

process.nextTick(function() {
  console.log('nextTick: 111');
});

console.log('222');