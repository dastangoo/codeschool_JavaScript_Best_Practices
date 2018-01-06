function Knight(name, regiment) {
  this.name = name;
  this.regiment = regiment;
  if (regiment == 1) {
    this.weapon = "Broadsword";
  } else if(regiment == 2) {
    this.weapon = "Claymore";
  } else if(regiment == 3) {
    this.weapon = "Longsword";
  } else if(regiment == 4) {
    this.weapon = "Mace";
  } else if(regiment == 5) {
    this.weapon = "War Hammer";
  } else if(regiment == 6) {
    this.weapon = "Battle Axe";
  } else if(regiment == 7) {
    this.weapon = "Halberd";
  } else if(regiment == 8) {
    this.weapon = "Morning Star";
  }
}

var knight = new Knight("A", 3);
console.log(knight);
