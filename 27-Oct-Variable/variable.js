console.log("Hello Playwrite");
console.log("Javascript");

let email = "mark@shophop.com";

console.log(email); // here email is as variable
console.log("email"); //here email is string

const apiKey = "email id name:mark";
console.log(apiKey);

let firstName = "Shilpa";
let last_name = "Purandare";
const newEmail = "shilpa@abc.com";
const mobile = "1234567890";
let information = "all Done";

console.log(firstName);
console.log(last_name);
console.log(newEmail);
console.log(mobile);
console.log(information);

6 + 5;
console.log("this is " + 6 + 5);

function checkLimitWithLet() {
  let dailyLimit;
  if (true) {
    dailyLimit = 50000;
    console.log("inside");
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();
