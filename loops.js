// Tasks using loops
//  Write a JavaScript program to print the first 10 natural numbers using a while loop
  function natural(){
    let i=1;
  
  while(i<=10){
    console.log(i);
    i++
  }
}
// natural();

//  Write a JavaScript program to calculate the sum of all numbers from 1 to 100 using a for loop.
   function sum(){
    let sum=0;
   for(let i=1; i<=100; i++){
     sum=sum+i;
   }
  console.log("sum of 1 to 100: + sum");
   }
//    sum();

// Write a JavaScript program to print all even numbers between 1 and 50 using a for loop.
   function even(){
    for(let i=1; i<=50; i++){
        if(i%2==0){
            console.log(i);
        }
    }
   }
//    even();

//  write a JavaScript program to find the factorial of a number entered by the user using a while loop.
    function factorial(){
      let i=4;
      let res=1;
      while(i!=0){
       res= i*res;
       i--;
     }
         console.log(res)
    }
    factorial();

//  Write a JavaScript program to reverse a number using a while loop.

 function reverse(){
  let i=123;
  let rev=0;
  while(i){
    let dig=i%10;
    rev=rev*10+dig;
    i= Math.floor (i/10);
    console.log(rev)
    
  }
 }
//  reverse();

// Write a JavaScript program to print the Fibonacci series up to a certain number entered by the user using a for loop.
    function Fibonacci(n){
        let a=0;
        let b=1;
        console.log(a);
        console.log(b);

        for(let i=2; i<=n; i++){
            let c=a+b;
            console.log(c);
            a = b;  
            b = c;

        }
    }
    // Fibonacci(5);

    //   Write a JavaScript program to check whether a number is prime or not using a for loop.

       function isPrime(a) {
      while (a <= 1) {
        return true;
    }
     let isPrime = true;
          for (let i = 2; i <= a; i++) {
          if (a % i === 0) {
            isPrime = false; 
        }
    }
    if(isPrime){
      console.log(a+ "is prime number");
    }
    else{
      console.log(a+ "is not prime number");
    }
  }
    //  isPrime(4); 


    // Write a JavaScript program to count the number of digits in a given number using a while loop.

    function digit(i){
      let count=0;

      while(i>0 ){
         i = Math.floor(i / 10);
        count ++;

        console.log("Number of digits: " + count);
      }
    }
     digit(123);

    
    //Write a JavaScript program that prints all prime numbers between 1 and 100 using nested for loops.
      
      function nested(){
       
         for(let i=2; i<=100; i++){
             let isPrime=true;
           for(let j=2; j<i; j++){
             if(i%j==0){
               isPrime=false;
               break;
            }
           }
            if (isPrime){
            console.log(i);
           }
         }

      }
      nested();

