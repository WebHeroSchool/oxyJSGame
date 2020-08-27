const start = document.querySelector('.start');
const level = document.querySelectorAll('.level');
const selectLevel = (item) => {
	item.target.classList.add("active");

};

level.addEventListener('click',selectLevel );

function createGameField(){


}

function startGame() {

}

start.addEventListener ('click', startGame);

