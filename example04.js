armory = {
  swords: ["Broadsword", "Katana", "Claymore", "Scimitar"],
  addSword: function () {
    
  }
};

armory.retrieveSword = function (request) {
  return (this.swords.indexOf(request) >= 0) ? 
    this.swords.splice(this.swords.indexOf(request), 1)[0] :
    alert("No " + request + ", baby!");
};

// console.log(armory.swords.indexOf("Claymore"));
// console.log(armory.swords.indexOf("Donut"));
// 
// 
// var soldiers = ["Knights", "Pikemen", "Archers"];
// console.log(soldiers.splice(1,2));
// 
// 
// console.log(armory.retrieveSword("Katana"));
// console.log(armory.retrieveSword("Donut"));

// var armoryIsOpen = true;
var armoryIsOpen = false;
var isKnight = true;
// var weapon = isKnight && armory.retrieveSword("Katana");
// var weapon = isKnight && armory.retrieveSword("Rapier");
var weapon = armoryIsOpen && isKnight && armory.retrieveSword("Katana");
console.log(weapon);
console.log(armory.swords);