import { drawZero,drawOne,drawTwo } from "./helper/thousandsNumber.js";
import { drawZeroHundreds } from "./helper/hundreds.js";


// Ones
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');





function drawThree(){
    clearIntervalAll();
    intervalIds.push(setInterval(checking,1000))
    intervalIds.push(setInterval(fourDriveUpAnimation,2000));
    intervalIds.push(setInterval(twoDriveInAnimation,2500));
}

drawZero();
drawZeroHundreds();
setTimeout(drawOne,15000);
setTimeout(drawTwo,22000);
setTimeout(drawThree,33000);

