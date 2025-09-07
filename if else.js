// Write a JavaScript program to find the largest of three numbers entered by the user using if-else statements.
function largest(x,y,z){
    if(x>y && x>z){
        console.log(x + ":x is the largest number");
    }
    
    else if (y > x && y > z) {
         console.log(y + ":y is the largest number");
    }
    else{
         console.log(z + ":z is the largest number");
    }
}
largest(10,20,30);

//  Write a JavaScript program to check whether a year is a leap year or not using if-else.
function leapyear(n){
    if(n % 100 == 0){
        if(n % 400 == 0){
            console.log(n+ "this is leap year");
        }
        else{
           console.log(n+ "this is not leap year");
        }
    }
    else if(n % 4 == 0){
         console.log(n+ "this is leap year");
    }
    else{
         console.log(n+ "this is not leap year");
    }

    
}
leapyear(2024);

//Write a JavaScript program to check whether a character entered by the user is a vowel or a consonant using if-else.
  function character(char){
    if(char == 'a' || char == 'e' ||char == 'i' ||char == 'o'||char == 'u'|| char == 'A' ||char == 'E' || char == 'I' || char == 'O'||char == 'U' ){
        console.log(char + " this is vowel");
    }
    else{
        console.log(char+ " this is consonant");
    }
  }
  character('p')


 // Write a JavaScript program to check whether a number entered by the user is positive, negative, or zero using if-else.

   function number(n){
     if( n>0){
        console.log(n+ " number is positive");
     }
     else if(n<0){
        console.log(n+"number is negative");
     }
     else{
        console.log( "number is zero");
     }
   }
   number(2);


//  Write a JavaScript program to find the grade of a student based on marks entered by the user. Use the following conditions:
//                             Marks > 90: Grade A
//                             Marks > 75: Grade B                         
//                             Marks > 50: Grade C
//                             Marks <=50: Grade D
  
function student(marks){
    if(marks>90){
        console.log("Grade A");
    }
    else if(marks > 75){
        console.log("Grade B ");
    }
    else if(marks > 50){
        console.log("Grade C");
    }
    else{
        console.log("Grade D")
    }
}
student(90);



//  Write a JavaScript program to check whether a given string is a palindrome using if-else statements.

function palindrome(name){
  let org=name;
  let rev=name.split("").reverse("").join("");
  if(org==rev){
    console.log("palindrome");
  }
  else{
    console.log(" not palindrome");
  }
}
palindrome("java");


// Write a JavaScript program to check if a number entered by the user is divisible by both 3 and 7 using if-else.

function divisible(a){
    if(a%3==0 && a%7==0){
        console.log("divisible by both 3 & 7");
    }
    else{
        console.log(" not divisible by both 3 & 7");
    }
    }
    divisible(21);