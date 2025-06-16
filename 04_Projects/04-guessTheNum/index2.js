let ranNum = Math.floor(Math.random()*100 + 1);
let count = 10;

const userInput = document.querySelector('.guessField');
const prevGuesses = document.querySelector('.guesses');
const remGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const submit = document.querySelector('#subt');

let playGame = true;
let prevGuess = '';
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = userInput.value;

        if (count == 0){
            displayMessage(`Better Luck Next Time : Number Was ${ranNum}`)
        }
        else{

            if(isValid(guess)){
                let guess_num = parseInt(guess);
                displayGuess(guess_num);
            }else
                displayMessage('Enter a Valid Number');
            
        }
    })
}

function isValid(guess){
    return !(guess === "" || guess < 0 || guess > 100 || isNaN(guess))
}

function displayGuess(guess){
    prevGuesses.innerHTML += `${guess} `;
    userInput.value = ''
    count--;
    remGuesses.textContent = `${count}`;

    if(guess === ranNum){
        displayMessage("Hurray! You guessed correct.")
        endGame();
    }else if (guess > ranNum){
        lowOrHi.innerHTML = '<h2>Number is Too High</h2>'
    }else{
        lowOrHi.innerHTML = '<h2>Number is Too Low</h2>'
    }
}

function displayMessage(message){
    alert(message);
}

function newGame(){
    ranNum = Math.floor(Math.random()*100 + 1);
    count = 10;
    remGuesses.textContent = `${count}`;
    prevGuesses.innerHTML = '';
    lowOrHi.innerHTML = '';
    document.querySelector('.btn').remove();
    playGame = true;
}

function endGame(){
    userInput.value = ''
    playGame = false;
    
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.innerHTML = '<h2>Start New Game</h2>'
    document.querySelector('.resultParas').appendChild(btn)

    btn.addEventListener('click', function(e){
        e.preventDefault();
        newGame();
    })

}