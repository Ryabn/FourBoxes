var userInput;
var userLevel;
var iRoundIndex = 0;
//game buttons
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;

//disable buttons on load
function load(){
    disableGameButtons();
    userLevel = 1;
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
function animationTime(arrayLength){
    var iAnimationTime;
    if(arrayLength >= 10){
        iAnimationTime = 200;
    }else{
        iAnimationTime = (Math.log10(arrayLength + 10)*(-1) + 1.5) * 1000;
    }
    return iAnimationTime;
}
function chainAnimations(iGeneratedArray){
    var sArrayId = [];
    sArrayId = translateNumToId(iGeneratedArray);
    var iAnimationTime = animationTime(sArrayId.length);
    var iAnimationIndex = 0;
    function displayButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "0 0 10px red";
        setTimeout(function(){
            stopButton(iAnimationIndex);
        }, iAnimationTime);
    }
    function stopButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "none";
        setTimeout(function(){
            iAnimationIndex++;
            if(iAnimationIndex < sArrayId.length){
                displayButton(iAnimationIndex);
            }
        }, 100);
        
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
    
}
function startButton(){
    
    document.getElementById("startButton").disabled = true;
    
    var iGeneratedArray =[];
    //based on level
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
function uInput(number){
    userInput = number;
}
//given array and number of indexes returns a randomized array of that length
function setNumberOfIndexes(userLevel){
    var numInSequence = 1;
    
    
    return numInSequence;
}
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
