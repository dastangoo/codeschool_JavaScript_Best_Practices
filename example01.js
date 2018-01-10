var wartime = true;
var ARMORY =(function(war){
  var weaponList = [],
  var armorList = [],

  var removeWeapon = function () {},
  var replaceWeapon = function () {},
  var removeArmor = function () {},
  var replaceArmor = function () {}
  
  return {
    makeWeaponRequest: function (weapon) {
      if (war) {
        // let civilians have weapon
      }
    },
    makeArmorRequest: function () {},
  };
})(wartime);

ARMORY.makeWeaponRequest("Excalibur");