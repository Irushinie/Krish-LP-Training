let inputarr = [100,43,4,329,19,265,-235,89,3922,2,487,42,646];

function insertionSort_Algo(inputarr){
	
	var i;

	for (i = 1; i < inputarr.length; i++) {

		var j
		var	temp;
		var x = inputarr[i];
		
		for (j = i - 1; j >= 0; j--) {

			if (x < inputarr[j]) {

				temp = inputarr[j];

				inputarr[j] = x;

				inputarr[j+1] = temp;
			};
		};
		
	};
	
	return inputarr;
}
//console.log(insertionSort_Algo(inputarr));

module.exports= insertionSort_Algo(inputarr);