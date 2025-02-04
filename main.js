'use scrict'

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random () * 20) + 1;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    //When There is no input
    if(!guess){
       document.querySelector('.message').textContent = '⛔ No Number'

       //When Player Wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }

    //When guess is too high
     else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '😎 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '😥 You Lose The Game'
            document.querySelector('.score').textContent = 0;
        }
    } 

    //When guess is too low
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '😎 Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = '😥 You Lose The Game'
            document.querySelector('.score').textContent = 0;
        }

    }
})

//When Reseting The Game
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random () * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('body').style.backgroundColor = '#746060';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
})