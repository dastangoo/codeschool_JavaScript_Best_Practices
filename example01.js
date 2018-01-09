var drawbridge = {
  soldiers: 8,
  capacity: 20,
  open: function () {
    alert("rrrrrrrrrrrrBANG!");
  }
};

with(drawbridge){
  open();
}