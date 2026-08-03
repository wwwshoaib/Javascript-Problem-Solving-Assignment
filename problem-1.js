
//problem-1:
/**
 * 
 *  Function Name Must be: matchWinner  
 * @param {2026 FIFA World Cup Match Winner

The Group Stage of the 2026 FIFA World Cup is underway. After each match, FIFA's Automated Result System receives the number of goals scored by both teams and publishes the match result.

Your task is to create a function that determines the match result based on the goals scored by Team A and Team B.

Input

The function will take two parameters:

teamAGoals → Number of goals scored by Team A
teamBGoals → Number of goals scored by Team B
Rules
Return "Team A Won" if Team A scores more goals than Team B.
Return "Team B Won" if Team B scores more goals than Team A.
Return "Draw" if both teams score the same number of goals.
Challenge

Return "Invalid" if either input is not a number.

Starter Code
function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here...
}
Sample Test Cases
Input	Output
2, 1	Team A Won
1, 3	Team B Won
2, 2	Draw
"3", 2	Invalid} teamAGoals 
 * @param {*} teamBGoals 
 * @returns 
 */
function matchWinner(teamAGoals, teamBGoals) {

    if (!(typeof teamAGoals === 'number' && typeof teamBGoals === 'number'
        && teamAGoals >= 0 && teamBGoals >= 0)) {
        return "Invalid";
    }

    if (teamAGoals > teamBGoals) {
        return "Team A Won"
    }

    else if (teamBGoals > teamAGoals) {

        return "Team B Won"

    }

    else {
        return "Draw";
    }

}



const result = matchWinner(0, 0);
console.log(result);