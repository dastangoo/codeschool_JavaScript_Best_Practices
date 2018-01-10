function isThisActuallyANumberDontLie(data) {
  return (typeof data === "number" && !isNaN(data));
}

function checkValidZip() {
  var entry = document.getElementById("zip").value;
  var userZip = parseInt(entry);
  try {
    if (isThisActuallyANumberDontLie(userZip)) {
      if (userZip.toFixed(0).length === 5) {
        return true;
      } else {
        throw new Error("Nope!");
      }
    } else {
      throw new Error("Nope!");
    }
  } catch (e) {
    if (e.message == "Nope!") {
      alert("Please enter a valid zip, dude.");
      return false;
    }
    // Other error responsed go here ...
  } 
}