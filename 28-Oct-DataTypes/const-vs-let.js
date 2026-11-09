let phoneNumber = "022-4000-1234";
let patientPerDay = "35";
let patientsWaiting = "5";
let tokenNumber = "12";

//const clinicCode; //SyntaxError: Missing initializer in const declaration

console.log("Cinic Phone:" + phoneNumber);
console.log("Max patients per day:" + patientPerDay);
console.log("Patients waiting:" + patientsWaiting);
console.log("Current token:" + tokenNumber);
console.log("");
tokenNumber = "13";
//let patientsWaiting = "6"; //error when declaring let again Identifier 'patientsWaiting' has already been declared
patientsWaiting = "6";
console.log("After update:");
console.log("Patients waiting:" + patientsWaiting);
console.log("Current token:" + tokenNumber);
