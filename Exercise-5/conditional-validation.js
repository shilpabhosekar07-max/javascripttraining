//## Exercise 1: Customer Email Validation
let email = "customer@examplebank.com";

if (email.includes("@") && email.includes(".")) {
  console.log("Valid email format");
} else {
  console.log("Invalid email format");
}

//Invalid email format
let email1 = "missing@domain";

if (email1.includes("@") && email1.includes(".")) {
  console.log("Valid email format");
} else {
  console.log("Invalid email format");
}
console.log("");

//## Exercise 2: Transaction Status Categorizer
console.log("Exercise 2");
let transactionStatus = "PENDING";
if (transactionStatus === "APPROVED") {
  console.log("Transaction status APPROVED");
} else if (transactionStatus === "DECLINED") {
  console.log("Transaction status DECLINED");
} else {
  console.log("Transaction status PENDING");
}
console.log("");
//## Exercise 3: Online Banking Password Strength Checker

console.log("Exercise 3");
let portalPassword = "Bank@123";

if (portalPassword.length < 6) {
  console.log("Weak password - too short");
} else if (portalPassword.length < 10) {
  console.log("password ", portalPassword);
  console.log("Medium password strength");
  console.log(portalPassword.length);
} else {
  console.log("Strong password");
}

//## Exercise 4: Loan Risk Score Grading
console.log("");
console.log("Exercise 4");

let score = "75";

if (score >= 90) {
  console.log("Grade: A (Excellent)");
} else if (score <= 89 && score >= 80) {
  console.log("Grade: B (Good)");
} else if (score <= 79 && score >= 70) {
  console.log("Grade: C (Average)");
} else if (score <= 69 && score >= 60) {
  console.log("Grade: D (Pass)");
} else {
  console.log("Grade: F (Fail)");
}

//## Exercise 5: Early Return Pattern
console.log("");
console.log("Exercise 5");

function checkTransactionNested(accountId, amount) {
  if (accountId !== null) {
    if (amount >= 0) {
      if (amount <= 10000) {
        return "Valid: " + accountId + " for $" + amount;
      } else {
        return "Error: Amount exceeds limit";
      }
    } else {
      return "Error: Negative amount";
    }
  } else {
    return "Error: No account ID";
  }
}

console.log(checkTransactionNested(null, 300));
console.log(checkTransactionNested("ACC-1001", -50));
console.log(checkTransactionNested("ACC-1001", 15000));
console.log(checkTransactionNested("ACC-1001", 250));

//## Exercise 6: Switch - Basic Value Matching
console.log("");
console.log("Exercise 6");
let transactionStatus1 = "DECLINED";
switch (transactionStatus1) {
  case "APPROVED":
    console.log("Transaction approved");
    break;
  case "DECLINED":
    console.log("Transaction declined - contact your bank");
    break;
  case "PENDING":
    console.log("Transaction pending");
    break;
  case "ON_HOLD":
    console.log("Transaction on hold - review required");
    break;
  default:
    console.log("Unknown transaction status");
}

//## Exercise 7: Switch - Grouping Cases (Multiple Cases, One Outcome)

console.log("");
console.log("Exercise 7");
let responseCode = 77;

switch (responseCode) {
  case 0:
    console.log("Approved - transaction successful");
    break;
  case 8:
    console.log("Approved - ID verification required");
    break;
  case 5:
  case 51:
  case 61:
    console.log("Declined - insufficient funds or over limit");
    // (5, 51, and 61 all print the same message - intentional fall-through)
    break;
  case 54:
    console.log("Declined - expired card");
    break;
  case 91:
  case 96:
  case 99:
    console.log("System error - try again later");
    break;
  default:
    console.log("Unknown response code: " + responseCode);
}

//## Exercise 8: Switch with Expressions
console.log("");
console.log("Exercise 8");
