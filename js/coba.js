	c_game.width = menu.width;
	c_game.height = menu.height;
	
//character
var level = [];

level[0] = [ 		{"id":"Q","stat":"hero","speed":100,"power":0,"x":100,"y":200,"w":0,"h":0},
                  {"id":"W","stat":"hero","speed":100,"power":0,"x":150,"y":250,"w":0,"h":0},
                  // {"id":"3S","stat":"hero","speed":100,"power":0,"x":300,"y":300,"w":0,"h":0},
                  // {"id":"4W","stat":"hero","speed":100,"power":10,"x":250,"y":300,"w":0,"h":0},
									// {"id":"5D","stat":"hero","speed":200,"power":10,"x":100,"y":450,"w":0,"h":0},
					
									{"id":"6","stat":"enemy","speed":50,"power":10,"x":700,"y":100,"w":0,"h":0},
                  {"id":"7","stat":"enemy","speed":50,"power":10,"x":750,"y":350,"w":0,"h":0}
                  // {"id":"8","stat":"enemy","speed":50,"power":10,"x":900,"y":600,"w":0,"h":0}
									// {"id":"9","stat":"enemy","speed":50,"power":0,"x":700,"y":300,"w":0,"h":0}
									// {"id":"10","stat":"enemy","speed":100,"power":0,"x":700,"y":450,"w":0,"h":0}
				];
level[1] = [ 		{"id":"Q","stat":"hero","speed":100,"power":0,"x":100,"y":200,"w":0,"h":0},
                  {"id":"W","stat":"hero","speed":100,"power":0,"x":150,"y":250,"w":0,"h":0},
                  {"id":"E","stat":"hero","speed":100,"power":0,"x":300,"y":300,"w":0,"h":0},
                  // {"id":"4W","stat":"hero","speed":100,"power":10,"x":250,"y":300,"w":0,"h":0},
									// {"id":"5D","stat":"hero","speed":200,"power":10,"x":100,"y":450,"w":0,"h":0},
					
									{"id":"6","stat":"enemy","speed":100,"power":10,"x":700,"y":100,"w":0,"h":0},
                  {"id":"7","stat":"enemy","speed":100,"power":10,"x":750,"y":350,"w":0,"h":0},
                  {"id":"8","stat":"enemy","speed":100,"power":10,"x":900,"y":600,"w":0,"h":0}
									// {"id":"9","stat":"enemy","speed":50,"power":0,"x":700,"y":300,"w":0,"h":0}
									// {"id":"10","stat":"enemy","speed":100,"power":0,"x":700,"y":450,"w":0,"h":0}
				];

level[2] = [ 		{"id":"Q","stat":"hero","speed":100,"power":0,"x":250,"y":210,"w":0,"h":0},
                  {"id":"W","stat":"hero","speed":100,"power":0,"x":250,"y":340,"w":0,"h":0},
                  {"id":"E","stat":"hero","speed":100,"power":0,"x":250,"y":470,"w":0,"h":0},
                  {"id":"A","stat":"hero","speed":100,"power":0,"x":250,"y":600,"w":0,"h":0},
									// {"id":"5D","stat":"hero","speed":100,"power":10,"x":250,"y":330,"w":0,"h":0},
					
									{"id":"6","stat":"enemy","speed":120,"power":10,"x":700,"y":190,"w":0,"h":0},
                  {"id":"7","stat":"enemy","speed":120,"power":10,"x":700,"y":240,"w":0,"h":0},
                  {"id":"8","stat":"enemy","speed":120,"power":10,"x":750,"y":430,"w":0,"h":0},
									{"id":"9","stat":"enemy","speed":120,"power":10,"x":800,"y":560,"w":0,"h":0}
									// {"id":"10","stat":"enemy","speed":100,"power":0,"x":700,"y":330,"w":0,"h":0}
				];
				
level[3] = [ 		{"id":"Q","stat":"hero","speed":100,"power":0,"x":250,"y":210,"w":0,"h":0},
                  {"id":"W","stat":"hero","speed":100,"power":0,"x":250,"y":340,"w":0,"h":0},
                  {"id":"E","stat":"hero","speed":100,"power":0,"x":250,"y":450,"w":0,"h":0},
                  {"id":"A","stat":"hero","speed":100,"power":0,"x":200,"y":560,"w":0,"h":0},
									{"id":"S","stat":"hero","speed":100,"power":0,"x":250,"y":670,"w":0,"h":0},
					
									{"id":"6","stat":"enemy","speed":150,"power":10,"x":700,"y":190,"w":0,"h":0},
                  {"id":"7","stat":"enemy","speed":150,"power":10,"x":750,"y":340,"w":0,"h":0},
                  {"id":"8","stat":"enemy","speed":150,"power":10,"x":800,"y":490,"w":0,"h":0},
									{"id":"9","stat":"enemy","speed":150,"power":10,"x":850,"y":540,"w":0,"h":0},
									{"id":"10","stat":"enemy","speed":150,"power":10,"x":900,"y":690,"w":0,"h":0}
				];
				
level[4] = [ 		{"id":"Q","stat":"hero","speed":100,"power":0,"x":250,"y":210,"w":0,"h":0},
                  {"id":"W","stat":"hero","speed":100,"power":0,"x":250,"y":340,"w":0,"h":0},
                  {"id":"E","stat":"hero","speed":100,"power":0,"x":250,"y":450,"w":0,"h":0},
                  {"id":"A","stat":"hero","speed":100,"power":0,"x":200,"y":560,"w":0,"h":0},
									{"id":"S","stat":"hero","speed":100,"power":0,"x":250,"y":670,"w":0,"h":0},
									{"id":"D","stat":"hero","speed":100,"power":0,"x":250,"y":670,"w":0,"h":0},
									
									{"id":"6","stat":"enemy","speed":200,"power":10,"x":700,"y":190,"w":0,"h":0},
                  {"id":"7","stat":"enemy","speed":200,"power":10,"x":750,"y":340,"w":0,"h":0},
                  {"id":"8","stat":"enemy","speed":200,"power":10,"x":800,"y":490,"w":0,"h":0},
									{"id":"9","stat":"enemy","speed":200,"power":10,"x":850,"y":540,"w":0,"h":0},
									{"id":"10","stat":"enemy","speed":200,"power":10,"x":900,"y":690,"w":0,"h":0},
									{"id":"6","stat":"enemy","speed":200,"power":10,"x":700,"y":190,"w":0,"h":0}
				];				
				
//end
var chara = level[0];
var object = [{'x':Math.floor(Math.random()*-5000),'y':30,"w":0,"mod":3,"h":0,'src':'img/motor.png'},
							{'x':Math.floor(Math.random()*-3000),'y':30,"w":0,"mod":3,"h":0,'src':'img/mobil.png'},
							{'x':Math.floor(Math.random()*-1000),'y':35,"w":0,"mod":3,"h":0,'src':'img/truck.png'},
							{'x':Math.floor(Math.random()*1000),'y':35,"w":0,"mod":3,"h":0,'src':'img/truckhijau.png'},
							{'x':Math.floor(Math.random()*3000),'y':35,"w":0,"mod":3,"h":0,'src':'img/mobilbiru.png'},
							{'x':Math.floor(Math.random()*5000),'y':35,"w":0,"mod":3,"h":0,'src':'img/mobilmerah.png'},
							
							{'x':Math.floor(Math.random()*5000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/mobil1.png'},
							{'x':Math.floor(Math.random()*3000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/motor1.png'},
							{'x':Math.floor(Math.random()*1000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/mobilbiru1.png'},
							{'x':Math.floor(Math.random()*-1000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/mobilmerah1.png'},
							{'x':Math.floor(Math.random()*-3000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/truck1.png'},
							{'x':Math.floor(Math.random()*-5000),'y':85,"w":0,"mod":-3,"h":0,'src':'img/truckhijau1.png'}];

//benteng
var tower = [{'id':1,'x':150,'y':350,'w':0,'h':0},
			{'id':2,'x':850,'y':350,'w':0,'h':0}
			];
//end

//
var dir = {left:false,right:false,up:false,down:false};
var area = {'x':400,'y':200,'w':750,'h':350};
//batas penglihatan


//variabel char
	var img =  new Image();
	img.src = 'img/hero.png';
	var time = Date.now();
	var keysDown = {};
	var score = 0;
	var kode;
	var win = false;
	var attack = false;
	var charfocus = 0;
	var lose = false;
	var wincount = 0;
	var tawananY = [0,0];
	var tawanan = 0;
	var max = 4;
var min = 1;
var isControlled=false;
var angka = {};

//stop scrolling
window.addEventListener("keypress", arrow_keys_handler, false);	
var arrow_keys_handler = function(e) {
    switch(e.keyCode){
        case 37: 
		case 39: 
		case 38:  
		case 40: // Arrow keys
        case 32: e.preventDefault(); break; // Space
        default: break; // do not block other keys
    }
};


//running the game
function run(){
	var now = Date.now();
	var mod = (now - time) / 1000;
	update(mod);
	time = now;
	createchar(c_game);
}

//event listener
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
		kode = String.fromCharCode(e.keyCode);
});
window.addEventListener('keyup', function(e) {
		push.pause();
		push.currentTime = 0;
		if(win==false){
		for (var i=0; i< chara.length; i++){
					chara[i].isControlled = false;
				}
				}
    delete keysDown[e.keyCode];
});
//end event listener

//To show player power status	  
function getPower(a){
var date = new Date();
	for(var a=0; a<chara.length; a++){
		// if(chara[a].stat=='hero'){
			// if((chara[a].x + chara[a].w > tower[0].x) && 
				// (chara[a].x < tower[0].x + tower[0].w) &&
				// (chara[a].y + chara[a].h > tower[0].y) && 
				// (chara[a].y < tower[0].y + tower[0].h)){
					// chara[a].power = String(date.getTime());
			// }
		// }
		// else
		if(chara[a].stat=='enemy'){
			if((chara[a].x + chara[a].w > tower[1].x) && 
				(chara[a].x < tower[1].x + tower[1].w) &&
				(chara[a].y + chara[a].h > tower[1].y - tower[1].h) && 
				(chara[a].y < tower[1].y + tower[1].h)){
					chara[a].power = String(date.getTime());
			}
		}
	}
}



function writeLocate(canvas, message,x,y) {
    var context = canvas.getContext('2d');
        context.font = '12pt Stencil';
        context.fillStyle = 'Black';
				context.textAlign = 'left';
        context.fillText(message,x,y);
    }

//waktu
function Time(){

	var waktu = new Date();
	var detik = waktu.getSeconds();
	var menit = waktu.getMinutes();
	var jam = waktu.getHours();
	if (detik < 10){
		detik = '0'+detik;
	}
	if (menit < 10){
		menit = '0'+menit;
	}
	if (jam < 10){
		jam = '0'+jam;
	}
	writeLocate(game,String(jam+':'+menit+':'+detik),815,20);
}
//waktu

	function update(mod){
		//kendaraan bergerak
		//pause background music
		if ((32 in keysDown)) { //Space
			// bg_sound.pause();
			// game.style.display='none';
			// clearInterval(run);
			// latar.style.display='initial';
			// menu.style.display='initial';
			// drawlatar(c_latar,rumput);
			// drawbutton(c_menu,bt_play);
			// titel.style.display='initial';
			window.location.reload();
		}

		if(((89 in keysDown) || (121 in keysDown)) && (win==true)){
		if(chara == level[0]){
			win = false;
			bg_sound.pause();
				bg_sound.src = 'audio/level2.mp3';
				bg_sound.load();
				bg_sound.play();
			drawlatar(c_latar,salju);
			jalan.src = 'img/road2.png';
			ui.src= 'img/ui1.png';
			benteng.src = 'img/Towergedung2.png';
			chara = level[1];
		}
		else
		if(chara==level[1]){
			win = false;
			bg_sound.pause();
				bg_sound.src = 'audio/level3.mp3';
				bg_sound.load();
				bg_sound.play();
			drawlatar(c_latar,rumput);
			jalan.src = 'img/road.png';
			ui.src= 'img/ui2.png';
			benteng.src = 'img/Towergedung1.png';
			chara = level[2];
		}
		else
		if(chara==level[2]){
			win = false;
			bg_sound.pause();
			bg_sound.src = 'audio/level1.mp3';
			bg_sound.load();
				bg_sound.play();
				drawlatar(c_latar,teksture);
				jalan.src = 'img/road.png';
				ui.src= 'img/ui.png';
				benteng.src = 'img/Towergedung.png';
			chara = level[3];
		}
		else
		if(chara==level[3]){
			win = false;
			bg_sound.pause();
				bg_sound.src = 'audio/level2.mp3';
				bg_sound.load();
				bg_sound.play();
			drawlatar(c_latar,salju);
			jalan.src = 'img/road2.png';
			ui.src= 'img/ui1.png';
			benteng.src = 'img/Towergedung2.png';
			chara = level[4];
		}
		}

		if ((49 in keysDown)) { //1
			bg_sound.volume -= 0.01;
		}
		if ((50 in keysDown)) { //2
			bg_sound.volume += 0.01;
		}
		if ((51 in keysDown)) { //3
			// window.location.reload();
			// bg_sound.pause();
			// bg_sound.src = 'audio/level2.mp3';
			// bg_sound.load();
			// bg_sound.play();
			win = true;
			
		}

		if (win == false){
		//win audio back to 0
		win_sound.currentTime = 0;
		win_sound.pause();
		//deteksi...
		for(var i=0; i<chara.length/2; i++){
		if(chara[i].stat=='hero'){
		for(var j=chara.length/2; j<chara.length; j++ ){
						if(chara[j].stat=='enemy'){
						detectAlly(i,j,mod);
						}
					}
			}
		}
		
		
		//kendaraan
			for(var i=0; i<object.length; i++){
				for(var j=0; j<object.length; j++){
					if(i !==j){
						colide(object[i], object[j]);
					}
				}
			}
			
			
			//karakter
			for(var i=0; i<chara.length; i++){
				// colidetower(i);
				// if(lose == true){
					// kalah(j,mod);
				// }
				colide(chara[i], tower[0]);
				colide(chara[i], tower[1]);
				for(var j=0; j<chara.length; j++){
					if(i !== j){
						// checkcolision(i,j);
						colide(chara[i], chara[j]);
					}
				}
					
			}

			i=charfocus;

			//focus on char
			for(var j=0; j<chara.length/2; j++){
				if(kode == chara[j].id){
						charfocus=j;
				}
			}
			//
			
			if(chara[i].stat=='hero'){ 
					
				
				//move character
				if ((37 in keysDown)) {
					
					chara[i].x -= chara[i].speed * mod; //kiri
					chara[i].isControlled = true;
					arrow_keys_handler = true;
				}
				if ((38 in keysDown)) {
					
					chara[i].y -= chara[i].speed * mod; //atas
					chara[i].isControlled = true;
					arrow_keys_handler = true;
				}
				if ((39 in keysDown)) {
					
					chara[i].x += chara[i].speed * mod; //kanan
					chara[i].isControlled = true;
					arrow_keys_handler = true;
				}
				if ((40 in keysDown)) { 
					
					chara[i].y += chara[i].speed * mod;	//bawah
					chara[i].isControlled = true;
					arrow_keys_handler = true;
				}
			}
		}
	}
