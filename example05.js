var castle = {
  soldiers: 865,
  capacity: 3000,
  keep: {
    soldiers: 19,
    capacity: 40,
    drawbridge: {
      soldiers: 8,
      capacity: 20,
      open: function () {
        alert("rrrrrrrrrrrrBANG");
      },
      close: function () {
        alert("yunyunyunyunyunyunCLACK");
      }
    }
  }
};


var reinforcements = 12;
if (castle.keep.drawbridge.capacity >= castle.keep.drawbridge.soldiers + reinforcements) {
  castle.keep.drawbridge.open();
  castle.keep.drawbridge.soldiers += reinforcements;
  alert("Drawbridge soldiers: " + castle.keep.drawbridge.soldiers);
  castle.keep.drawbridge.close();
} else {
  alert("Reinforcements would require split unit.");
}