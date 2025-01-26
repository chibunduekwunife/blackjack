const startBtn = document.getElementById("start-btn")

const slot1 = document.getElementById("c1")
const slot2 = document.getElementById("c2")
const slot3 = document.getElementById("c3")
const slot4 = document.getElementById("c4")
const slot5 = document.getElementById("c5")
const slot6 = document.getElementById("c6")

const slotA = document.getElementById("d1")
const slotB = document.getElementById("d2")
const slotC = document.getElementById("d3")
const slotD = document.getElementById("d4")
const slotE = document.getElementById("d5")
const slotF = document.getElementById("d6")

const resultEl = document.getElementById("result-el")
const hitBtn = document.getElementById("hit-btn")
const standBtn = document.getElementById("stand-btn")
const bankEl = document.getElementById("bank-el")
const resultContainer = document.getElementById("result-container")
let isPlaying = false
let cardSumPlayer = 0;
let cardSumDealer = 0;
let bank = 0;
let startGameButtonActive = true

const jitterDuration = 500;


//randomize between clubs, diamonds, hearts, spades
//randomize between all the cards
//change start game to other buttons once game has started, hit, fold

//Blackjack is a card game where the goal is to have a hand value as close to 21 as possible, without exceeding it. Each player is dealt two cards, and the dealer also gets two cards, but one is face-up. Number cards are worth their face value, face cards (Jack, Queen, King) are worth 10, and Aces can be worth 1 or 11, whichever is more beneficial. Players can choose to "hit" (get another card) or "stand" (keep their current hand). The game ends when the player stands or exceeds 21 (busting). If the player's hand value is higher than the dealer's without going over 21, they win; otherwise, the dealer wins.

//add a result animation banner that shows up on the page if you win (blackjack! or bust)
//implement the dealers table

//remember bank from each round

//stuff to add
//add it so that one a card is drawn, it is removed from the pool of random cards (can't get duplicate cards when drawing)
//add stand function (make it so as the player drwas a card, the dealer draws one too and adds to his/her own card) - compare cards when you hit the stand button
//add a "dealers cards" section at the bottom of the page that only shows the dealers first card, while the other cards are hidden
//add the option to select if you want your ace to be a 1 or 11 as button on the cards slot

//the setup
bankEl.innerHTML = `Bank: $${bank}`

const cardsURL = ['/2.png','/3.png','/4.png','/5.png','/6.png','/7.png','/8.png','/9.png','/10.png','/A.png','/J.png','/K.png','/Q.png']
const folderURL = ['/Clubs','/Diamonds','/Hearts','/Spades']


//get the start game button to render two random initial cards
//randomize folder name
//randomize card

function randomCardURL(isPlayer){

  const randomIndexCard = Math.floor(Math.random() * cardsURL.length)
  const randomIndexFolder = Math.floor(Math.random() * folderURL.length)

  let cardDirectory = '../styles/images/Flat-Playing-Cards-Set/Flat Playing Cards Set'
  cardDirectory += folderURL[randomIndexFolder] + cardsURL[randomIndexCard]

  if (isPlayer) {
    if (cardsURL[randomIndexCard] === '/2.png') {
      cardSumPlayer += 2
    } else if (cardsURL[randomIndexCard] === '/3.png') {
      cardSumPlayer += 3
    } else if (cardsURL[randomIndexCard] === '/4.png') {
      cardSumPlayer += 4
    } else if (cardsURL[randomIndexCard] === '/5.png') {
      cardSumPlayer += 5
    } else if (cardsURL[randomIndexCard] === '/6.png') {
      cardSumPlayer += 6
    } else if (cardsURL[randomIndexCard] === '/7.png') {
      cardSumPlayer += 7
    } else if (cardsURL[randomIndexCard] === '/8.png') {
      cardSumPlayer += 8
    } else if (cardsURL[randomIndexCard] === '/9.png') {
      cardSumPlayer += 9
    } else if (cardsURL[randomIndexCard] === '/10.png') {
      cardSumPlayer += 10
    } else if (cardsURL[randomIndexCard] === '/J.png') {
      cardSumPlayer += 10
    } else if (cardsURL[randomIndexCard] === '/Q.png') {
      cardSumPlayer += 10
    } else if (cardsURL[randomIndexCard] === '/K.png') {
      cardSumPlayer += 10
    } else if (cardsURL[randomIndexCard] === '/A.png') {
      cardSumPlayer += 11
    } 
  } else if (!isPlayer) {
    if (cardsURL[randomIndexCard] === '/2.png') {
      cardSumDealer += 2
    } else if (cardsURL[randomIndexCard] === '/3.png') {
      cardSumDealer += 3
    } else if (cardsURL[randomIndexCard] === '/4.png') {
      cardSumDealer += 4
    } else if (cardsURL[randomIndexCard] === '/5.png') {
      cardSumDealer += 5
    } else if (cardsURL[randomIndexCard] === '/6.png') {
      cardSumDealer += 6
    } else if (cardsURL[randomIndexCard] === '/7.png') {
      cardSumDealer += 7
    } else if (cardsURL[randomIndexCard] === '/8.png') {
      cardSumDealer += 8
    } else if (cardsURL[randomIndexCard] === '/9.png') {
      cardSumDealer += 9
    } else if (cardsURL[randomIndexCard] === '/10.png') {
      cardSumDealer += 10
    } else if (cardsURL[randomIndexCard] === '/J.png') {
      cardSumDealer += 10
    } else if (cardsURL[randomIndexCard] === '/Q.png') {
      cardSumDealer += 10
    } else if (cardsURL[randomIndexCard] === '/K.png') {
      cardSumDealer += 10
    } else if (cardsURL[randomIndexCard] === '/A.png') {
      cardSumDealer += 11
    } 
  }

  return cardDirectory
  
}

function changeClassList(jackPot){

  resultContainer.classList.add("neutral")
  
  if (resultContainer.classList.contains("neutral") && jackPot === "yes"){
    resultContainer.classList.remove("neutral")
    resultContainer.classList.add("win")
  } else if (resultContainer.classList.contains("neutral") && jackPot === "no"){
    resultContainer.classList.remove("neutral")
    resultContainer.classList.add("loss")
  } else {
    resultContainer.classList.remove("win")
    resultContainer.classList.remove("loss")
    resultContainer.classList.add("neutral")
  }

}

function renderCards(slot, isPlayer, isFirstCard){

  // let slotArray = [slot1, slot2, slot3, slot4, slot5, slot6]
  let slotInnerHTML = ''

  if (!isPlayer && !isFirstCard) {
    randomCardURL(false)
    slotInnerHTML = `<img src="../styles/images/Flat-Playing-Cards-Set/Flat Playing Cards Set/Back Covers/Pomegranate.png" alt="Card" width="100%" height="100%">`
  } else {
    slotInnerHTML = `<img src="${randomCardURL(isPlayer)}" alt="Card" width="100%" height="100%">`
  }

  //how many cards would you like to render
  slot.innerHTML = slotInnerHTML
  checkResults();
  
}

function clearCards(){

  let cardsArray = [slot1, slot2, slot3, slot4, slot5, slot6]
  let cardsArrayDealer = [slotA, slotB, slotC, slotD, slotE, slotF]

  for (let i = 0; i < cardsArray.length; i++){
    cardsArray[i].innerHTML = ''
  }

  for (let i = 0; i < cardsArrayDealer.length; i++){
    cardsArrayDealer[i].innerHTML = ''
  }

  cardSumPlayer = 0
  cardSumDealer = 0
  resultEl.innerHTML = `<em>Click the "Start Game" button below to Play!</em>`
  changeClassList();
}


function showDealerCards () {

}

//when game not started, set hit and stand buttons innactive with a red foregraound color

function addJitter(element, duration) {
  element.classList.add('jitter');
  setTimeout(() => element.classList.remove('jitter'), duration);
}

function checkResults(){

  //fix bug, it runs twice, i loose 10 instead of 20

  if (cardSumPlayer < 21){
    //do nothing
  } else if (cardSumPlayer === 21) {
    isPlaying = false

    bank += 25
    bankEl.innerHTML = `Bank: $${bank}`
    
    resultEl.innerHTML = `<em>YOU GOT JACKPOT! (${cardSumPlayer})</em>`
    addJitter(resultEl, jitterDuration)
    changeClassList('yes')
    startBtn.innerHTML = 'Play Again'
    

  } else if (cardSumPlayer > 21) {
    isPlaying = false

    bank -= 10
    bankEl.innerHTML = `Bank: $${bank}`

    resultEl.innerHTML = `<em>You lost and exceeded a total of 21 (${cardSumPlayer}))</em>`
    addJitter(resultEl, jitterDuration)
    changeClassList('no')
    startBtn.innerHTML = 'Play Again'

  } 

  //if player exceeds 21, or stands show results to the results div + animation jitter
  //you can add the result flash later
  //is playing set to false
  //clear cards
}

hitBtn.addEventListener("click", function(){

  if (isPlaying) {
    
    //add a conditional to check if the game is still going on and blackjack has not been achieved yet for each step

    if (slot3.innerHTML === '') {
      renderCards(slot3, true, false)
    } else if (slot4.innerHTML === '') {
      renderCards(slot4, true, false)
    } else if (slot5.innerHTML === '') {
      renderCards(slot5, true, false)
    } else if (slot6.innerHTML === '') {
      renderCards(slot6, true, false)
    }

    //====================

    if (slotC.innerHTML === '') {
      renderCards(slotC, false, false)
    } else if (slotD.innerHTML === '') {
      renderCards(slotD, false, false)
    } else if (slotE.innerHTML === '') {
      renderCards(slotE, false, false)
    } else if (slotF.innerHTML === '') {
      renderCards(slotF, false, false)
    }


  } else {
    //do result div animation jitter to make sure that player hits start game before clicking hit or stand
    addJitter(resultEl, jitterDuration)
  }
})

standBtn.addEventListener("click", function(){
  
  if (isPlaying) {

    if (cardSumPlayer < 21 && cardSumPlayer > cardSumDealer){

      isPlaying = false
  
      bank += 30
      bankEl.innerHTML = `Bank: $${bank}`
      
      resultEl.innerHTML = `<em>YOU WIN! (Your Sum: ${cardSumPlayer} Dealer's Sum: ${cardSumDealer})</em>`
      addJitter(resultEl, jitterDuration)
      changeClassList('yes')
      startBtn.innerHTML = 'Play Again'
  
    } else if (cardSumPlayer < 21 && cardSumPlayer < cardSumDealer){
  
        isPlaying = false
  
        bank -= 20
        bankEl.innerHTML = `Bank: $${bank}`
  
        resultEl.innerHTML = `<em>YOU LOSE! (Your Sum: ${cardSumPlayer} Dealer's Sum: ${cardSumDealer})</em>`
        addJitter(resultEl, jitterDuration)
        changeClassList('no')
        startBtn.innerHTML = 'Play Again'
    }
    
  } else {
    //do result div animation jitter to make sure that player hits start game before clicking hit or stand
    addJitter(resultEl, jitterDuration)
  }
})

startBtn.addEventListener('click', function(){
  

  if (startGameButtonActive) {

    isPlaying = true

    renderCards(slot1, true, true)
    renderCards(slot2, true, false)

    renderCards(slotA, false, true)
    renderCards(slotB, false, false)

    startBtn.textContent = 'Quit Game'

    startGameButtonActive = false

  } else if (!startGameButtonActive) {

    clearCards()

    startGameButtonActive = true

    isPlaying = false

    startBtn.textContent = 'Start Game'

  }


  if (isPlaying) {
    resultEl.innerHTML = `<em>To HIT or to STAND?</em> ♥️♠️♦️♣️`
  }

  //change the button from start game to three - Hit, Stand, or Restart (Stop Game)
})

//make quit button click, not button pressedq
// document.addEventListener('keydown', (event) => {

//   if (event.key === "q") {

//     clearCards()

//     startGameButtonActive = true

//     isPlaying = false

//     startBtn.textContent = 'Start Game'
//   }

// })
