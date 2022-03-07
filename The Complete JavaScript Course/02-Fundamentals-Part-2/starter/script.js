// "use strict";

// let testBool = false;
// const testVar = true;

// if (testVar) {testBool = true};

// console.log(testBool);

// let myArray = [1,2,3];
// myArray.push(4);
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// if (myArray.includes(2)) {
//     console.log(true)
// }

const Ryan = {
    Name:   "Ryan",
    Age:    27,
    Sexy:   true,

    Summary: function() {
        this.theSummary = `My name is ${this.Name} and ${this.Sexy === true ? "is" : "is not"} sexy!`;
        return this.theSummary;
    }
}

console.log(Ryan.Summary());