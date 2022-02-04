console.log('Hello GAP, this is exercise02')
console.log(
    "Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative."+
    '\n'+
    "Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case"+
    '\n'+
    ""
)
//Input number to solve the exercise01, change  line 10 number as needed.
let numberInput = 2;
let result = solution(numberInput);
console.log('Exercise02 solution for number '+numberInput+' is '+ result)

//Solves the exercise02
 function solution(number){
    let result = 0;
    let binary = makeItBinary(number);

    binary.forEach(number => {
        if(number == 1){
            result ++;
        }
    });
    return result;
 }

 //Convert 10 to Binary array representation (number is inverted, as)
 function makeItBinary(number){
    let binary = [];
    while (number >= 1){
        if(number % 2 == 0){
            binary.push(0);
        }
        else{
            binary.push(1);
        }
        number = parseInt(number/2);
    }
    return binary
 }