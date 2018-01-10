var ARMORY =(function(){
  var weaponList = [],
  var armorList = [],

  var removeWeapon = function () {},
  var replaceWeapon = function () {},
  var removeArmor = function () {},
  var replaceArmor = function () {}
  
  return {
    makeWeaponRequest: function (weapon) {
      removeWeapon();
    },
    makeArmorRequest: function () {},
  };
})();

ARMORY.makeWeaponRequest("Excalibur");