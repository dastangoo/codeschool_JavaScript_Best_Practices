function countEntries(knightResponses, value) {
  var count = 0, x = knightResponses.length;
  for (var i = 0; i < x; i++) {
    if (knightResponses[i] == value) {
      count++;
    }
  }
  return count;
}


var fields = ["Jason Millhouse", "1", "12", true, true, false];
var numCompletedTasks = countEntries(fields, true);
console.log(numCompletedTasks);