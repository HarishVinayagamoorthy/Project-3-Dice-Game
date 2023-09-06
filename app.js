let player1score = 0
let player2score = 0
let player1Turn = true

const player1scoreBox = document.getElementById("player-1-score")
const player2scoreBox = document.getElementById("player-2-score")
const player1scoreUpdate = document.getElementById("player-1-score-upadate")
const player2scoreUpdate = document.getElementById("player-2-score-upadate")

const messageText = document.getElementById("message")
const rollBtn = document.getElementById("roll-btn")
const restartBtn = document.getElementById("restart-btn")
const scoreBox1 = document.getElementById("score-box-1")
const scoreBox2 = document.getElementById("score-box-2")

rollBtn.addEventListener("click", startGame)
restartBtn.addEventListener("dblclick", startAgain)



let restartGame=()=>{
rollBtn.style.display = "none"
restartBtn.style.display = "block"  
}


  function startGame(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1score += randomNumber
        player1scoreUpdate.textContent = player1score
        player1scoreBox.textContent = randomNumber
        scoreBox1.classList.remove('active')
        scoreBox2.classList.add('active')
        messageText.textContent = "Player 2 Turn"
    }
    else {
        player2score += randomNumber
        player2scoreUpdate.textContent = player2score
        player2scoreBox.textContent = randomNumber
        scoreBox2.classList.remove('active')
        scoreBox1.classList.add('active')
        messageText.textContent = "Player 1 Turn"
    }



    if (player1score >=30) {
        messageText.textContent = "player 1 Won the Game"
        restartGame()
    }
    else if (player2score >=30) {
        messageText.textContent = "player 2 Won the Game"
        restartGame()
    }
    player1Turn = !player1Turn



}

 function startAgain(){
    player1score=0
    player2score=0
    player1Turn = true
    messageText.textContent=" Player 1 Turn"
    scoreBox2.classList.remove('active')
    scoreBox1.classList.add('active')
    player1scoreBox .textContent= "-"
    player2scoreBox .textContent ="-"
    player1scoreUpdate.textContent="0"
    player2scoreUpdate.textContent="0"
    rollBtn.style.display="block"
  restartBtn.style.display="none"

}