let firstName = "Aisha";
let lastName = "Khan";

console.log("Full Name : ", `${firstName} ${lastName}`);
console.log(
  "Email : ",
  `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
);

//multiline visit confirmation:
let email = "aisha.khan@example.com";
let appointmentType = "Annual Checkup";

let visitConfirmation = `
========================================
        VISIT CONFIRMATION
========================================
Patient: ${firstName} ${lastName}
Email: ${email}
Appointment: ${appointmentType}
========================================
`;

console.log(visitConfirmation);

let consultationFee = 500;
let labFee = 250;
let totalFee = `Total Fee :
${consultationFee + labFee}
`;
console.log(totalFee);

/*
5. Build three pieces of test data from these values, and print them:
   ```javascript
   const baseUrl = "https://portal.sunrisehealth.example.com";
   const patientId = "P-1001";
   const visitDate = "2026-08-06";
   ```
   - The appointments page URL: `<baseUrl>/patients/<patientId>/appointments`
   - A selector for the patient's row: `[data-patient-id="<patientId>"]`
   - The message the page should show: `Appointment booked for <fullName> on <visitDate>`

**Example Output:**
```

TEST DATA
==================
URL: https://portal.sunrisehealth.example.com/patients/P-1001/appointments
Selector: [data-patient-id="P-1001"]
Expected message: Appointment booked for Aisha Khan on 2026-08-06
```

**Hints:**
- You can put double quotes inside backticks without escaping them
- Step 5 is how template literals show up in real Playwright tests

*/
