// Snippet A - o/p - Inside: PUN-02 & Outside: MUM-01, as the 1st branch code is declare with some value
// so it will go inside the if loop & print inside if loop console value
// and their is no else mention so it will print Outside: MUM-01
let branchCode = "MUM-01";
if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode);
}
console.log("Outside:", branchCode);

// Snippet B - o/p - Fee before: null or no value or blank & Fee after: 250
// as before assigning any value to variable we are printing it so 1st will give some error and
// 2nd will print as 250 because here we have assigned a value & then printing
function showServiceFee() {
  console.log("Fee before:", serviceFee);
  var serviceFee = 250;
  console.log("Fee after:", serviceFee);
}
showServiceFee();

// Snippet C // o/p - var scope is not limited to if block so it will print value outside if block
//o/p = Limit with var: 50000
function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;
  }
  console.log("Limit with var:", dailyLimit);
}
checkLimitWithVar();

// Snippet D // let scope is limited to if block, so this will not print any value outside the if loop
//o/p = Limit with let: undefined
function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000;
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();

//Error for run: ReferenceError: dailyLimit is not defined for line 37
