// Arithmetic Mean

const readline = require('readline');
// assign 0 to x and n
let x , n = 0;

// prompt + input sample
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('This program computes the arithmetic mean ')

rl.question('Enter sample ', (sample) => {
    
    if (sample === 'end') {
        console.log('Ending')
        rl.close();
    }

    n = n + 1
    x = x + sample

})

rl.on('close', () => console.log('End'))

// calculate sample nuber + current mean

// output current mean

// if input is not end, repeat step 2

