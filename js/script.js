var userInput;
var iGeneratedArray =[];
var iRoundIndex = 0;

//game buttons
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;

function disableGameButtons(){
    for(iLoopVar = 0; iLoopVar <= gameButtonsIdLen; iLoopVar++){
        document.getElementById(gameButtonsId[iLoopVar]).disabled = true;
    }
}
function enableGameButtons(){
    for(iLoopVar = 0; iLoopVar <= gameButtonsIdLen; iLoopVar++){
        document.getElementById(gameButtonsId[iLoopVar]).disabled = false;
    }
}


function startButton(){
    document.getElementById("startButton").disabled = true;
    iGenerateSequence(iGeneratedArray, 3);
    disableGameButtons();
    //display sequence
    //enable buttons
    //take user input
        //check user input
    //if correct
        //update score
        //reset round
    //else
        //reset score
        //future functionality
            //scoreboard
            //highest
            //time taken
            //pizzazz
    document.getElementById("Button").disabled = false;
}

//retrieves user input
function uInput(number){
    userInput = number;
    alert(number);
}

//given array and number of indexes returns a randomized array of that length
function iGenerateSequence(iGeneratedArray, iArrElements){
	iGeneratedArray = [];
	for(loopVar = 0; loopVar <= iArrElements; loopVar++){
		var iRandomNumber = Math.floor(Math.random() * 4);
		iGeneratedArray.push(iRandomNumber);
	}
	return iGeneratedArray;
}

/*
//assume it's start of a round
function checkInput(){
    var arrLen = (iGeneratedArray.length - 1);
    
    if(bCorrect(userInput, iGeneratedArray[iRoundIndex])){
        if(iRoundIndex < arrLen){
            
        }else if(iRoundIndex = arrLen){
            
        }
    }

}
*/
function bCorrect(iUserInput, iGenerated){
	return (iUserInput === iGenerated);
}
