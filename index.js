//Create an array of Objects to hold the cards and unique ID

const warCards = [
    {
        id:20,
        image:"./images/ace-diamond.png",
        serial:1,
    },
    {
        id:20,
        image:"./images/ace-flower.png",
        serial:2,
    },
    {
        id:20,
        image:"./images/ace-love.png",
        serial:3,
    },
    {
        id:20,
        image:"./images/ace-spade.png",
        serial:4,
    },
    {
        id:19,
        image:"./images/king-love.png",
        serial:5,
    },
    {
        id:19,
        image:"./images/king-spade.jpg",
        serial:6,
    },
    {
        id:19,
        image:"./images/flower-king.png",
        serial:7,
    },
  
    {
        id:18,
        image:"./images/queen-flower.png",
        serial:9,
    },
    {
        id:18,
        image:"./images/queen-spade.jpg",
        serial:10,
    },
    {
        id:18,
        image:"./images/queen-love.png",
        serial:11,
    },
    {
        id:18,
        image:"./images/flower-queen.jpg",
        serial:12,
    },
    {
        id:17,
        image:"./images/diamond-J.jpg",
        serial:13,
    },
    {
        id:17,
        image:"./images/j-love.png",
        serial:14,
    },
    {
        id:17,
        image:"./images/J-spade.jpg",
        serial:15,
    },
    {
        id:17,
        image:"./images/flower-Jack.png",
        serial:16,
    },
    {
        id:16,
        image:"./images/ten-love.png",
        serial:17,
    },
    {
        id:16,
        image:"./images/flower-10.png",
        serial:18,
    },
    {
        id:16,
        image:"./images/diamond-10.png",
        serial:19,
    },
    {
        id:16,
        image:"./images/10-spade.jpg",
        serial:20,
    },
    {
        id:15,
        image:"./images/9-spade.jpg",
        serial:21,
    },
    {
        id:15,
        image:"./images/diamond-9.png",
        serial:22,
    },
    {
        id:14,
        image:"./images/eight-love.png",
        serial:25,
    },
    {
        id:14,
        image:"./images/flower-8.png",
        serial:26,
    },
    {
        id:14,
        image:"./images/eight-spade.jpg",
        serial:27,
    },
    {
        id:13,
        image:"./images/7-spade.jpg",
        serial:28,
    },
    {
        id:13,
        image:"./images/flower-7.png",
        serial:29,
    },
    {
        id:13,
        image:"./images/seven-love.jpg",
        serial:30,
    },
    {
        id:12,
        image:"./images/flower-6.png",
        serial:31,
    },
    {
        id:12,
        image:"./images/six-diamond.png",
        serial:32,
    },
  
    {
        id:12,
        image:"./images/six-spade.png",
        serial:34,
    },
    {
        id:11,
        image:"./images/five-diamond.png",
        serial:35,
    },
    {
        id:11,
        image:"./images/five-love.png",
        serial:36,
    },
    {
        id:11,
        image:"./images/five-spade.jpg",
        serial:37,
    },
    {
        id:11,
        image:"./images/flower-5.png",
        serial:38,
    },
    {
        id:10,
        image:"./images/four-love.png",
        serial:39,
    },
    {
        id:10,
        image:"./images/four-spade.jpg",
        serial:40,
    },
    {
        id:10,
        image:"./images/flower-4.png",
        serial:41,
    },
    {
        id:10,
        image:"./images/diamond-4.png",
        serial:42,
    },
    {
        id:9,
        image:"./images/diamond-3.png",
        serial:43,
    },
    {
        id:9,
        image:"./images/flower-3.png",
        serial:44,
    },
    {
        id:9,
        image:"./images/three-love.png",
        serial:45,
    },
    {
        id:8,
        image:"./images/two-love.png",
        serial:46,
    },
    {
        id:8,
        image:"./images/two-spade.png",
        serial:47,
    },
    {
        id:8,
        image:"./images/flower-2.png",
        serial:49,
    },
    {
        id:10,
        image:"./images/diamond-4.png",
        serial:50,
    },
    {
        id:20,
        image:"./images/ace-diamond.png",
        serial:51,
    },
    {
        id:11,
        image:"./images/five-love.png",
        serial:52,
    },
    
    {
        id:12,
        image:"./images/six-spade.png",
        serial:34,
    },
    {
        id:11,
        image:"./images/five-diamond.png",
        serial:35,
    },
    {
        id:11,
        image:"./images/five-love.png",
        serial:36,
    },
    {
        id:11,
        image:"./images/five-spade.jpg",
        serial:37,
    },
    {
        id:11,
        image:"./images/flower-5.png",
        serial:38,
    },
]


const container = document.querySelector('.players')
const playerA = document.querySelector('.player-one')
const playerB = document.querySelector('.player-two')
const playBtn = document.querySelector('#play-btn')
const warBtn = document.querySelector('#war-btn')
const endWarBtn = document.querySelector('#end-war')

let counterA = 26
let counterB = 26


function showCards(){
        let randNumA = Math.floor(Math.random() * 52)
        let cardA = warCards[randNumA].image
        let cardIda =  warCards[randNumA].id
        
     playerA.innerHTML = `
     <h1>Player 1 score: ${counterA}</h1>
     <img src="${cardA}">`
        function showCardsB(){
        let randNumB = Math.floor(Math.random() * 52)
            let cardB = warCards[randNumB].image
            let cardId =  warCards[randNumB].id
        
        playerB.innerHTML = `
        <h1>Player 2 score: ${counterB}</h1>
        <img src="${cardB}">`
    }
    showCardsB()
     
}

let war = []
function playGame(){
    let randNumA = Math.floor(Math.random() * 52)
    //warCards.map((card)=>{
        let cardA = warCards[randNumA].image
        let cardIda =  warCards[randNumA].id
        if(counterA === 53){
            playBtn.classList.add('play-active')
            warBtn.classList.add('play-active')
            endWarBtn.classList.add('play-active')
            console.log('you have reached the end of the game,PLAYER ONE WINS!!')
        }
        else if(counterB === 53){
            playBtn.classList.add('play-active')
            warBtn.classList.add('play-active')
            endWarBtn.classList.add('play-active')
            console.log('you have reached the end of the game,PLAYER TWO WINS!!')
        }
     else{playerA.innerHTML = `
     <h1>Player 1 score: ${counterA}</h1>
     <img src="${cardA}">`
        function showCardsB(){
            let randNumB = Math.floor(Math.random() * 52)
            let cardB = warCards[randNumB].image
            let cardId =  warCards[randNumB].id
        
        playerB.innerHTML = `
        <h1>Player 2 score: ${counterB}</h1>
        <img src="${cardB}">`

        if(cardIda > cardId){

            counterA += 1
            counterB -= 1
            console.log('player one wins this round')
        }
        else if(cardIda < cardId){

            counterA -=1
            counterB += 1
            console.log('player two wins this round')
        }
        else{
            console.log('it is a tie,CLICK ON WAR BUTTON TO BEGIN WAR!!!')
        }
    }
    }
    showCardsB() 
}

warBtn.addEventListener('click',()=>{
   war = 3
   console.log('Each player has dropped their three cards, now lets determine the winner, click on the END WAR BUTTON!!')
})

//This button is when the players have started the war, and then they have picked three cards already
//so they have to pick the fourth card to determine if to continue war, or continue with the game as before
    endWarBtn.addEventListener('click',()=>{
        let randNumA = Math.floor(Math.random() * 52)
            let cardA = warCards[randNumA].image
            let cardIda =  warCards[randNumA].id
            
         playerA.innerHTML = `
         <h1>Player 1 score: ${counterA}</h1>
         <img src="${cardA}">`
            function showCardsB(){
                let randNumB = Math.floor(Math.random() * 52)
                let cardB = warCards[randNumB].image
                let cardId =  warCards[randNumB].id
            
                    playerB.innerHTML = `
                    <h1>Player 2 score: ${counterB}</h1>
                     <img src="${cardB}">`
    
            if(cardIda > cardId){
                console.log('player one wins!!')
               war = war + 1
               counterA = counterA + war
               counterB -=1
               console.log(counterA)
            }
            else if(cardIda < cardId){
                console.log('player two wins')
               war = war + 1
               counterB = counterB + war
               counterA -= 1
               console.log(counterB)
            }
            else{
                console.log('YOU NEED TO CONTINUE THE WAR, ANOTHER TIE!!,CLICK ON THE WAR BUTTON!!')
            }
            war = 0
        }
        showCardsB() 
    })
function updateUI(){
   showCards()
   
}

function updateU(){
   playGame()
}

document.addEventListener('DOMContentLoaded',updateUI)
playBtn.addEventListener('click',()=>{
   updateU()
})
