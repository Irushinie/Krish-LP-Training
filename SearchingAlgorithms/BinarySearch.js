//Binary Search

var array_num = [10,11,12,13,14,15,16,17,18,19,20];

function BinarySearch_Algo(array_num, findNum) {

    var firstIndx_val = 0;

    var lastIndex_val = array_num.length - 1;

    var middleIndex_val = Math.floor((lastIndex_val + firstIndx_val) / 2);

    while (array_num[middleIndex_val] != findNum && firstIndx_val < lastIndex_val) {
        
        if (findNum < array_num[middleIndex_val]) {

            lastIndex_val = middleIndex_val - 1;
        }
        else if (findNum > array_num[middleIndex_val]) {

            firstIndx_val = middleIndex_val + 1;

        }
        middleIndex_val = Math.floor((lastIndex_val + firstIndx_val) / 2);
    }

    return (array_num[middleIndex_val] != findNum) ? -1 : middleIndex_val;
}

//console.log("Index of the element is : "+BinarySearch_Algo(array_num, 20));
module.exports=BinarySearch_Algo(array_num, 20);
