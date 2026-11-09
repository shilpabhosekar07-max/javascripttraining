let max = Number.MAX_SAFE_INTEGER;

console.log("Max: ", max);
console.log("max + 1: ", max + 1);
console.log("max + 2: ", max + 2);
console.log("max + 3: ", max + 3);

max = BigInt(Number.MAX_SAFE_INTEGER);

console.log("bigMax + 1n: : ", max + 1n);
console.log("bigMax + 2n: : ", max + 2n);
console.log("bigMax + 3n: : ", max + 3n);

console.log("Type of max : ", typeof max);

//symbols
let sym1 = Symbol("labResultId");
let sym2 = Symbol("labResultId");

console.log(sym1);
console.log(sym2);
console.log("sym1===sym2", sym1 === sym2);
console.log("Type of sym1:", typeof sym1);
console.log("description of sym1:", sym1.description);
