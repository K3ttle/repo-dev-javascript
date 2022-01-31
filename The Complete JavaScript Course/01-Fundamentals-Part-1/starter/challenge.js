// const markWeight = 78
// const markHeight = 1.69
// const johnWeight = 92
// const johnHeight = 1.92

// const calculateBMI = (weight, height) => Math.round(weight / height ** 2)

// const markBMI = calculateBMI(markWeight, markHeight)
// const johnBMI = calculateBMI(johnWeight, johnHeight)

// if (markBMI > johnBMI) {

//     console.log(`Mark's BMI is ${markBMI - johnBMI} points higher than John's!`)
// }
// else {

//     console.log(`Johns's BMI is ${johnBMI - markBMI} points higher than Mark's!`)
// }

// const dolphinsScores = [96, 108, 89]
// const koalasScores = [88, 91, 110]

// function calculateAverage(scores) {

//     const arrayLength = scores.length

//     const sum = scores.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, 0);

//     return sum / arrayLength
// }

// const dolphinsAverage = calculateAverage(dolphinsScores)
// const koalasAverage = calculateAverage(koalasScores)

// if (dolphinsAverage > koalasAverage) {
//     console.log("Dolphins win!")
// } else if (dolphinsAverage == koalasAverage) {
//     console.log("It was a tie!")
// } else if (koalasAverage > dolphinsAverage) {
//     console.log("Koalas win!")
// }

const bill = 275

function CalculateBill(bill) {

    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

    return tip;
}

const tip = CalculateBill(bill);

console.log(`The bill is ${bill}, the tip is ${tip}, the total is ${bill + tip}`);