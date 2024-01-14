
let one = document.querySelector('.hundreds').children.one;
let two = document.querySelector('.hundreds').children.two;
let three = document.querySelector('.hundreds').children.three;
let four = document.querySelector('.hundreds').children.four;
let five = document.querySelector('.hundreds').children.five;
let six = document.querySelector('.hundreds').children.six;
let seven = document.querySelector('.hundreds').children.seven;

let intervalIds = [];

function oneDriveInAnimation(){
    one.style = "display:block; animation: driveInVertical 2.5s forwards";
}
function twoDriveInAnimation(){
    two.style = "display:block; animation: driveInVertical 2.5s forwards";
}
function fourDriveInAnimation(){
    four.style = "display:block; animation: driveInVertical 2.5s forwards";
}
function sixDriveInAnimation(){
    six.style = "display:block; animation: driveInVertical 2.5s forwards";
}

function sevenDriveInAnimation(){
seven.style = "display:block; animation:innerSeven 2.5s linear forwards";
}

export function drawZeroHundreds(){
    clearIntervalAll();
    intervalIds.push(setInterval(sevenDriveInAnimation,2000));
    intervalIds.push(setInterval(sixDriveInAnimation,2000));
    intervalIds.push(setInterval(oneDriveInAnimation,2200));
    intervalIds.push(setInterval(twoDriveInAnimation,2200));
    intervalIds.push(setInterval(fourDriveInAnimation,2400));
}

function clearIntervalAll() {
    for (const id of intervalIds) {
        clearInterval(id);
    }
    intervalIds = [];
}