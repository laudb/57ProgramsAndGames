// Arithmetic Progression

const readline = require('readline');
const promisify = require('util');
// const f, d, t, option = 0;
const a, d, n, c = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("First term ", function( first ) {
    rl.question("common difference", function( difference ) {
        rl.question("number of terms", function ( terms ) {
            r1.question("for table type 1, if not type 0", function ( table ) {

                if (table === 0) {
                    rl.close()
                }
                
                a = first;
                d += difference;
                t += terms;

            })
        })
    })

})