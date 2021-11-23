

//varible

let allButton = ["00","10","11","12","20","21","22","23","24","30","31","32","33","34","35","36"];
const player1Name="Nimatron"; //is a computer that allows one to play the game Nim.
const player2Name="Charles Leonard Bouton";// inventor of nim
let courrentPlayer=player1Name;
let playerPresRaw="";//player can take from only one raw every turn.


document.getElementById("player_turn").innerHTML ="player: " + courrentPlayer;

function addClickListener() {
	// The function add lisiner for every button.
	document.getElementById("pass").addEventListener("click",function() {
			handel_click(this);
		});
	let buttonInRaw = 0;
	for (var i = 0; i <= 3; i++) {

		for (var j = 0; j <= buttonInRaw; j++) {
		document.getElementsByName(i.toString()+j.toString())[0].addEventListener("click",function() {
			handel_click(this);
		});
		

		}

		buttonInRaw+=2;

	}
}

function handel_click(elemant) {
	// handle all click in the game 
	if (allButton.includes(elemant.name)) {// check if the button on the game.
		if (playerPresRaw!="") {
			if (playerPresRaw==elemant.name[0]) {//check if the player take elemant from the same raw.
				let index = allButton.indexOf(elemant.name.toString());
				allButton.splice(index,1);
				console.log(allButton);
				elemant.remove();
			}

		}
		else{
			playerPresRaw=elemant.name[0];// add raw number
			let index = allButton.indexOf(elemant.name.toString());
			allButton.splice(index,1);
			console.log(allButton);
			elemant.remove();
		}
		
	}
	else{//pass button click
		
		check_win();
		if (playerPresRaw=="") {
			alert("You have to take one...");
		}
		else{
			if(courrentPlayer== player1Name)
			{
				courrentPlayer=player2Name;
			}
			else{
				courrentPlayer=player1Name;
			}
			document.getElementById("player_turn").innerHTML ="player: " + courrentPlayer;
			playerPresRaw="";
		}
	}
	
}
function check_win() {
	// when player have only one element he lose.
	if (allButton.length == 1) {
		window.alert(courrentPlayer+" WIN!!!");
		location.reload();
	}


}

addClickListener();