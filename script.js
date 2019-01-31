//Place O or X
const smallBoxArray=document.getElementsByClassName('small-box');
let playerO=true;
let OWin=0;
let XWin=0;
const playAgainBtn=document.getElementById('play-again-btn');
const resetGameBtn=document.getElementById('reset-game-btn');

function startgame(){
	for (let i=0; i<smallBoxArray.length; i++){
		let smallBox=smallBoxArray[i];
		smallBox.onclick=function (event){
			//Change player
			if(playerO){
				smallBox.innerHTML='O';
				playerO=!playerO;
				//Check win & tie game
				checkWin();
				displayScore();
			}	
			else if(playerO==false){
				smallBox.innerHTML='X';
				playerO=!playerO;
				//Check win & tie game
				checkWin();
				displayScore();
			}
		}	
	}
}

function checkWin(){
	if ((smallBoxArray[0].innerHTML=="O"&&smallBoxArray[1].innerHTML=="O"&&smallBoxArray[2].innerHTML=="O")
	||(smallBoxArray[3].innerHTML=="O"&&smallBoxArray[4].innerHTML=="O"&&smallBoxArray[5].innerHTML=="O")
	||(smallBoxArray[6].innerHTML=="O"&&smallBoxArray[7].innerHTML=="O"&&smallBoxArray[8].innerHTML=="O")
	||(smallBoxArray[0].innerHTML=="O"&&smallBoxArray[3].innerHTML=="O"&&smallBoxArray[6].innerHTML=="O")
	||(smallBoxArray[1].innerHTML=="O"&&smallBoxArray[4].innerHTML=="O"&&smallBoxArray[7].innerHTML=="O")
	||(smallBoxArray[2].innerHTML=="O"&&smallBoxArray[5].innerHTML=="O"&&smallBoxArray[8].innerHTML=="O")
	||(smallBoxArray[0].innerHTML=="O"&&smallBoxArray[4].innerHTML=="O"&&smallBoxArray[8].innerHTML=="O")
	||(smallBoxArray[2].innerHTML=="O"&&smallBoxArray[4].innerHTML=="O"&&smallBoxArray[6].innerHTML=="O")){
		window.alert('Player O wins!');
		OWin++;
	}
	else if ((smallBoxArray[0].innerHTML=="X"&&smallBoxArray[1].innerHTML=="X"&&smallBoxArray[2].innerHTML=="X")
		||(smallBoxArray[3].innerHTML=="X"&&smallBoxArray[4].innerHTML=="X"&&smallBoxArray[5].innerHTML=="X")
		||(smallBoxArray[6].innerHTML=="X"&&smallBoxArray[7].innerHTML=="X"&&smallBoxArray[8].innerHTML=="X")
		||(smallBoxArray[0].innerHTML=="X"&&smallBoxArray[3].innerHTML=="X"&&smallBoxArray[6].innerHTML=="X")
		||(smallBoxArray[1].innerHTML=="X"&&smallBoxArray[4].innerHTML=="X"&&smallBoxArray[7].innerHTML=="X")
		||(smallBoxArray[2].innerHTML=="X"&&smallBoxArray[5].innerHTML=="X"&&smallBoxArray[8].innerHTML=="X")
		||(smallBoxArray[0].innerHTML=="X"&&smallBoxArray[4].innerHTML=="X"&&smallBoxArray[8].innerHTML=="X")
		||(smallBoxArray[2].innerHTML=="X"&&smallBoxArray[4].innerHTML=="X"&&smallBoxArray[6].innerHTML=="X")){
			window.alert('Player X wins!');
			XWin++;
	}
	else if(smallBoxArray[0].innerHTML!=''&&smallBoxArray[1].innerHTML!=''&&smallBoxArray[2].innerHTML!=''
		&&smallBoxArray[3].innerHTML!=''&&smallBoxArray[4].innerHTML!=''&&smallBoxArray[5].innerHTML!=''
		&&smallBoxArray[6].innerHTML!=''&&smallBoxArray[7].innerHTML!=''&&smallBoxArray[8].innerHTML!=''){
		window.alert('Tie game!');
	}
}

function displayScore(){
	document.getElementById('count-O-Win').innerHTML=OWin;
	document.getElementById('count-X-Win').innerHTML=XWin;
}

function playAgain(){
	for(let x=0; x<smallBoxArray.length; x++){
		smallBoxArray[x].innerHTML='';
	}	
}

function resetGame(){
	location.reload();
}

startgame()

resetGameBtn.onclick=resetGame;

playAgainBtn.onclick=playAgain;