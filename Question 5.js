/*
Write a function named mathIsFun
Will have one parameter called numberString
 - This parameter will have a series of numbers, seperated by the | character
 Return the largest number that is the sum of two of the numbers.
*/

let stringOfNum = "780 | 14 | 92 | 12 | 23 | 92900"
console.log(mathIsFun(stringOfNum))



function mathIsFun(numberString){
    let tempNum = 0;
    let firstNum = 0;
    let secondNum = 0;
    for(let i=0; i < numberString.length; i++){
        if (numberString[i] != "|" && numberString[i] != " "){
            tempNum += numberString[i];
        } else {
            if (tempNum > firstNum) {
                secondNum = firstNum;
                firstNum = Number(tempNum);
                tempNum = 0;
            } else if (firstNum >= secondNum && tempNum > secondNum){
                secondNum = Number(tempNum);
                tempNum = 0;
            } else {
                tempNum = 0;
            }
        }
    }
    if (tempNum > firstNum){
        secondNum = firstNum;
        firstNum = Number(tempNum);
    }
    let sum = `The largest numbers were ${firstNum} and ${secondNum} for a total of ${firstNum + secondNum}`;
    return sum;
}