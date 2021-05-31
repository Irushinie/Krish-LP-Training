
var array = ['joey', 'john', 'shen', 'elina', 'shen', 'boom',
    'hary', 'neen', 'jams', 'noel', 'jack', 'brian',
    'zen', 'amy', 'buny', 'jams', 'yams', 'yosh',
    'fransis', 'cham', 'dan', 'sam', 'yoy', 'roy',
    'enish', 'wishu', 'shinu', 'gren', 'hesha', 'yaosh'];
    
    var newArray = [];

for (var i = 0; i < array.length; i++) {
    
    function calcAlphabet(str) {

        var total = 0;
        var q;

        var strArr = str.split("")
      

        var alphabet = {
            a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
            g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14,
            o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22,
            w: 23, x: 24, y: 25, z: 26
        }
        

        for (var i = 0; i < strArr.length; i++) {

            total = total + alphabet[strArr[i]];
          
            }
    
        newArray.push(total);
       
        newArray.sort();

        return total;
    
    }
      console.log("Count of the word: "+calcAlphabet(array[i]));
      
      console.log(newArray);
      
}
