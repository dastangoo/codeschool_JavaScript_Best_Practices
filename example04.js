treasureChest = {
  goldCoins: 10000,
  magicalItem: "Crown of Speed",
  necklaces: ["ruby", "pearl", "sapphire", "diamond"],
  openLid: function () {
    alert("Creeeek!");
  }
};



Array.prototype.countType = function (type) {
  var count = 0;
  for (var i = 0, x = this.length; i < x; i++) {
    if(this[i] == type){
      count++;
    }
  }
  return count;
};

Array.prototype.removeAll = function (item) {
  var removed = [];
  for (var i = 0, x = this.length ; i < x; i++) {
    if(this[i] == item) {
      removed.push(item);
      this.splice(i, 1);
    }
  }
  return removed;
};


console.log("You've found the following necklace:");
var list = treasureChest.necklaces;
for(p in list){
  console.log(list[p]);
}
