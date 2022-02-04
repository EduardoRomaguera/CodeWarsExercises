console.log('Hello GAP, this is exercise03')
console.log(
    "Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially,"+
    '\n'+
    "rearrange the digits to create the highest possible number."+
    '\n'+
    "Examples:"+
    '\n'+
    "Input: 42145 Output: 54421  -  Input: 145263 Output: 654321  -  Input: 123456789 Output: 987654321"
)
//Input number to solve the exercise01, change the next line as needed.
let numberInput = 3547902635409;
let result = solution(numberInput);
console.log('Exercise02 solution for number '+numberInput+' is '+ result)

//Solves the exercise02
 function solution(number){
    let result=-1;
    let digits = number.toString();
    let length = digits.length;
    let digitsArray = [];
    let i=0;
    
    //pushes the int into an Array to access array methods
    for (i; i<length; i++){
        digitsArray.push(digits.charAt(i));
    }
    //does the magic of sorting as needed
    digitsArray.sort();
    digitsArray.reverse();
    
    result = digitsArray.join('')
    result = Number(result);
    return result;
 }