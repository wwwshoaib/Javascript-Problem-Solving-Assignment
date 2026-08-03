
//problem-1:
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



//problem-2
function isElevatorSafe(weights) {
    if (!(Array.isArray(weights))) {
        return "Invalid";
    }



    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        //weight can not be negative, so negative value of weight is Invalid
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



//problem-3

function calculateAiCost(tokensUsed) {
 if(!(typeof  tokensUsed === 'number' && tokensUsed > 0 )) {
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


//problem-4

function topRatedRestaurant(restaurants) {
    if (!(Array.isArray(restaurants) === true && restaurants.length > 0)) {
        return "Invalid";
    }

    let highestRatingRestaurant = restaurants[0].rating;
    let nameOfHighestRatingRestaurant = restaurants[0].name;

    for (let i = 0; i < restaurants.length; i++) {
        const ratingARestaurant = restaurants[i].rating;
        const nameARestaurant = restaurants[i].name;

        if (ratingARestaurant > highestRatingRestaurant) {
            nameOfHighestRatingRestaurant = nameARestaurant;

        }

    }

    return nameOfHighestRatingRestaurant.toUpperCase();

}  



//problem-5

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













