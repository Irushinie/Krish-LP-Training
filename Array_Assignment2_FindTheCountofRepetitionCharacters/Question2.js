function CountRepetitionCharacter(inputcharacter) {

    var inputcharacter;
    inputcharacter= inputcharacter.toLowerCase();
    const chracterObj = {};
    var i;
    
    for (i = 0; i < inputcharacter.length; i++) {

        if (chracterObj[inputcharacter[i]]) {

            chracterObj[inputcharacter[i]] = chracterObj[inputcharacter[i]] + 1;

        }
        else {

            chracterObj[inputcharacter[i]] = 1;
        }
    }
    console.log(chracterObj);
}

var inputSen = 'Hey! Good morning!';
console.log(CountRepetitionCharacter(inputSen));