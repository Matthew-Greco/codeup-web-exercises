

// -------------------------exercise 6---------------------------
var userNumb = prompt('Pick an ODD number between 1-50 that we will skip.');

for (var  i = 1; i <= 50 ; i += 1) {

    if (i !== parseInt(userNumb)) {
        console.log('Here is an Odd number ' + i);
    } else {
        console.log('Yikes, we are skipping: ' + userNumb);
    }
    if (i % 2 === 0) {
        continue;
    }
}
