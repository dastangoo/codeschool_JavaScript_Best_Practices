function SignalFire(ID, startingLogs) {
  this.fireID = ID;
  this.logsLeft = startingLogs;
}


SignalFire.prototype = {
  addLogs: function (numLogs) {
    this.logsLeft += numLogs;
  },
  lightFire: function () {
    alert("Whooosh!");
  },
  
  smokeSignal: function (message) {
    if (this.logsLeft < message.length / 10) {
      alert("Not enough fuel to send the current message!");
    } else {
      this.lightFire();
      var x = message.length;
      for (var i = 0; i < x; i++) {
        alert("(((" + message[i] + ")))");
        if (i % 10 == 0 && i != 0) {
          this.logsLeft--;
        }
      }
    }
  }  
}

var fireOne = new SignalFire(1, 20);
console.log(fireOne);
var fireTwo = new SignalFire(2, 18);
console.log(fireTwo);
var fireThree  = new SignalFire(3, 24);
console.log(fireThree);
fireOne.addLogs(8);
console.log(fireOne);
fireTwo.addLogs(10);
console.log(fireTwo);
fireThree.addLogs(4);
console.log(fireThree);
fireThree.smokeSignal("Goblins!");