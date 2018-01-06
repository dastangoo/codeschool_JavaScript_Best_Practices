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
      this.weapon = "Moning Star";
      break;
    case "King":
      this.weapon = "Excalibur";
      break;
    default:
      alert(name + " has an incorrect regiment, Master Armourer!\n\nNo weapon assigned!");
  }
}

var firstRegimentNewbs = ["Grimble Horeshead", "Jark Winterborn", "Bunder Ropefist", "Earnst Breadbaker"];
var firstRegimentKnights = [];

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
      this.weapon = "Moning Star";
      break;
    case "King":
      this.weapon = "Excalibur";
      break;
    default:
      alert(name + " has an incorrect regiment, Master Armourer!\n\nNo weapon assigned!");
  }
}

var firstRegimentNewbs = ["Grimble Horeshead", "Jark Winterborn", "Bunder Ropefist", "Earnst Breadbaker"];
var firstRegimentKnights = [];

var secondRegimentNewbs = ["Jenner Pond", "Tar Backstrand", "Cromer Treen", "Stim Lancetip", "Vorn Sharpeye", "Rack Leaflets", "Bruck Valleyhome", "Arden Follower"];
var secondRegimentKnights = [];

console.time("Total completion time");
// console.time("Time to add " + firstRegimentNewbs.length + " Knights");
for (var i = 0, x = firstRegimentNewbs.length; i < x; i++) {
  firstRegimentKnights.push(new Knight(firstRegimentNewbs[i], 1));
}
// console.timeEnd("Time to add " + firstRegimentNewbs.length + " Knights");
// console.time("Time to add " + secondRegimentNewbs.length + " Knights");
for (var i = 0, x = secondRegimentNewbs.length; i < x; i++) {
  secondRegimentKnights.push(new Knight(secondRegimentNewbs[i], 1));
}
// console.timeEnd("Time to add " + secondRegimentNewbs.length + " Knights");
console.timeEnd("Total completion time");