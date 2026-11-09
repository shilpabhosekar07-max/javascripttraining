let firstName = "Aisha"; // String
let lastName = "Khan"; // String
let patientId = 1001; // Number
let age = 34; // Number
let averageWaitTime = 12.5; // Number
let isActive = true; // Boolean
let hasInsurance = false; // Boolean
let nextAppointment; // not booked yet
let referralNote = null; // deliberately empty

console.log("Patient Profile");
console.log("==================");
console.log("Name: ", firstName, lastName);
console.log("Patient ID: " + patientId);
console.log("Age: " + age);
console.log("Average Wait Time: " + averageWaitTime);
console.log("Active: " + isActive);
console.log("Has Insurance: " + hasInsurance);
console.log("Next Appointment: " + nextAppointment);
console.log("Referral Note: " + referralNote);

console.log("Type Check:");
console.log("firstName: " + typeof firstName);
console.log("lasttName: " + typeof lastName);
console.log("patientId: " + typeof patientId);
console.log("age: " + typeof age);
console.log("averageWaitTime: " + typeof averageWaitTime);
console.log("hasInsurance: " + typeof hasInsurance);
console.log("nextAppointment: " + typeof nextAppointment);
console.log("referralNote: " + typeof referralNote);
age = "Thirty-four";

console.log("Type of age changed: " + typeof age);
/*
After reassigning age to a string:
typeof age: string */
