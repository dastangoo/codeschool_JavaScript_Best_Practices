var isArthur = true;
var isKing = false;
var isArcher = true;
var weapon;
var helmet;

// if (isArthur) {
//   weapon = "Excalibur";
// } else {
//   weapon = "Longsword";
// }
// 
// console.log(weapon);

// var weapon = isArthur ? "Excalibur" : "Longsword";

// console.log(weapon);


// isArthur = true;
// console.log("Current weapon: " + (isArthur && isKing ? "Excalibur" : "Longsword"));

// isArthur && isKing ? alert("Hair Arthur, King of the Britons") : 
//                      alert("Charge on, ye Knight, for the glory of the King!");
                     
                     
// isArthur && isKing ? function () {
//   alert("Hail Arthur, King of the Britons!");
//   console.log("Current weapon: Excalibur");
// }()
// :
// function () {
//   alert("Charge on,, ye Knight, for the glory of the King!");
//   console.log("Current weapon: Longsword");
// }()

// isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite") : (weapon = "Longsword" , helmet = "Iron Helm");
// console.log("Current weapon: " + weapon + ", Current helmet: " + helmet);

isArthur && isKing ? (weapon = "Excalibur", helmet = "Goosewhite")
                   :
                   isArcher ? (weapon = "Longbow", helmet = "Mail Helm")
                   : (weapon = "Longsword", helmet = "Iron Helm");
                   
console.log("Current weapon: " + weapon + "\nCurrent helmet: " + helmet);
