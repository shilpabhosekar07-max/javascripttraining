// Exercise 1: Policy Types Array

let policyTypes = ["Auto", "Home", "Life", "Health"];
console.log("Exercise 1 Result");
console.log("Types:", policyTypes); //The complete array

console.log("Total types:", policyTypes.length); //Total number of policy types

console.log("First Type: ", policyTypes[0]); //The first policy type
console.log("Last Type: ", policyTypes[policyTypes.length - 1]); // The last policy type
console.log("");
// Exercise 2: Claim Status by Index

let claimStatuses = ["Filed", "Under Review", "Approved", "Rejected"];
console.log("Exercise 2 Result");
console.log("First (index 0): ", claimStatuses[0]);
console.log("First (index 1): ", claimStatuses[1]);
console.log("First (index 2): ", claimStatuses[2]);
console.log("First (index 3): ", claimStatuses[3]);

console.log("Position: 1st \t 2nd \t 3rd \t 4th \t");
console.log("Index   : 0 \t 1 \t 2 \t 3\t");
console.log(
  "Values:",
  claimStatuses[0],
  "\t",
  claimStatuses[1],
  "\t",
  claimStatuses[2],
  "\t",
  claimStatuses[3],
  "\t",
);
/*
for (let claimstatus of claimStatuses) {
  console.log("Values:", claimstatus, "\t");
}
*/
console.log("");

//## Exercise 3: Premium Amounts and Length
let premiumAmounts = ["450", "620", "380", "900"];
console.log("Exercise 3 Result");
console.log("Total number of premium amount:");
console.log("FIrst Amount:", premiumAmounts[0]);
console.log("Last Amount:", premiumAmounts[premiumAmounts.length - 1]);
console.log(
  "Second-to-last amount:",
  premiumAmounts[premiumAmounts.length - 2],
);
