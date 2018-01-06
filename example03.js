treasureChest = {
  goldCoins: 10000,
  magicalItem: "Crown of Speed",
  necklaces: ["ruby", "pearl", "sapphire", "diamond"],
  openLid: function () {
    alert("Creeeek!");
  }
};


console.log("You've found the following necklace:");
var list = treasureChest.necklaces;
for (var i = 0, x = treasureChest.necklaces.length; i < x; i++) {
  console.log(list[i]);
}

console.log(x);


Array.prototype.countType = function (type) {
  var count = 0;
  for (var i = 0, x = this.length; i < x; i++) {
    if(this[i] == type){
      count++;
    }
  }
  return count;
}

Array.prototype.removeAll = function (item) {
  var removed = [];
  for (var i = 0, x = this.length ; i < x; i++) {
    if(this[i] == item) {
      removed.push(item);
      this.splice(i, 1);
    }
  }
  return removed;
}