const calculate = (function() {

    const PI = ""
    d1= ""
    d2= ""

    function momentOfInertia(d1, d2) {
      return PI*(((d2**4) - (d1**4))/64)
    }

    function polarMomentOfInertia(d1,d2) {
      return PI*(((d2**2) - (d1**2))/4)
    }

    function area(d1,d2) {
      return PI*(((d2**4) - (d1**4))/32)
    }


    return {
      "I": momentOfInertia(d1,d2),
      "J": polarMomentOfInertia(d1,d2),
      "A": area(d1,d2)
    }
 
  
})
