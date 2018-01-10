function tax(price, percent) {
  return (price * percent / 100).toFixed(2);
}

console.log(tax(9.85, 7.5));