"use strict";
var $audio = $('audio');
var audio = $audio[0];
var $img = $('img');

$img.hover(function () {
    audio.play();
}, function () {
    audio.pause();
});
$('h1').css('text-align', 'center');
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
        $('body').css({
            'background-image': 'url("https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif")',
            'background-repeat': 'no-repeat',
            'background-position': 'center 0%'
        });
        $('h1').css('display', 'none');
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




