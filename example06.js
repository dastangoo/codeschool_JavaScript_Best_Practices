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
with(castle.keep.drawbridge){
  if (capacity >= soldiers + reinforcements) {
    open();
    soldiers += reinforcements;
    alert("Drawbridge soldiers: " + soldiers);
    close();
  } else {
    alert("Reinforcements would require split unit.");
  }  
}
