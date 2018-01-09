// var list = 10;
var list = "abc def ghi";
try {
  var newHallOfFame = ["Dask Frostring", "Render Tallbork"];
  if (list == undefined) {
    throw new ReferenceError();
  }
  if ((list instanceof Array) == false) {
    throw new TypeError();
  }
  list.concat(newHallOfFame);
} catch (error) {
  if (error instanceof ReferenceError) {
    alert(error + "\nThe HoF roster does not exist as \"list\"!\nCheck for relocation in master document.");
  } 
  if (error instanceof TypeError) {
    alert("Alas, the Hall's list has no concat method.\nCheck for a disastrous overwrite!");
  }
} finally {
  console.log(list);
}