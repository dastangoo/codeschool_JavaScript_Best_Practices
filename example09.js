function isThisActuallyANumberDontLie(data) {
  return (typeof data === "number" && !isNaN(data));
}

console.log(isThisActuallyANumberDontLie(640));
console.log(isThisActuallyANumberDontLie("640"));
console.log(isThisActuallyANumberDontLie(NaN));