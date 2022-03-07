"use strict";

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

// const dolphinsScores = [44,23,71];
// const koalasScores = [85,54,41];

// function avgScore1(scores) {

//     const sum = scores.reduce((t, c) => t + c);

//     return Math.round(sum / scores.length);
// }

// // OR

// const avgScore2 = (scores) => scores.reduce((t, c, i) => {
//     t += c;
//     if (i === scores.length-1) {
//         return Math.round(t/scores.length);
//     } else {
//         return t;
//     }
// });

// console.log(avgScore2(dolphinsScores));

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function!
So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const bills = [125,555,44];

// function calcTip(bills) {
//     bills.map((i) => {
//         if (i >= 50 && i <= 300) {
//             tips.push(i*0.15);
//             totals.push(i*1.15);
//         } else {
//             tips.push(i*0.2);
//             totals.push(i*1.2);
//         }
//     });
// }

// let tips = [];
// let totals = [];

// // OR

// function calcTip2(bill) {
//     return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
// }

// const tips2 = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];

/*

CHALLENGE #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const calcBMI = (weight, height) => weight / (height ** 2);

// const mark = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height: 1.69,
//     bmi: function() {return calcBMI(this.weight, this.height)}
// }

// const john = {
//     fullName: "John Smith",
//     weight: 92,
//     height: 1.95,
//     bmi: function() {return calcBMI(this.weight, this.height)}
// }

// console.log(`${mark.bmi() > john.bmi() ? mark.fullName : john.fullName} has the biggest BMI!`);

/*

CHALLENGE #4

Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values
(bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
This function calculates the average of all numbers in the given array.
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  

GOOD LUCK 😀
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = []
// const totals = []

// const calcTip = (bills) => {

//     for(let i = 0; i < bills.length; i++) {

//         bills[i] >= 50 && bills[i] <= 300 ? tips.push(bills[i] * 0.15) : tips.push(bills[i] * 0.2);
//         totals.push(bills[i] + tips[i]);
//     }
// }

// const arr = [5, 5, 5, 5];
// let total = 0;

// function calcAvg(arr) {

//     for(let i = 0; i < arr.length; i++) {

//         total += arr[i];
//     }

//     return total / arr.length;
// }

// // OR

// const calcAverage = (arr) => (arr.reduce((t, c) => t + c)) / arr.length;

// console.log(calcAvg(arr));
