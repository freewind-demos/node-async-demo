function showRequests() {
  // get a list of open handles/file descriptors.
  console.log(process._getActiveHandles().length); 
  // get a list of active I/O requests
  console.log(process._getActiveRequests().length); 
}

showRequests();

setImmediate(function() {
  console.log('hello');
});

showRequests();