function SignalFire(ID, startingLogs) {
  this.fireID = ID;
  this.logsLeft = startingLogs;
  this.addLogs = function (numLogs) {
    this.logsLeft += numLogs;
  }
  this.lightFire = function () {
    alert("Whooosh!");
  }
  
  this.smokeSignal = function (message) {
    if (this.logsLeft < this.message.length / 10) {
      alert("Not enough fuel to send the current message!");
    } else {
      this.lightFire();
      var x = this.message.length;
      for (var i = 0; i < x; i++) {
        alert("(((" + this.message[i] + ")))");
        if (i % 10 == 0 && i != 0) {
          this.logsLeft--;
        }
      }
    }
  }
}


var signalfire = new SignalFire(1, "Log");
console.log(signalfire);