var arrInput = [21, 100, 17, 93, -39, 70, 192,30, 10, 530, ];

function quick_SortAlgo(arrInput) {

	if (arrInput.length <= 1) 
	{ 

		return arrInput;

	} 
	else 
	{
		var left_side = [];
		var right_side = [];
		var newArray = [];
		var pivot = arrInput.pop();
		var arrlength = arrInput.length;

		for (var i = 0; i < arrlength; i++) {

			if (arrInput[i] <= pivot)
			{

				left_side.push(arrInput[i]);

			} 
			else
			{

				right_side.push(arrInput[i]);
			}
		}

		return newArray.concat(quick_SortAlgo(left_side), pivot, quick_SortAlgo(right_side));
	}
}
//console.log("Sorted Sequence: [" + quick_SortAlgo(arrInput)+"]");

module.exports= quick_SortAlgo(arrInput);