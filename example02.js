function SpeedTest(testImplement, testParams, repetitions) {
  this.testImplement = testImplement;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000;
  this.average = 0;
  
}

SpeedTest.prototype = {
  startTest: function () {
     var beginTime, endTime, sumTimes = 0;
     for (var i = 0, x = this.repetitions; i < x; i++) {
       beginTime = +new Date();
       this.testImplement(this.testParams);
       endTime = +new Date();
       sumTimes += endTime - beginTime;
     }
     this.average = sumTimes / this.repetitions;
     return console.log("Average execution across " + this.repetitions + ": " + this.average);
  }
}


var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Earnst Breadbaker"];
var firstRegimentsKnights = [];
var listForTests = [firstRegimentNewbs, firstRegimentsKnights];

var noBP = function (listOfParams) {
  for (var i = 0, x = listOfParams[0].length; i < x; i++) {
    listOfParams[1].push(new Knight(listOfParams[0][i], 1));
  }  
}

var noBPTest = new SpeedTest(noBP, listForTests, 100000);
