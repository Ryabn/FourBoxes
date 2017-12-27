var userInput;

var iRoundIndex = 0;

//game buttons
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;

function load(){
    disableGameButtons();
}

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


function displayButton(buttonId){
    document.getElementById(buttonId).style.boxShadow = "0 0 10px red";
    setTimeout(function(){
        stopButton(buttonId);
    }, 1000);
    //later will replace time with integer so that the longer the sequence, the shorter the animation
    
}
function stopButton(buttonId){
    document.getElementById(buttonId).style.boxShadow = "0 0 10px blue";
}

function chainAnimations(iGeneratedArray){
    
}

function startButton(){
    document.getElementById("startButton").disabled = true;
    
    var iGeneratedArray =[];
    iGeneratedArray = iGenerateSequence(3);
    chainAnimations(iGeneratedArray);
    enableGameButtons();
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
    disableGameButtons();
}

//retrieves user input
function uInput(number){
    userInput = number;
    alert(number);
}

//given array and number of indexes returns a randomized array of that length
function iGenerateSequence(iArrElements){
	GeneratedArray = [];
	for(loopVar = 0; loopVar < iArrElements; loopVar++){
		var iRandomNumber = Math.floor(Math.random() * 4);
		GeneratedArray.push(iRandomNumber);
	}
	return GeneratedArray;
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
