const start = document.querySelector('.start');
const level = document.querySelectorAll('.level');
const gameTable = document.querySelector(".gametable");
const selectLevel = (item) => {
	item.target.classList.add("active");

};

level.forEach((item) => item.addEventListener('click',selectLevel ));

function showLevel() {
	let activeLevel = document.querySelector('.active');
	let idActiveLevel = activeLevel.id;
	return idActiveLevel;
}
//получение количества карт в зависимости от уровня игры
function getNumberOfCard () {
	const idActiveLevel = showLevel();
	let numberOfCards = 0;
	switch(idActiveLevel){
		case "easy":
		    numberOfCards = 3;
		break;
		case "medium":
		    numberOfCards = 6;
		break;
		default:
		    numberOfCards = 9;
	}
    return numberOfCards;

}
// создание игрового стола
function createGameTable(){
    const cards = getNumberOfCard ();
       
    for (let i=0; i<cards; i++) {
    	    console.log(i);
    	    let card = document.createElement("div");
    	    card.classList.add('cardback');
    	    gameTable.appendChild(card);
    	    
    	    console.log(card);	
    }
}
// получение случайной карты
function getRandomCard(){
    const playCards = document.querySelectorAll('.gametable');
    const gameCards = getNumberOfCard;
    let randomCard = Math.floor(Math.random() * gameCards);
 
        for (let i = 0; i < gameCards; i++ ) {
            if (i === randomCard) { playCards[i].firstElementChild.src = "images/bug.png"; 
            }  else {
        	    playCards[i].firstElementChild.src = "images/gameover.png";
            }
        }
}
// переворот карты
function flipCard() {
	this.classList.toggle("oncliсk");
	const flippedCard = document.querySelectorAll('.gametable');
 	flippedCard.forEach(item =>
		item.addEventListener("click", startGame));
}

function startGame() {
    getNumberOfCard();
	createGameTable();
    document.querySelector('.main').classList.add('hidden');
    getRandomCard();
    flipCard();
}
debugger;
start.addEventListener ('click', startGame);
