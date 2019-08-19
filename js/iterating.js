"use strict";
(function(){
    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Mikey', 'Mary', 'Larry', 'Ida'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    //
    // var mikey = 'Mikey';
    // var mary = 'Mary';
    // var larry = 'Larry';
    // var ida = 'Ida';
    // var names = ['Mikey', 'Mary', 'Larry', 'Ida'];
    // for (var i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // }
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(
        function (name) {
            console.log(name)

        });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
      var one = 1;
      var two = 2;
      var three = 3;
      var four = 4;
      var five = 5;
      var digits = [one, two, three, four, five];
      digits.forEach(function (digits) {
          var greeting = 'Hello number ' + digits + '; hope you are having an awesome day!';
          console.log(greeting);
      });

    console.log(digits[0]);
    console.log(digits[1]);
    console.log(digits[digits.length -1]);

    function  first(arr) {
        return arr[0];
    }

    function second(arr) {
        return arr[1];
    }

    function last(arr) {
        return arr[arr.length -1];
    }
    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));




})();
