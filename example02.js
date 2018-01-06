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
    case 4:
      this.weapon = "Mace";
      break;
    case 5:
      this.weapon = "War Hammer";
      break;
    case 6:
      this.weapon = "Battle Axe";
      break;
    case 7:
      this.weapon = "Halberd";
      break;
    case 8:
      this.weapon = "Morning Star";
      break;      
  }
}

var soldier = new Knight("Richard", 4);
console.log(soldier);