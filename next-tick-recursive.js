function myNextTick() {
  process.nextTick(function() {
    console.log('In nextTick');
    myNextTick();
  })
}

setImmediate(function() {
  console.log('In setImmediate');
  throw new Error('my-setImmediate-error');
});

myNextTick();