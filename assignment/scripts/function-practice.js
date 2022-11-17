console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName() {
  return 'Hello Jo :D';
}
// Remember to call the function to test
console.log('Hello,', helloName() );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumber')
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log ('this is adding 1 and 2:', addNumbers(1 , 2) );

// 4. Function to multiply three numbers & return the result
function multiplyThree(x , y , z ){
  console.log('in multiplyThree')
  return x * y * z;
}
console.log('1 x 2 x 3 =', multiplyThree( 1 , 2 , 3) );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    console.log('number is greater than 0')
    return true;
  }// end if isPositive
  else{
    console.log('number is less than zero')
    return false;
  }
}//end isPositive
console.log('1 is greater than zero:', isPositive(1) );

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( '3 - should say true', isPositive(3) );
console.log( '0 - should say false', isPositive(0) );
console.log( '-3 - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let item = [];
function returnLast(){
  console.log( 'in returnLast');
  return item[item.length - 1]  

}//end returnLast
console.log('return last item of whatever I push:', returnLast(item.push('1','2','3') ) );


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let array = [1,2,3]
function find( value , array ){
  for(i=0; i<array.length; i++){
    if ( value === array[i]){
      console.log('this value is in the array:', value)
      return true;
    }//end if
  }//end for
  console.log('this value is not in the array:', value)
  return false;
}//end function
console.log(find(3, array) )
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter , string){ 
  console.log('in isFirstLetter')
  return string.startsWith(letter)
  
}//end function
console.log(isFirstLetter( 'a', 'apple') );


console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll(...numbers) {
  let sum = 0
  for ( i=0; i<numbers.length ; i++){
  sum += numbers[i];
  }//end for
  // TODO: loop to add items
  return sum;
}//end function
console.log('total value:', sumAll(1,2,7) )


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function sumThis(...ary){
  console.log('in sumThis')
  let overZero = ary.filter(checkZero);
  function checkZero(ary){
    return ary > 0
  }//end function checkZero
 return overZero
}//end function sumThis
console.log('put these positive arguments in the array:', sumThis(-2,6,32,-8) ) ;


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it
