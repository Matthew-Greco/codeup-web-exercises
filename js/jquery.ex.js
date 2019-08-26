// $(document).ready(function () {
//     alert('ALL DONE!');
// });
//
// $(document).ready(function () {
//     $('.Codeup').css('border', '1px solid black');
//     $(' li').css('font-size', '20px');
//     $('h1, p, li').css('background', 'grey');
//     $('*').css('color', 'Navy');
//     var contents = $('h1').html();
//     alert(contents);
// });

$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', 'red');
    });
    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        });
})