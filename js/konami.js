"use strict";
//  Up, Up, Down, Down, Left, Right, Left, Right, B, A
var konamiArr = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];
var doomArr = [
    "i",
    "d",
    "d",
    "q",
    "d"
];
var pushArr = [];
$(document).keyup(function (event) {
    var audio = new Audio("sounds/fail-trombone-01.mp3");
    var konamid = true;
    pushArr.push(event.key);
    if (pushArr.length > 10) {
        pushArr.shift();
    }
    for (var i = 0; i < konamiArr.length; i++) {
        if (konamiArr[i] !== pushArr[i]) {
            return konamid = false;
        }
    }
    if (konamid && pushArr.length === 10) {
        audio.play();
        $('body').css({
            'background-image': 'url("https://media.giphy.com/media/3ohzdYt5HYinIx13ji/giphy.gif")',
            'background-size': 'cover'


        });
        var r = '<input type="button" value="Try Again?"/>';
        $("h1").append(r);
        $("input").click(function () {

            location.reload(true);

        });


    }


});
var pushArr2 = [];
$(document).keyup(function (event) {
    var audio = new Audio("sounds/e11_full.mp3");
    var doomId = true;
    pushArr2.push(event.key);
    if (pushArr2.length > 10) {
        pushArr2.shift();
    }
    for (var i = 0; i < doomArr.length; i++) {
        if (doomArr[i] !== pushArr2[i]) {
            return doomId = false;
        }
    }
    if (doomId && pushArr2.length === 5) {
        audio.play();
        $('body').css({
            'background-image': 'url("https://media.giphy.com/media/hKyWAN3gQyCsM/giphy.gif")',
            'background-size': 'cover'

        });
        $('h1').css('display', 'none');


    }
});




