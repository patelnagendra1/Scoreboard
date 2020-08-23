var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var inputnum = document.querySelector("input");
var inputdisplay = document.querySelector("h3 span");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");


var p1score=0;
var p2score=0;
var gameof=6;
var gameover = 0;

p1button.addEventListener("click",function(){
	if(!gameover)
	{
		p1score++;
		if(p1score === gameof)
		{
			gameover=1;
			p1display.classList.add("winner");
			document.querySelector('.player1-win').style.display="block"
		}
		p1display.textContent = p1score;
	}
});

p2button.addEventListener("click",function(){
	if(!gameover)
	{
		p2score++;
		if(p2score === gameof)
		{
			gameover=1;
			p2display.classList.add("winner");
			document.querySelector('.player2-win').style.display="block"
		}
		p2display.textContent = p2score;

	}
});


resetbutton.addEventListener("click",function(){
	reset();
	
});

function reset(){
	p1score=0;
	p2score=0;
	gameover=0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	document.querySelector('.player2-win').style.display="none"
	document.querySelector('.player1-win').style.display="none"	

}

inputnum.addEventListener("change",function(){
	inputdisplay.textContent = inputnum.value;
	gameof = Number(inputnum.value);
	reset();
})