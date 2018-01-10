function tax(price, percent) {
  return (price * percent / 100).toFixed(2);
}

var mailedGlove = 9.85, 
    armorTax = 7.5,
    total = mailedGlove + tax(mailedGlove, armorTax);

console.log(total);

