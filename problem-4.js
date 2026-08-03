
//problem-4
/**
 * 
 * @param {Function Name Must be: topRatedRestaurant

FoodNow is a food delivery app that wants to highlight the highest-rated restaurant in a customer's area. The restaurant data is stored as an array of objects, where each object contains a restaurant's name and rating.

Your task is to write a function that finds the restaurant with the highest rating and returns its name in uppercase.

Input

An array of objects, for example:

[
  { name: "Chillox", rating: 4.5 },
  { name: "Sultan's Dine", rating: 4.8 }
]
Output

Return the name of the highest-rated restaurant in uppercase using the toUpperCase() method.

Challenge

Return "Invalid" if:

The input is not an array, or
The array is empty.

Tip: Loop through the array and keep track of the restaurant with the highest rating as you iterate.

Starter Code
function topRatedRestaurant(restaurants) {
    // Write your code here
}
Sample Test Cases
Input	Output
[{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]	SULTAN'S DINE
[{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]	PIZZA HUT
[]	"Invalid"
"restaurants"	"Invalid"} restaurants 
 * @returns 
 */

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
             highestRatingRestaurant = ratingARestaurant;
            nameOfHighestRatingRestaurant = nameARestaurant;


        }


    }

    return nameOfHighestRatingRestaurant.toUpperCase();

}


// const MyRestaurent = "restaurants"
// const result = topRatedRestaurant(MyRestaurent);
console.log(topRatedRestaurant([{"name":"Star Kabab","rating":4.1},{"name":"Nanna Biryani","rating":4.9},{"name":"Kacchi Bhai","rating":4.4}])); 
