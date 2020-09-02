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

function getNumberOfCard () {
	const idActiveLevel = showLevel();
	let numberOFCards = 0;
	switch(idActiveLevel){
		case "easy":
		    numberOFCards = 3;
		break;
		case "medium":
		    numberOFCards = 6;
		break;
		default:
		    numberOFCards = 9;
	}
    return numberOFCards;

}

function createGameTable(){
    const cards = getNumberOfCard ();
    for (let i=0; i<cards; i++) {
    	let card = document.createElement("div");
    	card.classList.add('cardback');
    	gameTable.appendChild(card);
    	gameTable.innerHTML = '.cardback';

    	return card;
    }
}

function startGame() {
    getNumberOfCard();
	createGameTable();
// скрываю первую страницу
    document.querySelector('.main').classList.add('hidden');
}

start.addEventListener ('click', startGame);

debugger;