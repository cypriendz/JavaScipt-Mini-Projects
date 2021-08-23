//challenge 1 age in hours
/*
let age = prompt("What is you birthday (**-**-****) ?");
let ageArrayStr = age.split("-");
let ageArrayNum = [0,0,0];

//console.log(ageArray);

for(let i = 0; i <= 2; i++){
    ageArrayStr[i]= parseInt(ageArrayStr[i]);
    ageArrayNum[i] = ageArrayStr[i];
}

var today = new Date();
todayDateArray = [today.getMonth() + 1,today.getDate(),today.getFullYear()];
console.log(todayDateArray);
*/
/*calculate time difference b/w input and current date. 1 day = 24 hrs, 
1 month = xx days * 24: use switch statement here, 1 year = 365 * 24 */


function monthsToHours(month){
    switch(month){
        case 1: 
            return 0;
            
        case 2:
            return (31 *24);
            
        case 3:
            return (31+28) * 24;
            
        case 4:
            return (31+28+31) *24;
            
        case 5:
            return (31+28+31+30) *24;
            
        case 6:
            return  (31+28+31+30+31) *24;
            
        case 7:
            return  (31+28+31+30+31+30) *24;
            
        case 8:
            return  (31+28+31+30+31+30+31) *24;
            
        case 9:
            return  (31+28+31+30+31+30+31+31) *24;
                  
        case 10:
            return (31+28+31+30+31+30+31+31+30) *24;
            
        case 11:
            return  (31+28+31+30+31+30+31+31+30+31) *24;
            
        default:
            return  (31+28+31+30+31+30+31+31+30+31+30) *24;
               
    }

}

/* calculate years to hours. To find leap years divide years by four. 
Make sure answer is always rounded down
Answer will be number of leap years. turn number of leap years into hours by
(numLeap * 366 * 24). then subract numLeap from total number of years. 
Answer of this will be number of regular years. Turn regular years to hours
by (regYears + 365 *24). Finally add number of hours from leap year with 
number of hours from regular year.*/

function yearsToHours(years){
    let numLeap = Math.floor((years/4));
    let leapHours = (numLeap * 366 * 24);

    let numReg = (years - numLeap);
    let regHours = (numReg * 365 * 24);

    return (leapHours + regHours);

}

/*time to find total hours by: (dayHours + monthHours + yearHours), do this 
for current date and given birthdate. After this we will do:
(currentHours - birthdayHours), and this will give us the total hours
of the persons life. */


//start with todays date
function ageInHrs(){
let age = prompt("What is you birthday (**-**-****) ?");
let ageArrayStr = age.split("-");
let ageArrayNum = [0,0,0];

//console.log(ageArray);

for(let i = 0; i <= 2; i++){
    ageArrayStr[i]= parseInt(ageArrayStr[i]);
    ageArrayNum[i] = ageArrayStr[i];
}

var today = new Date();
todayDateArray = [today.getMonth() + 1,today.getDate(),today.getFullYear()];
console.log(todayDateArray);
let currDayHrs = todayDateArray[1] * 24;
console.log(currDayHrs);

let currMonHrs = monthsToHours(todayDateArray[0]);
console.log(currMonHrs);

let currYearHrs = yearsToHours(todayDateArray[2]);
console.log(currYearHrs);


//now for inputed date
let inputDayHrs = ageArrayNum[1] * 24;
console.log(inputDayHrs);

let inputMonHrs = monthsToHours(ageArrayNum[0]);
console.log(inputMonHrs);

let inputYearHrs = yearsToHours(ageArrayNum[2]);
console.log(inputYearHrs);

//calculate total hours for current and inputed and then subtract

let currTotalHrs = currDayHrs + currMonHrs + currYearHrs;
let inputTotalHrs = inputDayHrs + inputMonHrs + inputYearHrs;


let ageInHrs = currTotalHrs - inputTotalHrs; //YAY 



let h1 = document.createElement("h1");
let textAnswer = document.createTextNode("You are " + ageInHrs + " hours old.");
h1.setAttribute("id","ageInHrs");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}
 function reset(){
     document.getElementById("ageInHrs").remove(); 
 }

 //challenge 2
 function generateDog(){
    let image = document.createElement("img");
    let div = document.getElementById("flex-dog-gen");
    image.src = "https://placedog.net/200/200?random"
    div.appendChild(image);
 }

 //challenge 3 Rock Paper Scissors



 
 
function decideWinner(humanChoice,botChoice){
    let result = [0,0]; //[human,bot]
    
    if(humanChoice == "rock" && botChoice == "rock"){
        return result;
    }
    else if (humanChoice == "rock" && botChoice == "paper"){
        result[1] = 1;
        return result;
    }
    else if(humanChoice == "rock" && botChoice == "scissors"){
        result[0] = 1;
        return result;
    }
    else if(humanChoice == "paper" && botChoice == "paper"){
        return result;
    }
    else if(humanChoice == "paper" && botChoice == "scissors"){
        result[1] = 1;
        return result;
    }
    else if(humanChoice == "paper" && botChoice == "rock"){
        result[0] = 1;
        return result;
    }
    else if(humanChoice = "scissors" && botChoice == "rock"){
        result[1] = 1;
        return result;
    }
    else if(humanChoice = "scissors" && botChoice == "scissors"){
        return result;
    }
    else{
        result[0] = 1;
        return result;
    }


}

function finalMessage(result){
    if (result[0] == 0 && result[1] == 0){
        return {"message": "You have tied.", "color": "yellow"};
    
    }

    else if (result[0] == 1 && result[1] == 0){
        return {"message": "You have won.", "color": "green"};
    }

    else{
        return {"message":"You have lost.","color": "red"};
    }
}
 
function rpsFrontEnd(yourChoice, botChoice, message){
var imageDataBase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src};

    //remove all current images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDataBase[yourChoice] + "' height = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>" 
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDataBase[botChoice] + "' height = 150 width = 150 style= 'box-shadow: 0px 10px 50px rgba(243,30,24,1);'>"

    document.getElementById("flex-box-3-div").appendChild(botDiv);
    document.getElementById("flex-box-3-div").appendChild(humanDiv);
    document.getElementById("flex-box-3-div").appendChild(messageDiv);

}

function rpsGame(yourChoice){
    var humanChoice, botChoice, possiblities = ["rock","paper","scissors"];
    humanChoice = yourChoice.id;
    botChoice = possiblities[Math.floor(Math.random() * possiblities.length)];
    var results = decideWinner(humanChoice, botChoice);
    var message = finalMessage(results);
    console.log(humanChoice + " " + botChoice);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
 }

 //challenge 4 change the colors of buttons based on selected option
 var all_buttons = document.getElementsByTagName('button');

 var copyAllButtons = [];
 for(let i = 0; i < all_buttons.length; i++){
     copyAllButtons.push(all_buttons[i].classList[1]);
 }

 function buttonColorChange(button){
     if(button.value === 'red'){
         buttonRed();
     } else if(button.value === 'green'){
         buttonGreen();
     }  else if(button.value === 'reset'){
         buttonReset();
     }  else if(button.value === 'random'){
         randomColor();
     }
 }

 function buttonRed(){
     for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
     }
 }
 function buttonGreen(){
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
 }
 function buttonReset(){
    for(let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
 }
 function randomColor(){
    var choices = ['btn-primary','btn-warning','btn-success','btn-danger'];
    //var randomColor = choices[Math.floor(Math.random() * random.length)];
    for(let i = 0; i < all_buttons.length; i++){
        var randomColor = choices[Math.floor(Math.random() * choices.length)];
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(randomColor);
    }
    }

    //challenge 5 Blackjack
    
    let blackjackGame = {
        'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box','score':0},
        'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box','score':0},
        'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
        'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1, 11]},
        'wins': 0,
        'losses':0,
        'draws':0,
        'isStand': false,
        'turnsOver': false,

    };
    
    const YOU = blackjackGame['you'];
    const DEALER = blackjackGame['dealer'];

    const hitSound = new Audio('sounds/swish.m4a');
    const winSound = new Audio('sounds/cash.mp3');
    const lostSound = new Audio('sounds/aww.mp3');

    document.querySelector('#hit').addEventListener('click',blackjackHit);
    document.querySelector('#stand').addEventListener('click',dealerLogic);
    document.querySelector('#deal').addEventListener('click',blackjackDeal);
    
    function blackjackHit(){
        if(blackjackGame['isStand'] === false){
            let card = randomCard();  
            showCard(card, YOU);
            updateScore(card,YOU);
            showScore(YOU)
            console.log(YOU['score']);
        }
    }

    function randomCard(){
        let randomIndex = Math.floor(Math.random() * 13);
        return blackjackGame['cards'][randomIndex];
    }

    function showCard(card,activePlayer){
        if(activePlayer['score'] <= 21){
            let cardImage = document.createElement('img');
            cardImage.src = `images/${card}.png`;
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
        }
    }
    
   function blackjackDeal(){
        if(blackjackGame['turnsOver'] === true){
            
            blackjackGame['isStand'] = false;
            
            let yourImages = document.querySelector('#your-box').querySelectorAll('img');
            let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

            for(i = 0; i < yourImages.length; i++){
                yourImages[i].remove();
            }

            for(i = 0; i < dealerImages.length;i++){
                dealerImages[i].remove();
            }

            YOU['score'] = 0;
            DEALER['score'] = 0;
            document.querySelector('#your-blackjack-result').textContent = 0;
            document.querySelector('#dealer-blackjack-result').textContent = 0;
        
            document.querySelector('#your-blackjack-result').style.color = '#ffffff';
            document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';
    
            document.querySelector('#blackjack-result').textContent = "Let's play";
            document.querySelector('blackjack-result').style.color = 'black';
        
            blackjackGame['turnsOver'] = false;
        }
    } 

  function updateScore(card, activePlayer){
    //if adding 11 keeps below 21, add 11. otherwise add 1
    if(card === 'A'){
    
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

  function showScore(activePlayer){
    if(activePlayer['score'] > 21){  
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}


async function dealerLogic(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
    ;
        await sleep(1000);
    }
    
    blackjackGame['turnsOver'] = true;
    
    showResult(computeWinner());
    //let winner = computeWinner();
   // showResult(winner);
    
}

// compute winner and return who just won

function computeWinner(){
    let winner;

    if(YOU['score'] <=21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            blackjackGame["losses"]++;
            winner = DEALER;

        }

        else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }

    } 
    else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame["losses"]++;
        winner = DEALER;
    }

    else if(YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner){
    let message, messageColor;

    if(blackjackGame["turnsOver"] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }

        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost!';
            messageColor = 'red';
            lostSound.play();
        }

        else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'you drew';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}