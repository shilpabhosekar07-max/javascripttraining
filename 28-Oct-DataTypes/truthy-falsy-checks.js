let complaintReason = "";
if (complaintReason) {
  console.log("Complaint on file");
} else {
  console.log("No Complaint");
}

let appointmentType;
//2. Given `let appointmentType;` (undefined), use `||` to default it to `"General Consultation"` and print the result.
if ((appointmentType = appointmentType || "General Consultation")) {
  console.log("Appointment type:" + appointmentType);
}

//3. Given `let symptoms = [];` (an empty array), write the **wrong** check (`if (symptoms)`) and show it incorrectly reports "has symptoms." Then write the **correct** check using `.length > 0`.

let symptoms = [];
if (symptoms) {
  //for empty array check for point 1
  console.log("Wrong check on empty array: Has symptoms");
}
if (symptoms.length > 0) {
  //for correct check when array is empty for 2nd point check
  console.log("Correct check : Has symptoms");
} else {
  console.log("else check on empty array: Has no symptoms");
}

//4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`) and show it incorrectly reports "no complications" even when the count is a real, valid zero. Then write the **correct** check using `> 0`.
let complications = 0;
if (complications) {
  console.log("Wrong check on zero: No complications");
}
//2nd check write the **correct** check using `> 0`.
if (complications > 0) {
  console.log("correct check : COmplications");
} else {
  console.log("Correct check: 0 complications recorded");
}

//5. Given `let followUpDays = 0;` (0 means "follow up the same day"), default it to `7` using `||` and then using `??`. Print both and explain the difference in a comment.
let followUpDays = 0;

let days = followUpDays || 7;
let days1 = followUpDays ?? 7;

console.log("Follow-up with ||: ", days);
console.log("Follow-up with ??: ", days1);
