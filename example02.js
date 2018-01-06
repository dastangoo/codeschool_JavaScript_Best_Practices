treasureChest = {
  goldCoins: 10000,
  magicalItem: "Crown of Speed",
  necklaces: ["ruby", "pearl", "sapphire", "diamond"],
  openLid: function () {
    alert("Creeeek!");
  }
};


console.log("You've found the following necklace:");
for (var i = 0, x = treasureChest.necklaces.length; i < x; i++) {
  console.log(treasureChest.necklaces[i]);
}

console.log(x);