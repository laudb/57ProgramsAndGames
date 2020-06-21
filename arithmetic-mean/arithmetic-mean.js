// Arithmetic Mean

const readline = require('readline');
// assign 0 to x and n
let x = n = mean = 0;

// prompt + input sample
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    rl.question('Enter Sample ', function(sample) { // take user input
        if (sample === 'end') {
            rl.close();
        } 
        else computeInput (sample); // if input is not 'end', take input and compute.
    });
}

function computeInput (sample) {
    n += 1;
    x += (+sample); // new sample inpute + current sum
    mean = x / n; 

    console.log( `N=${n} SAMPLE=${x} CURRENT_MEAN=${mean}` ); // output current mean
    getInput(); // prompt user for new input
}

getInput();

rl.on('close', () => console.log('End'));
