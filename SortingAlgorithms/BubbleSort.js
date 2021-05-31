let arrInput = [13, 8, 200, 23, 749, 9306, 42, 5, 502, 32, 12, 737];

function BubbleSort_Algo(arrInput) {

  var i, x;
  var temp = 0;

  for (i = 0; i < arrInput.length; i++) {

    for (x = 0; x < (arrInput.length - i - 1); x++) {

      if (arrInput[x] > arrInput[x + 1]) {

        temp = arrInput[x];

        arrInput[x] = arrInput[x + 1];

        arrInput[x + 1] = temp;

      }
    }
  }
  return arrInput;
}

//console.log("Original array: [" + arrInput + "]");
//console.log("Sorted Sequence : [" + BubbleSort_Algo(arrInput) + "]");

module.exports= BubbleSort_Algo(arrInput);