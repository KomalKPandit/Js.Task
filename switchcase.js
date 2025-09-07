// Write a JavaScript program that takes a number from 1 to 12 and prints the corresponding month using a switch statement.

function month(m){
    switch (m){
         case 1:
            console.log("Jan");
            break;
         case 2:
            console.log("feb");
            break;

         case 3:
            console.log("mar");
            break;

         case 4:
            console.log("Apr");
            break;

         case 5:
            console.log("May");
            break;

         case 6:
            console.log("Jun");
            break;

         case 7:
            console.log("Jul");
            break;

         case 8:
            console.log("Aug");
            break;

         case 9:
            console.log("Sep");
            break;

         case 10:
            console.log("oct");
            break;

         case 11:
            console.log("Nov");
            break;
            
         case 12:
            console.log("Dec");
            break;
         
            
    }
}
month(9);


// Write a JavaScript program to perform basic arithmetic operations (addition, subtraction, multiplication, division) based on the user's choice using a switch  statement. 
function operations (p){
   let a=4;
   let b=4;
 switch(p){

      case 1:
            console.log("a+b");
            break;

      case 2:
            console.log("a-b");
            break;

      case 3:
            console.log("a*b");
            break;

      case 4:
            console.log("a/b");
            break;
 }
}
operations(1)



// Write a JavaScript program that takes a grade (A, B, C, D, F) as input and prints a description using a switch statement:
                                                      // A: Excellent
                                                      // B: Good
                                                      // C: Average
                                                      // D: Poor
                                                      // F: Fail
      function grade(g) {
      switch(g){
         case 'A':
            console.log('Excellent');
            break;
         case 'B':
            console.log('Good');
            break;
         case 'C':
            console.log(' Average' );
            break;s
         case 'D':
            console.log('Poor');
            break;
         case 'F':
            console.log('Fail');
            break;
         
      
      }      
   }              
   grade('B');                  