"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//
if (confirm('Would you like to enter a number')) {
    var data = prompt('Please enter your random number!');
    if (data % 2 === 0) {
        alert('Your number is "EVEN"!');
    } else {
        alert('Your number is "ODD"!');
    }

    alert('Your number plus 100 is ' + (parseInt(data) + 100));

    if (data >= 0) {
        alert('Your number is "POSITIVE"!');
    }

    if (data <= 0) {
        alert('Your number is "NEGATIVE"!');
    } else {
        alert('You did not enter a number!');
    }
}
console.log(data);

/* ########################################################################## */
//
var willEnterNum = confirm('Will you enter a number?');
if (willEnterNum) {
    var userNum = prompt('Please enter a number.');
}
if (!isNaN(userNum) && userNum !== true && userNum !== false) {
    var evenOddMessage = (userNum % 2 === 0) ? 'number is even' : 'number is odd';
    alert(evenOddMessage);
}
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
var color = prompt('Pick a color, any color!');

//
function analyzeColor(input) {
    if (input === 'blue') {
        return input + ' is the color of the sky';
    } else if (input === 'red') {
        return input + ' is the color of strawberries.';
    } else if (input === 'cyan') {
        return 'I know nothing about ' + input + '!';
    } else {
        return input + ' is not a valid color';
    }

    return (color);
}


console.log(analyzeColor(color));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//         /**
//          * TODO:
//          * Pass the `randomColor` variable to your function and console.log the results.
//          * You should see a different message everytime you refresh the page
//          */
//
function rainbowColor(randcolor) {
    if (randcolor === randomColor) {
        alert('Your random color is ' + randomColor);
    }
    return (randomColor);

}

console.log(rainbowColor(randomColor));
//
//         /**
//          * TODO:
//          * Refactor your above function to use a switch-case statement
//          */
switch (colors) {
    case (randomColor):
        alert('Your random color is ' + randomColor);
        break;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
var userColors = prompt('Give me a color');
var logs = analyzeColor(userColors);
alert(logs);

/**
 //  * TODO:
 //  * Suppose there's a promotion in Walmart, each customer is given a randomly
 //  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 //  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 //  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 //  * all for free!.
 //  *
 //  * Write a function named `calculateTotal` that accepts a lucky number and total
 //  * amount, and returns the discounted price.
 //  *
 //  * Example:
 //  * calculateTotal(0, 100) // returns 100
 //  * calculateTotal(4, 100) // returns 50
 //  * calculateTotal(5, 100) // returns 0
 //  *
 //  * Test your function by passing it various values and checking for the expected
 //  * return value.
 //  */function calculateTotal(luckyNumber, total) {
    var discountedPrice;

    switch (luckyNumber) {
        case 0:
            discountedPrice = total;
            break;
        case 1:
            discountedPrice = total * (0.90);
            break;
        case 2:
            discountedPrice = total * (0.75);
            break;
        case 3:
            discountedPrice = total * (0.65);
            break;
        case 4:
            discountedPrice = total * (0.50);
            break;
        case 5:
            discountedPrice = 0;
            break;
        default:
            discountedPrice = 'Invalid number.';
    }

    return discountedPrice;
}

//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
function genRnd() {
    return Math.floor(Math.random() * 6);
}


var luckyNumber = genRnd();


console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 100));


luckyNumber = genRnd();

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 200));