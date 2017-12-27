var userInput;
var iRoundIndex = 0;
var userLevel;
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;
function load(){
    disableGameButtons();
    userLevel = 0;
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
            }else{
                enableGameButtons();
            }
        }, 100);
        
    }
    displayButton(iAnimationIndex);
}
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
    var iGeneratedArray =[];
    document.getElementById("startButton").disabled = true;
    iGeneratedArray = iGenerateSequence(4);
    
    chainAnimations(iGeneratedArray);



}
function startOfRound(){
    //take user input
        //check user input
    //if correct
        //update score
        //reset round
    //else
        //generate new game function
        //reset score
        //future functionality
            //scoreboard
            //highest
            //time taken
            //pizzazz
}
function endOfRound(){
    document.getElementById("startButton").disabled = false;
    disableGameButtons();
}
function uInput(number){
    userInput = number;
}
function setNumberOfIndexes(userLevel){
    var numInSequence;
    numInSequence = Math.floor((8*(Math.log10((0.5 * userLevel) + 2))) + 1);
    
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
