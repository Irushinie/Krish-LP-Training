let inputArr = [43, 56, 2, 653, 73, 693, 23, 1, 593, 3, 13];

function SelectionSort_Algo(inputArr) {

    let arrSize = inputArr.length;
    let i;
   
    for (i = 0; i < arrSize; i++) {

        let minValue = i;
        let j;

        for (j = [i + 1]; j < arrSize; j++) {

            if (inputArr[j] < inputArr[minValue]) {

                minValue = j;
            }
        }
        if (minValue != i) {

            // Swapping
            let temp;

            temp = inputArr[i];
            inputArr[i] = inputArr[minValue];
            inputArr[minValue] = temp;
            
        }
    }

    return inputArr;
}

//console.log("Sorted Sequence : [" + (SelectionSort_Algo(inputArr) + "]"));

module.exports= SelectionSort_Algo(inputArr);