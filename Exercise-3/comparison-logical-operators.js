//1st question
let age = 25;

if (age >= 18 && age <= 65) {
  console.log("Eligible for the screening (18-65)");
} else {
  console.log("Outside the screening's eligible age range");
}

//2nd question
let patientId = "P-1001";
let insuranceId = "INS-778";
let referralCode = "";

if ((patientId != 0 && insuranceId != 0) || referralCode != 0) {
  console.log("Sufficient intake information");
} else {
  console.log(
    "Insufficient intake information - provide patient ID+insurance ID OR a referral code",
  );
}

//3rd question
let status1 = "COMPLETED";
let complications = 0;
if (
  (status1 === "COMPLETED" || status1 === "RESCHEDULED") &&
  complications === 0
) {
  console.log("Appointment closed out cleanly");
} else {
  console.log("Appointment needs follow-up");
}
//for complications 2 - followup condition for else
if (
  (status1 === "COMPLETED" || status1 === "RESCHEDULED") &&
  complications === 2
) {
  console.log("Appointment closed out cleanly");
} else {
  console.log("Appointment needs follow-up");
}
//3rd cancelled condition
status1 = "CANCELED";
if (
  (status1 === "COMPLETED" || status1 === "RESCHEDULED") &&
  complications === 0
) {
  console.log("Appointment closed out cleanly");
} else {
  console.log("Appointment needs follow-up");
}

//4th question
let waitTime = 25;
if (waitTime < 30) {
  console.log("Wait time within target (X minutes)");
} else {
  console.log("Wait time exceeds target (X minutes, target: 30 minutes)");
}

waitTime = 30;

if (waitTime < 30) {
  console.log("Wait time within target (X minutes)");
} else {
  console.log("Wait time exceeds target (X minutes, target: 30 minutes)");
}

waitTime = 29;
if (waitTime < 30) {
  console.log("Wait time within target (X minutes)");
} else {
  console.log("Wait time exceeds target (X minutes, target: 30 minutes)");
}

waitTime = 35;
if (waitTime < 30) {
  console.log("Wait time within target (X minutes)");
} else {
  console.log("Wait time exceeds target (X minutes, target: 30 minutes)");
}
