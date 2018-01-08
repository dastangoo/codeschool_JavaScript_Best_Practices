function LeatherArmor(bodyStyle, numBuckles, numSpaulders) {
  this.bodyStyle = bodyStyle;
  this.numBuckles = numBuckles;
  this.numSpaulders = numSpaulders;
}


function ChainMail(metal, linkDiameter, hasHood, skirtLength) {
  this.metal = metal;
  this.linkDiameter = linkDiameter;
  this.hasHood = hasHood;
  this.skirtLength = skirtLength;
}


var armorList = [], newbs = [];


function assignKnightArmor(knights, armorAvail) {
  var x = knights.length, y = armorAvail.length;
  
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++) {
      if (armorAvail[j] instanceof ChainMail) {
        knights[i].armor = armorAvail.splice(j, 1)[0];
        y--;
        break;
      }
    }
  }
}

function Armor(location) {
  this.location = location;
}
Armor.prototype = {
  putOn: function () {
    alert("Your armor is on.");
  }
}
assignKnightArmor(newbs, armorList);
console.log(armorList);

var kingsMail = new ChainMail("gold", 2, true, 36);
console.log(kingsMail instanceof ChainMail);