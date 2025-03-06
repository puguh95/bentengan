// Copyright 2013 William Malone (www.williammalone.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 
(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function () {
	
	var kar = document.getElementById('karakter'),
			c_kar = kar.getContext('2d'),
			kara_up = new Image(),
			kara_down = new Image(),
			kara_left = new Image(),
			kara_right = new Image(),
			kara_win = new Image(),
			kara_lose = new Image(),
			kara_stand = new Image();
			kara_down.src = 'img/char_player_down.png';
			kara_left.src = 'img/char_player_left.png';
			kara_right.src = 'img/char_player_right.png';
			kara_up.src = 'img/char_player_up.png';
			kara_win.src = 'img/char_win.png';
			kara_lose.src = 'img/char_lose.png';
			kara_stand.src = 'img/char_stand.png';
	
	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);
		
	  char_sprite.update();
	  char_sprite.render();
	}
	
	function kara_image() {
		if ((40 in keysDown)){
			char_sprite.image = kara_down; //bawah
		}
		if ((39 in keysDown)){
			char_sprite.image = kara_right; //kanan
		}
		if ((38 in keysDown)){
			char_sprite.image = kara_up; //atas
		}
		if ((37 in keysDown)){
			char_sprite.image = kara_left; //kiri
		}
		if (win == true){
			bg_sound.volume = 0.5;
			
			arrow_keys_handler = true;
			char_sprite.image = kara_win;
		}
		else if(win == false && tawanan==chara.length/2){
			char_sprite.image = kara_lose;
			arrow_keys_handler = true;
			char_sprite.numberOfFrames = 1;
		}
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {
			kara_image();
            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				if(arrow_keys_handler == true){
					// If the current frame index is in range
					if (frameIndex < numberOfFrames - 1) {	
						// Go to the next frame
						frameIndex += 1;
					}
					else {
						frameIndex = 0;
						arrow_keys_handler = false;
					}
				}
            }
						
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas
	c_kar.width = 140;
	c_kar.height = 140;
	
	// Create sprite
	char_sprite = sprite({
		context: c_kar,
		width: 560,
		height: 140,
		image: kara_right,
		numberOfFrames: 4,
		ticksPerFrame: 13
	});
	
	// Load sprite sheet
	kara_right.addEventListener("load", gameLoop);

} ());


(function () {
	
	var kar = document.getElementById('karakter1'),
			c_kar = kar.getContext('2d'),
			kara_up = new Image(),
			kara_down = new Image(),
			kara_left = new Image(),
			kara_right = new Image(),
			kara_win = new Image(),
			kara_lose = new Image(),
			kara_stand = new Image();
			kara_down.src = 'img/char_enemy_down.png';
			kara_left.src = 'img/char_enemy_left.png';
			kara_right.src = 'img/char_enemy_right.png';
			kara_up.src = 'img/char_enemy_up.png';
			kara_win.src = 'img/char_win1.png';
			kara_lose.src = 'img/char_lose1.png';
			kara_stand.src = 'img/char_stand1.png';
	
	function gameLoop () {
	
	  window.requestAnimationFrame(gameLoop);
		
	  char_sprite1.update();
	  char_sprite1.render();
	}
	
	function kara_image() {
	for(var i=chara.length/2; i<chara.length; i++){
			if(dir.left==true){
				char_sprite1.image = kara_left;
			}
			if(dir.right==true){
				char_sprite1.image = kara_right;
			}
			if(dir.up==true){
				char_sprite1.image = kara_up;
			}
			if(dir.down==true){
				char_sprite1.image = kara_down;
			}
			
			// if(chara[i].x < tower[1].x){
			// char_sprite1.image = kara_right; //kanan
			// }
			// char_sprite1.image = kara_down; //bawah
			
			// char_sprite1.image = kara_up; //atas
			// if(chara[i].x > tower[1].x){
			// char_sprite1.image = kara_left; //kiri
			// }
			}
		if (win == true){
			c_game.drawImage(ui_win,470,210,300,120);
			writeLocate(game,'You Win !',575,250);
			if(chara == level[0]){
				writeLocate(game,'Go to level 2 ? ( press Y )',510,300);
				}
				else
				if(chara==level[1]){
				writeLocate(game,'Go to level 3 ? ( press Y )',510,300);
				}
				else
				if(chara==level[2]){
				writeLocate(game,'Go to level 4 ? ( press Y )',510,300);
				}
				else
				if(chara==level[3]){
				writeLocate(game,'Go to level 5 ? ( press Y )',510,300);
				}
				else
				if(chara==level[4]){
				writeLocate(game,'Congratulations !',535,275);
				writeLocate(game,'You have finished all levels !',490,300);
			}
			
			arrow_keys_handler = true;
			char_sprite1.numberOfFrames = 1;
			char_sprite1.ticksPerFrame = 0;
			char_sprite1.image = kara_lose;
		}
		else if(win == false && tawanan==chara.length/2){
			c_game.drawImage(ui_win,470,210,300,120);
			writeLocate(game,'You Lose !',575,250);
			writeLocate(game,'Press space to play again',510,300);
			if(lose_playonce == false){
			lose_sound.play();
			lose_playonce = true;
			}
			arrow_keys_handler = true;
			char_sprite1.image = kara_win;
		}
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {
			kara_image();
            tickCount += 1;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {	
                    // Go to the next frame
                    frameIndex += 1;
                }
				else {
                    frameIndex = 0;
					arrow_keys_handler = false;
                }
            }
						
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,
		    that.width / numberOfFrames,
		    that.height);
		};
		
		return that;
	}
	
	// Get canvas
	c_kar.width = 140;
	c_kar.height = 140;
	
	// Create sprite
	char_sprite1 = sprite({
		context: c_kar,
		width: 560,
		height: 140,
		image: kara_left,
		numberOfFrames: 4,
		ticksPerFrame: 13
	});
	
	// Load sprite sheet
	kara_left.addEventListener("load", gameLoop);

} ());