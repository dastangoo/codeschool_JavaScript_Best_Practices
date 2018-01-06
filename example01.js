treasureChest = {
  goldCoins: 10000,
  magicalItem: "Crown of Speed",
  necklaces: ["ruby", "pearl", "sapphire", "diamond"],
  openLid: function () {
    alert("Creeeek!");
  }
};


console.log("You've found the following necklace:");
var x = treasureChest.necklaces.length;
for (var i = 0; i < x; i++) {
  console.log(treasureChest.necklaces[i]);
}