// set constants
// request for inside diameter
// request for outer diameter
// return results (moment of inertia, polar moment of inertia, area)
// request to Continue or Stop

    const readline = require('readline');
    const PI = Math.PI;
    let I, J, A = 0;
    
    function main () {

      const ri = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      console.log('This program computes various parameters associated with an annular section');

      ri.question('Enter the inside diameter (D1) in inches: ', function (d1) {

        ri.question('Enter the outside diameter (D2) in inches: ', function (d2) {
          
          I = momentOfInertia(d1, d2);
          J = polarMomentOfInertia(d1, d2);
          A = area(d1, d2);
          
          console.log(`Moment of Inertia = ${I} inches^3 \n Polar Moment of Inertia = ${J} inches^3 \n Area = ${A} inches^2`);

          ri.close();

        });
      });

      ri.on('close', function() {
        console.log('END');
      });

    }
  
    // Equations

    function momentOfInertia(d1, d2) {
      // I = (PI* ( ( (d2**4)-(d1**4) ) /64) );
      let a = (d1**4);
      let b = (d2**4); 
      let c = ( (b -a)/64 );
      let d = PI*c;
      return d.toFixed(3); 
    }

    function polarMomentOfInertia(d1,d2) {
    // J =  PI* ( ( (d2**2) - (d1**2) ) /4 ) )
      let a = (d1**2);
      let b = (d2**2);
      let c = ( (b - a) / 4);
      let d = PI*c;
      return d.toFixed(3);
    }

    function area(d1,d2) {
    //  A = PI*(((d2**4) - (d1**4))/32)  )
      let a = (d1**4);
      let b = (d2**4);
      let c = ( (b - a) / 32 );
      let d = PI*c;
      return d.toFixed(3);
    }



main();