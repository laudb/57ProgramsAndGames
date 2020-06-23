// Arithmetic Progression

const readline = require('readline');
const promisify = require('util');
let a = d = t = i = j = k = l= 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("First term ", function( first ) {

    rl.question("common difference ", function( difference ) {
    
        rl.question("number of terms ", function ( terms ) {

            rl.question("for table type 1, if not type 0 ", function ( table ) {

                if (table === 0) {
                    rl.close()
                }
                
                a = (+first);
                d = (+difference);
                t = (+terms);
                console.log('ARITHMETIC PROGRESSION')
                console.log('TERM NUMBER','----------','TERM VALUE')

                for (let i = 0; i < t; i++) {
                    k = i + 1;
                    l = a + (i * d )
                    j += l

                    console.log(k,'                   ', l)
                }
                console.log('Sum = ', j);


            })
        })
    })

})