function ceremonialDagger(knight, rank) {
  this.length = 8;
  this.owner = knight;
  switch (rank) {
    case "King":
      this.diamonds = 1;
    case "High Constable":
      this.amethyst = 2;
    case "Field Marshal":
      this.sapphires = 1;
    case "Captain":
      this.emeralds = 1;
    case "Knight":
      this.rubies = 6;
  }
}

var knightDagger = new ceremonialDagger("Jerome", "Knight");
console.log(knightDagger);

var marshalDagger = new ceremonialDagger("Timothy", "Field Marshal");
console.log(marshalDagger);