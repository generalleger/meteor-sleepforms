////////////////////////////////////////////////////////////////
// Make Meteor._sleepForMs
// Method ingests a number representing the time in milliseconds
////////////////////////////////////////////////////////////////

Meteor._sleepForMs = function(ms) {
  var now = new Date().getTime();
  while (now + ms >= new Date().getTime()) {}
};
