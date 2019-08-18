// console.log('hello!');
"use strict";
(function(){


    var i = 2;

    while (i <= 32768) {
        console.log(i + ' multiplied by 2 is ' + (i *= 2) + '.');

    }
// -------------------------------------------------------------
    var res = 1;

    while (res < 65536) {
        res = res * 2;
        console.log('res ', res);
    }

// -------------------------------------------------------------
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
    var totalPerHour = Math.floor(Math.random() * 5) + 1;

    do {
        console.log('Start of the day and i have ' + allCones + ' left.');

        var conesToSell = Math.floor(Math.random() * 5) + 1;

        if (totalPerHour <= allCones) {
            console.log('I sold ' + totalPerHour);
            allCones = allCones - totalPerHour;
        } else if (allCones === 0) {
            console.log('I can go home');
        } else {
            console.log('I don\'t have enough cones to sell.')

        }
    } while (allCones !== 0) ;

// -------------------------------------------------------------



//

// var totalDaily = totalPerHour / allCones;
// console.log('You have to sell ' + allCones + ' cones before you leave. Which means ' + totalPerHour + ' cones per customer.')
//     do {
//         console.log(totalPerHour);
//         totalPerHour++;
//         allCones = allCones - totalPerHour;
//     }
//     while (totalPerHour < allCones);

// ------------------------------------------------------------

})();
