//Linear Search

let array_Numbers =  [10,11,12,13,14,15,16,17,18,19,20];
let arrSize = array_Numbers.length;
let findNum=13;


function LinearSearch_Algo(array_Numbers, arrSize, findNum) {
    let i;

    for (i = 0; i < arrSize; i++) {

        if (array_Numbers[i] == findNum) {

            return i;
        }
    }
    return -1;
    
}

let Linear_result = LinearSearch_Algo(array_Numbers, arrSize, findNum);


//console.log(("Index of the element is : " + Linear_result));

module.exports=LinearSearch_Algo(array_Numbers, arrSize, findNum);
