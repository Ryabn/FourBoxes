var userInput;
var iRoundIndex = 0;
var userLevel = 0;
var userScore = 0;
var iHighScore = 0;
var soundPack = 'piano';
var iGeneratedArray = [];
var gameButtonsId = ['one', 'two', 'three', 'four'];
var gameButtonsIdLen = gameButtonsId.length;

function load(){
    firstTimeLoad();
    updateScores();
    disableGameButtons();   
}
function startButton(){
    iGeneratedArray = [];
    document.getElementById("startButton").disabled = true;
    iGeneratedArray = iGenerateSequence(setNumberOfIndexes());
    chainAnimations(iGeneratedArray);
}
function setNumberOfIndexes(){
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
function animationTime(arrayLength){
    var iAnimationTime;
    if(arrayLength >= 10){
        iAnimationTime = 220;
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
    if(Cookies.get('soundMode') === '1'){
        var playSound = true;
    }else{
        var playSound = false;
    }
    function displayButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "0 0 10px red";
        document.getElementById(sArrayId[iAnimationIndex]).style.backgroundColor = "#6782bc";
        playNote(sArrayId[iAnimationIndex], playSound);
        setTimeout(function(){
            stopButton(iAnimationIndex);
        }, iAnimationTime);
    }
    function stopButton(iAnimationIndex){
        document.getElementById(sArrayId[iAnimationIndex]).style.boxShadow = "none";
        document.getElementById(sArrayId[iAnimationIndex]).style.backgroundColor = null;
        setTimeout(function(){
            iAnimationIndex++;
            if(iAnimationIndex < sArrayId.length){
                displayButton(iAnimationIndex);
            }else{
                enableGameButtons();
                indicatorUpdate();
            }
        }, 100);
        
    }
    displayButton(iAnimationIndex);
}
function playNote(letterId, playSound){
    if(playSound){
        var note = new Audio("sounds/" + soundPack + "/" + letterId + ".mp3");
        note.play();
    }
}
function updateScores(){
    document.getElementById('level').innerHTML = "Level:" + (userLevel + 1);
    document.getElementById('score').innerHTML = "Score:" + userScore;
    indicatorUpdate();
}
function disableGameButtons(){
    for(iLoopVar = 0; iLoopVar < gameButtonsIdLen; iLoopVar++){
        document.getElementById(gameButtonsId[iLoopVar]).disabled = true;
    }
}
function enableGameButtons(){
    for(iLoopVar = 0; iLoopVar < gameButtonsIdLen; iLoopVar++){
        document.getElementById(gameButtonsId[iLoopVar]).disabled = false;
    }
}
function endOfRound(){
    document.getElementById("startButton").disabled = false;
    iRoundIndex = 0;
    disableGameButtons();
}
function roundPass(){
    userLevel++;
    userScore++;
    endOfRound();
}
function roundFail(){
    var indicatorId = document.getElementById('displayLeft');
    document.getElementById('indicator').innerHTML = "Failed!";
    indicatorId.style.backgroundColor = "#d8002e";
    setTimeout(function(){ 
        indicatorId.style.backgroundColor = "#ededed";
    }, 300);
    if(userScore > iHighScore){
        iHighScore = userScore;
        Cookies.set('highScore', iHighScore, { expires: 7 });
    }
    openEndScreen();
}
function uInput(number){
    checkInput((number-1));
    if(Cookies.get('soundMode') === '1'){
        switch(number) {
            case 1:
                playNote('one', true);
                break;
            case 2:
                playNote('two', true);
                break;
            case 3:
                playNote('three', true);
                break;
            case 4:
                playNote('four', true);
                break;
        } 
    }
}
function lightUpCorrect(divId){
    document.getElementById(divId).style.backgroundColor = "#5aff30";
    setTimeout(function(){ 
        document.getElementById(divId).style.backgroundColor = "#ededed";
    }, 300);
}
function checkInput(userInputNum){
    if(userInputNum === iGeneratedArray[iRoundIndex]){
        userScore++;
        iRoundIndex++;
        updateScores();
        lightUpCorrect('displayLeft');
        if(iRoundIndex >= iGeneratedArray.length){
            roundPass(); 
        }
    }else{
        roundFail();
    }
}
function indicatorUpdate(){
    var boxesLeft = iGeneratedArray.length - iRoundIndex;
    if(boxesLeft === 0){
        document.getElementById('indicator').innerHTML = "Next Level:";
    }else{
        document.getElementById('indicator').innerHTML = "Boxes:" + (boxesLeft);
    }
}
function openOptions(){
    document.getElementById('wrapper').style.visibility = 'visible';
}
function closeOptions(){
    document.getElementById('wrapper').style.visibility = 'hidden';
}
function setDarkMode(){ 
    if(Cookies.get('darkMode') === '1'){
        document.getElementById('darkMode').checked = true;
        document.body.style.backgroundColor = "black";
        document.getElementsByTagName("h1")[0].style.color = "white";
    }else{
        document.getElementById('darkMode').checked = false;
        document.body.style.backgroundColor = "white"; 
        document.getElementsByTagName("h1")[0].style.color = "black";
    }
}
function setEnableSound(){
    if(Cookies.get('soundMode') === '1'){
        document.getElementById('soundEnable').checked = true;
    }else{
        document.getElementById('soundEnable').checked = false;
    }
}
function setSoundPack(){
    if(Cookies.get('soundPack') === '3'){
        document.getElementById('soundKeyThree').checked = true;
        soundPack = 'bigshaq';
    }else if(Cookies.get('soundPack') === '2'){
        document.getElementById('soundKeyTwo').checked = true;
        soundPack = 'drums';
    }else{
        document.getElementById('soundKeyOne').checked = true;
        soundPack = 'piano';
    }
}
function enableSoundClick(){
    if(document.getElementById('soundEnable').checked) {
        Cookies.set('soundMode', '1', { expires: 7 });
    }else{
        Cookies.set('soundMode', '0', { expires: 7 });
    }
    setEnableSound();
}
function darkModeClick(){
    if(document.getElementById('darkMode').checked) {
        Cookies.set('darkMode', '1', { expires: 7 });
    }else{
        Cookies.set('darkMode', '0', { expires: 7 });
    }
    setDarkMode();
}
function openEndScreen(){
    document.getElementById('endingScreenWrapper').style.visibility = 'visible';
    displayFinalScores();
}
function closeEndScreen(){
    document.getElementById('endingScreenWrapper').style.visibility = 'hidden';
    userLevel = 0;
    userScore = 0;
    updateScores();
    endOfRound();
}
function displayFinalScores(){
    document.getElementById('finalScoreDisplay').innerHTML = (userScore);
    document.getElementById('finalLevelDisplay').innerHTML = (userLevel + 1);
    document.getElementById('highScore').innerHTML = ("Best: " + iHighScore);
    
}
function newSoundPack(buttonNum){
    switch(buttonNum) {
        case 1:
            Cookies.set('soundPack', '1', { expires: 7});
            break;
        case 2:
            Cookies.set('soundPack', '2', { expires: 7});
            break;
        case 3:
            Cookies.set('soundPack', '3', { expires: 7});
            break;
    } 
}
function loadSettings(){
    setEnableSound();
    setDarkMode();
    setSoundPack();
    iHighScore = parseInt(Cookies.get('highScore'));
}
function firstTimeLoad(){
    if(Cookies.get('loadedBefore') === '1'){
        loadSettings();
    }else{
        Cookies.set('darkMode', '0', { expires: 7 });
        Cookies.set('soundMode', '1', { expires: 7 });
        Cookies.set('loadedBefore', '1', { expires: 7 });
        Cookies.set('highScore', '0', { expires: 7});
        Cookies.set('soundPack', '1', { expires: 7});
        loadSettings();
    }
}