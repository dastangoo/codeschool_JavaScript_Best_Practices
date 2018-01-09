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
var o = castle.keep.drawbridge;
if (o.capacity >= o.soldiers + reinforcements) {
  o.open();
  o.soldiers += reinforcements;
  alert("Drawbridge soldiers: " + o.soldiers);
  o.close();
} else {
  alert("Reinforcements would require split unit.");
}  
