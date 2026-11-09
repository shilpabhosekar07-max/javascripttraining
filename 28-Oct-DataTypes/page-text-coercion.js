let consultationFeeText = "500"; // read from the page
let labFeeText = "250"; // read from the page
let discount = 50;

/*
## Exercise 7: Page Text Is Always a String

**Scenario:** When a Playwright test reads text from a web page, it always gets a string, even when the text looks like a number. Practise handling that.

Create a file called `page-text-coercion.js`.

**Requirements:**
1. Start with these values:
   ```javascript
   let consultationFeeText = "500"; // read from the page
   let labFeeText = "250";          // read from the page
   let discount = 50;               // a real number in your test
   ```
2. Write your prediction as a comment, then print `consultationFeeText + labFeeText`.
3. Fix it with `Number()` so the total is `750`, and print it.
4. Write predictions, then print `consultationFeeText + discount` and `consultationFeeText - discount`.
5. Given `let displayedTotal = "750";` and `let expectedTotal = 750;`, print the result of `==`, `===`, and `Number(displayedTotal) === expectedTotal`. Write a comment saying which one a test should use.
6. Given `let waitTimeText = "about 20 mins";`, convert it with `Number()`, print the result, and use `Number.isNaN()` in an `if` to print `"Wait time is not a valid number"`.
7. Store `0.1 + 0.2` in a variable called `copay`. Print it, print whether it `=== 0.3`, and print whether `copay.toFixed(2) === "0.30"`.

**Example Output:**
```
--- Adding two page values ---
consultationFeeText + labFeeText → 500250
Fixed total → 750

--- Mixing a string and a number ---
consultationFeeText + discount → 50050
consultationFeeText - discount → 450

--- Comparing page text to a number ---
displayedTotal == expectedTotal → true
displayedTotal === expectedTotal → false
Number(displayedTotal) === expectedTotal → true

--- Text that isn't a number ---
Number(waitTimeText) → NaN
Wait time is not a valid number

--- Decimals ---
0.1 + 0.2 → 0.30000000000000004
copay === 0.3 → false
copay.toFixed(2) === "0.30" → true
```

**Hints:**
- `+` joins text if either side is a string. `-`, `*`, and `/` always try to convert to numbers
- `.toFixed(2)` returns a string, which is why step 7 compares it with `"0.30"`
*/
