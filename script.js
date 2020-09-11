const start = document.querySelector('.start');
const level = document.querySelectorAll('.level');
const gameTable = document.querySelector(".gametable");
const selectLevel = (item) => {
	level.forEach((item)=>item.classList.remove("active"));
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
    	    
    	    let card = document.createElement("div");
    	    card.classList.add('cardwrap');
    	    gameTable.appendChild(card);
    	    let cardback = document.createElement('div');
    	    cardback.classList.add('cardback');
    	    card.appendChild(cardback);
    	    let cardfront = document.createElement('div');
    	    cardfront.classList.add('cardfront');
    	    card.appendChild(cardfront);
    }
}

// получение случайной карты
function getRandomCard(){
    const playCards = document.querySelectorAll('.cardfront');
    const gameCards = getNumberOfCard();
    let randomCard =  Math.floor(Math.random() * gameCards);

        for (let i = 0; i < gameCards; i++ ) {
            if (i === randomCard) {
             	playCards[i].classList.add('bug'); 
            } 
        }
}
// переворот карты

const flippedCard = document.querySelectorAll('.gametable');
const selectCard = (item) => {
     item.target.parentElement.classList.add("onclick");
     flippedCard.forEach((item) => item.addEventListener('click',goToStart))   
}

flippedCard.forEach((item) => item.addEventListener('click',selectCard)); 

// подготовка к следующему запуску игры
function goToStart(){
    document.querySelector('.main').classList.remove('hidden');
    gameTable.remove();
	gameTable.innerHTML='';
}
//запуск игры
function startGame() {
    getNumberOfCard();
	createGameTable();
    document.querySelector('.main').classList.add('hidden');
    getRandomCard();
    
}
start.addEventListener ('click', startGame);
debugger
