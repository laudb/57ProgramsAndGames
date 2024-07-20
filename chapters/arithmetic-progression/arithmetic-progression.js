// Arithmetic Progression

const readline = require('readline');
const promisify = require('util');
let a = d = t = i = k = l= 0.0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let main = () => {
    userFunction();
}

let userFunction = () => {
    rl.question("First term ", function( first ) {

        rl.question("common difference ", function( difference ) {
        
            rl.question("number of terms ", function ( terms ) {

                rl.question("for table type 1, if not type 0: ", function ( table ) {

                    if (table === 0) {
                        rl.close()
                    }
                    arithmetic_progression(first, difference, terms);

                });
            });
        });
    });
}

let arithmetic_progression = (a,d,t) => {
    console.log('ARITHMETIC PROGRESSION');
    console.log('TERM NUMBER','----------','TERM VALUE');

    a = (+a);
    d = (+d);
    t = (+t);
    j = 0;

    for (let i = 0; i < t; i++) {
        k = i + 1;
        l = a + (i * d )
        j += l

        console.log(k,'                   ', l);
    }
    console.log('Sum = ', j); 

    rl.question("Type 1 to continue, 0 to stop: ", function (option) {
        if ( option == 0 ) {
            console.log('END');
            rl.close();
        } else {
            userFunction()
        }
    });
}

main();