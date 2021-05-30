//Question: Find the word 1 is anagram of word 2

function Find_Anagram(word1, word2) {
    
    if (word1.length !== word2.length) {

        console.log("Length of 2 words are not equal! ");
   
        return false;
    }

    var array1 = array2 = [];

    for (var i = 0; i < word1.length; ++i) {

        array1[i] = word1[i];

        array2[i] = word2[i];
    }

    array1.sort();
    array2.sort();

    for (var i = 0; i < array1.length; ++i){

        if (array1[i] != array2[i]){

            return false;
        }
        
    return true;
    }
}
if (Find_Anagram("silent","listen")) {

    console.log("The word 1 is anagram of the word 2 !")

} else {

    console.log("Not Anagram !")

}
