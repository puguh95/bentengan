//get canvas
var	game = document.getElementById('game'),
	latar = document.getElementById('latar'),
	// about = document.getElementById('about');
	batasarea = document.getElementById('batasarea');
//end

//get context
var c_game = game.getContext('2d'),
	c_area = batasarea.getContext('2d'),
	c_latar = latar.getContext('2d');
	// c_about = about.getContext('2d');
//end

//image list
var	lapangan = new Image(),
	teksture = new Image(),
	salju = new Image(),
	ui_win = new Image(),
	benteng = new Image(),
	jalan = new Image(),
	pagar = new Image(),
	chara_win = new Image(),
	button = new Image(),
	button_pressed = new Image(),
	ui = new Image(),
	// masagi = new Image(),
	char_ui = new Image();
	
	
	
	lapangan.src = 'img/lapangan.png';
	teksture.src = 'img/sand.jpg';
	salju.src = 'img/salju.jpg';
	ui_win.src = 'img/ui_win.png';
	jalan.src = 'img/jalan.png';
	// masagi.src = 'img/masagi.png';
	pagar.src = 'img/pagar.png';
	benteng.src = 'img/Towergedung.png';
	chara_win.src = 'img/char_win.png';
	button.src = 'img/button.png';
	button_pressed.src = 'img/button_pressed.png',
	ui.src= 'img/ui.png',
	char_ui.src = 'img/char_ui.png';
	
//end

//image rules

//


	
//sound item	
var bg_sound = new Audio('audio/level1.mp3');
var win_sound = new Audio('audio/win.mp3');
var lose_sound = new Audio('audio/lose.mp3');
var lose_playonce = false;
var push = new Audio('audio/buttonclick.mp3');
var menolong_sound = new Audio('audio/menolong.wav');
	push.load();
	lose_sound.load();
	bg_sound.load();
	win_sound.load();
	menolong_sound.load();
	bg_sound.loop = true;
	bg_sound.volume = 0.1;
	
//end	

//
//

//list function	
window.onload = function(){
	drawlatar(c_latar,rumput);
	drawbutton(c_menu,bt_play);
	// drawarea(c_area);
	var inval;
	clearInterval(inval);
	inval = setInterval(run,10);
	
	
	
};