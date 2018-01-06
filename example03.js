function Knight(name, regiment) {
  this.name = name;
  this.regiment = regiment;
  switch (regiment) {
    case 1:
      this.weapon = "Broadsword";
      break;
    case 2:
      this.weapon = "Claymore";
      break;
    case 3: 
      this.weapon = "Longsword";
      break;
    case 5:
      this.weapon = "War Hammer";
      break;
    case 6:
      this.weapon = "Battle Axe";
      break;
    case 4:
    case 7:
    case 8:
      this.weapon = "Morning Star";
      break;      
    case "King":
      this.weapon = "Excalibur";
      break;
    default:
      alert(name + " has an incorrect regiment, Master Armourer!\n\nNo weapon assigned!");
  }
}

// var soldier = new Knight("Richard", 4);
// console.log(soldier);
// var soldier = new Knight("Arthur", "King");
// console.log(soldier);
var soldier = new Knight("Arthur", 12);
console.log(soldier);