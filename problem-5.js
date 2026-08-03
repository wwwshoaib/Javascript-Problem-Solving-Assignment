
//problem-5
/**
 * Problem 5 — Debugging Challenge: API Response Time Monitor

Function Name Must be: averageResponseTime

DevWatch is a backend monitoring dashboard that logs the response times (in milliseconds) of a service's most recent API requests in an array. A junior developer wrote a function to calculate the average response time so the team can monitor whether the API is becoming slower. However, the function contains several bugs and produces incorrect results.

Your task is to find and fix all the bugs so that the function produces the correct output for all sample test cases. Do not change the function name.

Input

A number array, where each element represents the response time (in milliseconds) of an API request.

Example:

[120, 200, 150, 130]
Output

Return a number representing the average response time of all logged requests.

Challenge

After fixing the bugs, the function must also handle the following cases:

Return "Invalid" if the input is not an array.
Return "Invalid" if the array is empty.
Return "Invalid" if any element in the array is not a number.
Buggy Code
/* Find and fix all the bugs in this function — do not change its name */

function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
   
   if (times.length <= 0) {
        return "Invalid";
    }

    for (let i = 0; i < times.length; i++) {
      const eachElement = times[i];
      if (!(typeof eachElement === 'number')) {
        return "Invalid"
      }
    }
   
 let total = 0;
    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }
   
  return total / times.length;
}



const  numbers = [120, "200", 150]
const result = averageResponseTime(numbers);
console.log(result);
