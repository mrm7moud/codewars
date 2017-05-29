# codewars
challenge: 

Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array.
------------------------------------------------------------------------------------------------------------------------------
Solutions:

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

or

function sumTwoSmallestNumbers(numbers) {  
  var [ a, b ] = numbers.sort((a, b) => a - b)
  return a + b
}

or

function sumTwoSmallestNumbers(numbers) {  
  var min = Number.MAX_SAFE_INTEGER;
  var secondMin = Number.MAX_SAFE_INTEGER;
  
  var n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if(n < min) {
      secondMin = min;
      min = n;
    } else if( n < secondMin ) {
      secondMin = n;
    }
  }
  
  return min + secondMin;
}

or

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function (a, b) { 
    return a - b;
  });
  return numbers[0] + numbers[1];
};

or

function sumTwoSmallestNumbers(numbers) {  
  var result = numbers.sort(function(a,b){return a - b});
  return result[0] + result[1]
};
