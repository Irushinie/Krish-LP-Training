arrInput= [212,4,341,26,24,445,37,339,33329,42,53,8342];

function MergeSort_Algo(arrInput) {

	const length = arrInput.length

	// If length of the array is smaller than two the array is already sorted 
	//(as we cant divide it further)
	if (length < 2) {

		return arrInput;
	}
	// Here we split the array into 2 parts

	const middlepart = Math.floor(length / 2)

	const left_side = arrInput.slice(0, middlepart)
	const right_side = arrInput.slice(middlepart)

	// sorting left side and the right side

	const sortedLeft = MergeSort_Algo(left_side);

	const sortedRight = MergeSort_Algo(right_side);

	// Now merging  the leftside and rightside
	return mergeARR(sortedLeft, sortedRight);

}

function mergeARR(left_side, right_side) {
	
	const results = [];

	while (left_side.length && right_side.length) {

		if (left_side[0] < right_side[0]) 
		{

			const currentval = left_side.shift();

			results.push(currentval)

		} else 
		{
			const currentval = right_side.shift();

			results.push(currentval)
		}
	}

	return [...results, ...left_side, ...right_side]
}

//console.log(MergeSort_Algo(array));

module.exports= MergeSort_Algo(arrInput);