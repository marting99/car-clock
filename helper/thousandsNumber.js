 
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');

function oneDriveInAnimation(){
    one.style = "display:block; animation: driveInVertical 5.5s forwards";
}

function twoDriveInAnimation(){
    two.style = "display:block; animation: driveInVertical 5.5s forwards";
}
function twoSpecialCaseAnimation(){
    two.style = "display:block; animation: specialCase linear 5.5s forwards";
}

function threeDriveOutAnimation(){
    three.style = "display:block; animation:driveOut 5.5s forwards";
}
function threeDriveInAnimation(){
    three.style = "display:block; animation:driveIn 5.5s forwards";
}
function fourDriveUpAnimation(){ 
    four.style = "display:block; animation: driveUp 5.5s forwards";
}
function fourDriveInAnimation(){
    four.style = "display:block; animation: driveInVertical 5.5s forwards";
}

function fiveDriveInAnimation(){   
    five.style = "display:block; animation:driveIn 5.5s forwards";
}

function sixDriveUpAnimation(){
    six.style = "display:block; animation: driveUp 5.5s forwards";
}
function sixDriveInAnimation(){
    six.style = "display:block; animation: driveInVertical 5.5s forwards";
}

function sevenDriveOutAnimation(){
    seven.style = "display:block; animation: driveOut 5.5s forwards";
}
function sevenDriveInAnimation(){
    seven.style = "display:block; animation:driveIn 5.5s forwards";
}

let intervalIds = [];

export function drawZero(){
    clearIntervalAll();
    intervalIds.push(setInterval(sevenDriveInAnimation,1000));
    intervalIds.push(setInterval(threeDriveInAnimation,3350));
    intervalIds.push(setInterval(sixDriveInAnimation,2000));
    intervalIds.push(setInterval(oneDriveInAnimation,2200));
    intervalIds.push(setInterval(twoDriveInAnimation,2200));
    intervalIds.push(setInterval(fourDriveInAnimation,2400));
}
export function drawOne(){
    clearIntervalAll();
    intervalIds.push(setInterval(threeDriveOutAnimation,1000));
    intervalIds.push(setInterval(sevenDriveOutAnimation,1000));
    intervalIds.push(setInterval(sixDriveUpAnimation,1400));
    intervalIds.push(setInterval(fourDriveUpAnimation,1400))

}
export function drawTwo(){
    clearIntervalAll();
    intervalIds.push(setInterval(twoSpecialCaseAnimation,1000));
    intervalIds.push(setInterval(sevenDriveInAnimation,1500));
    intervalIds.push(setInterval(threeDriveInAnimation,2000));
    intervalIds.push(setInterval(fiveDriveInAnimation,1500));
    intervalIds.push(setInterval(fourDriveInAnimation,1000));
}

function clearIntervalAll() {
    for (const id of intervalIds) {
        clearInterval(id);
    }
    intervalIds = [];
}