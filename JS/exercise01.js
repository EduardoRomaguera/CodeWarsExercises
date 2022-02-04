console.log('Hello GAP, this is exercise01')
console.log(
    "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23."+
    '\n'+
    "Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them)."+
    '\n'+
    "Note: If the number is a multiple of both 3 and 5, only count it once."
)
var numberInput = 10;
solution(numberInput);

 function solution(number){
    let numberToTest = number-1;
    let result = 0;
    let numbers = [];
    while (numberToTest > 0)
    {
        if(numberIsMultipleOf(numberToTest, 3)){
            numbers.push(numberToTest)
        }else{
            if(numberIsMultipleOf(numberToTest, 5)){
                numbers.push(numberToTest)
            }
        }
        numberToTest --;
    }
    numbers.forEach(number => {
        result = result + number;
    });
    console.log('Exercise01 solution for number '+numberInput+' is '+ result)
 }

 function numberIsMultipleOf(number, multiple){
    if (number % multiple == 0){
        return true
    }
    return false
 }