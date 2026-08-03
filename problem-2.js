//problem-2
/**
 * 
 * @param {Function Name Must be: isElevatorSafe

A smart elevator in an apartment building has a maximum safe weight limit of 400 kg. Before the elevator doors close, its sensors read the weight of every person inside as an array. Your task is to create a function that determines whether it is safe for the elevator to operate.

Input

A number array, where each element represents the weight (in kilograms) of a person inside the elevator.

Example:

[60, 75, 50]
Output

Return a boolean:

true if the total weight is 400 kg or less (safe to operate).
false if the total weight is more than 400 kg (overloaded).
Challenge

Return "Invalid" if the input is not an array.

Tip: Loop through the array, add up all the weights, and compare the total with the 400 kg limit.

Starter Code
function isElevatorSafe(weights) {
  // Write your code here
}
Sample Test Cases
Input	Output
[60, 75, 50]	true
[90, 100, 95, 120]	false
[400]	true
"60,75,50"	"Invalid"} weights 
 * @returns 
 */
function isElevatorSafe(weights) {
    if (!(Array.isArray(weights))) {
        return "Invalid";
    }



    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        //weight can not be a negative number, so negative value of weight is Invalid
        if (weights[i] < 0) {
            return "Invalid";
        }
        sum += weights[i];
    }

    if (sum > 400) {
        return false;
    }

    else {
        return true;
    }

}


const weightsArray = "60,75,50";
const result = isElevatorSafe(weightsArray);
console.log(result);
