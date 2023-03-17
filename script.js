/*
  Rock Paper Scissors 🚀🔥
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const Total_Scores = {
    ComputerScore: 0,
    PlayerScore: 0
  }
  
  // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
  
  function getComputerChoice() {
    const RPSchoices = ['Rock', 'Paper', 'Scissor']
    const randomNumber = Math.floor(Math.random() * 3)
    return RPSchoices[randomNumber]
  
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  
  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
  
    let score;
  
    // All situations where human draws, set `score` to 0
    if (playerChoice == computerChoice) {
      score = 0
    }
  
  
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    else if (playerChoice == 'Rock' && computerChoice == 'Scissor') {
      score = 1
  
    }
    else if (playerChoice == 'Sicssor' && computerChoice == 'Paper') {
      score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
      score = 1
    }
  
  
    // Otherwise human loses (aka set score to -1)
  
    else {
      score = -1
    }
    // return score
    return score
  }
  
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    const resultDiv=document.getElementById('result')
    const handsDiv=document.getElementById('hands')
    // const playerScoreDiv=document.getElementById('player-score')
    if(score==1)
    { 
      resultDiv.innerText=" 🎈You Win 🎉"
      
    }
    else if(score==-1){
      resultDiv.innerText=" 😎You Lose Better Luck Next Time 👍"
      
    }
    else {
     resultDiv.innerText= " Draw 🤝 ! "
    }
  
    handsDiv.innerText=`🧑‍🦰 ${playerChoice} V/S 🖥️ ${computerChoice}`
    
  }
  
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    console.log(playerChoice)
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    const score = getResult(playerChoice, computerChoice)
    if (score == 1) {
      Total_Scores['PlayerScore'] += 1
    }
    else if (score == -1) {
      Total_Scores['ComputerScore'] += 1
    }
    else { // score is 0, i.e., a draw
      // Update scores here
      Total_Scores['PlayerScore'] += 0
      Total_Scores['ComputerScore'] += 0
    }
    
    
    console.log(score)
    console.log(Total_Scores)
    showResult(score,playerChoice,computerChoice)
  
  }
  
  
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  function playGame() {
    // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // rpsButtons[0].onclick=()=>console.log(rpsButtons[0].value)
    // rpsButtons[2].onclick=()=>console.log(rpsButtons[2].value)
    // rpsButtons[1].onclick=()=>console.log(rpsButtons[1].value)
  
  
  
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  
  
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  
    // Add a click listener to the end game button that runs the endGame() function on click
    const endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame(Total_Scores)
  
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame(Total_Scores) {
    
    Total_Scores['PlayerScore']=0
    Total_Scores['ComputerScore']=0
  
     const resultDiv=document.getElementById('result')
    const handsDiv=document.getElementById('hands')
    // const playerScoreDiv=document.getElementById('player-score')
  
    resultDiv.innerText=''
    handsDiv.innerText=''
  
  }
  
  playGame()