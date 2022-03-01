//2. Square Every Digit
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
 */
function squareDigits(num){
    let array = num.toString().split("");
    let separateArray = array.map(x => parseInt(x));
    let squaredArray = separateArray.map(function (x) {
        return Math.pow(x,2);
    })
    let joinedArray = squaredArray.join("");
    return parseInt(joinedArray);
}
console.log(squareDigits(9119));