/*jslint white: true */

//declare variables
var userScore;
var userLevel;
var iGeneratedArray =[];

window.onload = function(){

    

};

function displayNewScore(){
    
}
function displayNewLevel(){
   document.getElementById('level') = "Level: " + userLevel;
}

//given array and number of indexes returns a randomized array of that length
function iGenerateSequence(iGeneratedArray, iArrElements){
	iGeneratedArray = [];
	for(loopVar = 0; loopVar <= iArrElements; loopVar++){
		int iRandomNumber = Math.floor(Math.random() * 4);
		iGeneratedArray.push(iRandomNumber);
	}
	return iGeneratedArray;
}

function buttonPressed(buttonNum){
	int iGenerated = iGeneratedArray[iUserInput.length - 1];
	bCorrect(buttonNum, iGenerated);
}

function bCorrect(iUserInput, iGenerated){
	return (iUserInput === iGenerated);
}
