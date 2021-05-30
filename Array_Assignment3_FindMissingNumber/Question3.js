// Question 3 : Find the missing number from a given number sequence

//"Find_missing_number_Question" function
function Find_missing_number_Question(arr) {
    
    var array_size = arr.length;
    var val = arr[0];
    var i;

    for (i = 0; i < array_size; i++) {

        if ((arr[i] - i) != val) {
            
            while (val < ((arr[i] - i))) {

                return ((i + val));

                val = val + val;

            }
       }
    }
}

// sample  array

var arr = [13, 14, 15, 16, 17, 18, 19, 20, 21,22,23, 24, 25,26,27,28,29,30,31]; // missing number is number 22

console.log("Missing number in the sequence is : " + Find_missing_number_Question(arr));





