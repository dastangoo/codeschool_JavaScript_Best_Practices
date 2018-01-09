function assignRegimentMoto(number, motto) {
  eval("regiment" + number).motto = motto;
}

assignRegimentMoto(1, "The King's Own");
console.log(regiment1.motto);