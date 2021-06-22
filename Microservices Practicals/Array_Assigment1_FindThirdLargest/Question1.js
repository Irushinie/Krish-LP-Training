// Question 1 : Find the third largest number from an array

var arrNum = [24, 3, 6, 176, 123, 34, 65, 79, 98];

var arrLength = arrNum.length;

function Assignment_third_largest(arrNum, array_size) {

    //first largest number
    var firstNumber = arrNum[0];

    for (var x = 1; x < array_size; x++) {
        if (arrNum[x] > firstNumber) {

            firstNumber = arrNum[x];

        }
    }

    //second largest number
    var secondNumber = Number.MIN_VALUE;

    for (var x = 0; x < array_size; x++) {
        if ((arrNum[x] > secondNumber) && (arrNum[x] < firstNumber)) {

            secondNumber = arrNum[x];

        }
    }

    //Third largest number
    var thirdNumber = Number.MIN_VALUE;

    for (var x = 0; x < array_size; x++)
        if ((arrNum[x] > thirdNumber) && (arrNum[x] < secondNumber))
           
        thirdNumber = arrNum[x];

    console.log(("The Third Largest Number is : " + thirdNumber));
}


Assignment_third_largest(arrNum, arrLength);