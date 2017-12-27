var userInput;

var iRoundIndex = 0;

//game buttons
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;

//disable buttons on load
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
function chainAnimations(iGeneratedArray){
    var sArrayId = [];
    sArrayId = translateNumToId(iGeneratedArray);
    var iAnimationIndex = 0;
    
    function displayButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "0 0 10px red";
        setTimeout(function(){
            stopButton(iAnimationIndex);
        }, 1000);
    }
    function stopButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "none";
        setTimeout(function(){
            iAnimationIndex++;
            if(iAnimationIndex < sArrayId.length){
                displayButton(iAnimationIndex);
            }
        }, 500);
        
    }
    displayButton(iAnimationIndex);
}
//generates array of id's based on generated array
function translateNumToId(iGeneratedArray){
    var sArrayId = [];
    for(iLoopVar = 0; iLoopVar < iGeneratedArray.length; iLoopVar++){
        switch(iGeneratedArray[iLoopVar]) {
            case 0:
                sArrayId.push('one');
                break;
            case 1:
                sArrayId.push('two')
                break;
            case 2:
                sArrayId.push('three')
                break;
            case 3:
                sArrayId.push('four')
                break;
        } 
    }
    return sArrayId;
}
function test(){
    chainAnimations(iGenerateSequence(3));
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
