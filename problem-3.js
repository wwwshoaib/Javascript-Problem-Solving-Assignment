
//problem-3
/**
 * 
 * @param {Function Name Must be: calculateAiCost

PromptPal, an AI writing assistant app, provides 500 free tokens to every user each day. If a user exceeds this limit, the app charges for the extra usage. Your task is to create a function that automatically calculates the daily cost.

Billing Rules
The first 500 tokens are free.
After that, every additional 100 tokens costs 5 Taka.
Input

A single number, tokensUsed, representing the total number of tokens used during the day.

Output

Return the total cost in Taka as a number.

Challenge

Return "Invalid" if:

tokensUsed is not a number, or
tokensUsed is negative.

Tip: First subtract the free 500 tokens. Then divide the remaining tokens by 100, use Math.floor() to count only complete 100-token blocks, and multiply the result by 5.

Starter Code
function calculateAiCost(tokensUsed) {
  // Write your code here.
}
Sample Test Cases
Input	Output
300	0
500	0
650	5
1000	25
-10	"Invalid"
"500"	"Invalid"} tokensUsed 
 * @returns 
 */

function calculateAiCost(tokensUsed) {
 if(!(typeof  tokensUsed === 'number' && tokensUsed >= 0 )) {
    return "Invalid";
 }
 if (tokensUsed <= 500) {
    const cost = tokensUsed * 0;
    return cost;
 }

 else {
    const tokenUsedMoreThan500 = tokensUsed - 500;
    const cost = Math.floor(tokenUsedMoreThan500/100)*5;
    return cost;
 }
}


const token = 0;
const result = calculateAiCost(token);
console.log(result);

