"use strict";
(function() {

    var input = prompt('pick a number!');


// function showMultiplicationTable() {
    for (var a = 1; a <= 10; a++) {
        console.log(input + '*' + a + '=' + (input * a));
    }
// }return showMultiplicationTable(input);
// exercise 2------------------------------------------^

// ----------------------------------------------------------
//
//exercise 3--------------------------------------\/


    for (var i = 0; i <= 10; i += 1) {

        var randonmNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
        var message;

        if (randonmNumber % 2 === 0) {
            message = randonmNumber + ' is even.';
        } else {
            message = randonmNumber + ' is odd.';
        }
        console.log(message);

    }
// ---------------------------------------------------------------

    //
    // // exercise 4--------------------------------------------
    //
    //  for (var i = 1; i < 10; i += 1) {
    //         var output = '';
    //         for (var row = 1; row <= i; row += 1) {
    //             output +=  i;
    //         }
    //         console.log(output);
    //  }
    //
    //  // -----------------------------exercise 5---------------------
    //
    // for (var x = 100; x > 0; x = x - 5) {
    //     console.log(x);
    // }


    // -------------------------------------exercise 6---------------
    while (true) {

        var userNum = prompt('Enter an ODD number between 1-50.');

        if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
            break;
        }
    }
    console.log(userNum);



})();
