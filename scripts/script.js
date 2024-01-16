let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};
updateScoreElement();
/*
if(!score){
score={
    wins:0,
    losses:0,
    ties:0
};
}
*/


function playGame(playerMove){
const computerMove= pickComputerMove();
let result='';
if(playerMove==='scissor'){
    if(computerMove==='rock'){
    result='you loose';
    }else if(computerMove === 'paper'){
    result='you win';
    }else if(computerMove === 'scissor'){
    result='tie';
    }
}else if(playerMove==='rock'){
    if(computerMove==='rock'){
        result='tie';
    }else if(computerMove === 'paper'){
        result='you loose';
    }else if(computerMove === 'scissor'){
        result='you win';
    }

}else if(playerMove==='paper'){

    if(computerMove==='rock'){
        result='you win';
    }else if(computerMove === 'paper'){
        result='tie';
    }else if(computerMove === 'scissor'){
        result='you loose';
    }
}
if(result==='you win'){
    score.wins+=1;
}else if(result==='you loose'){
    score.losses+=1;
}else if(result==='tie'){
    score.ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML= ` You<img src="./images/${playerMove}-emoji.png" class="move-icon">
<img src="./images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=  `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove(){
let computerMove='';
const randomNumver= Math.random();
if(randomNumver>=0 && randomNumver < 1/3){
    computerMove='rock';
}else if(randomNumver>=1/3 && randomNumver < 2/3){
    computerMove='paper';
}else if(randomNumver>=2/3 && randomNumver <= 1){
    computerMove='scissor';
}
return computerMove;
}