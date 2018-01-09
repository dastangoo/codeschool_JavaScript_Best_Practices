var drawbridge = {
  soldiers: 8,
  capacity: 20,
  open: function () {
    alert("rrrrrrrrrrrrBANG!");
  },
};

close = function () {
  alert("yunyunyunyunyunyunCLACK!");
}

with(drawbridge){
  close();
}