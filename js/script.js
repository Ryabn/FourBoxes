
//given array and number of indexes returns a randomized array of that length
function iGenerateSequence(iGeneratedArray, iArrElements){
	iGeneratedArray = [];
	for(loopVar = 0; loopVar <= iArrElements; loopVar++){
		//int iRandomNumber = Math.floor(Math.random() * 4);
		iGeneratedArray.push(iRandomNumber);
	}
	return iGeneratedArray;
}


function bCorrect(iUserInput, iGenerated){
	return (iUserInput === iGenerated);
}