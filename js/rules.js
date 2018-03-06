var rules = document.getElementById('rules'),
					c_rules = rules.getContext('2d');

var imagerules = [{'txt':'Anda akan disediakan beberapa karakter yang bertugas untuk merebut benteng lawan.','src':'img/rules/1.png','x':100,'y':20,'w':1100,'h':550},
					{'txt':'Kontrol salah satu karakter dan rebut benteng lawan.','src':'img/rules/2.png','x':100,'y':20,'w':1100,'h':550},
					{'txt':'Berhati - hatilah musuh bertugas melindungi benteng, dan mengejar karakter anda, jangan sampai tertangkap.','src':'img/rules/3.png','x':100,'y':20,'w':1100,'h':550},
					{'txt':'Apabila salah satu karakter tertangkap, kontrol karakter lainnya dan anda berhak menolong teman dengan menyentuh teman yang tertangkap.','src':'img/rules/5.png','x':100,'y':20,'w':1100,'h':550},
					{'txt':'Anda akan menang apabila menyentuh benteng lawan, ikuti perintah untuk melanjutkan level berikutnya.','src':'img/rules/4.png','x':100,'y':20,'w':1100,'h':550}];
var i = 0;
gambar = new Image();
gambar.onload = function() {
					c_rules.fillStyle = '#aaa000';
					c_rules.font = '9pt Arial Black';
					c_rules.fillStyle = 'black';
					c_rules.textAlign = 'left';
					c_rules.clearRect(150,20,1000,750);
					c_rules.drawImage(ui_win,imagerules[i].x,imagerules[i].y+imagerules[i].h,imagerules[i].w,100);
					c_rules.drawImage(gambar,imagerules[i].x,imagerules[i].y,imagerules[i].w,imagerules[i].h);
					c_rules.fillText(imagerules[i].txt,imagerules[i].x+85,imagerules[i].y+imagerules[i].h+35);
					c_rules.drawImage(ui_win,imagerules[i].w-imagerules[i].x,imagerules[i].y+imagerules[i].h+40,80,30);
					c_rules.fillText('Next',imagerules[i].w-imagerules[i].x+20,imagerules[i].y+imagerules[i].h+60);
					// c_rules.fillText(i,imagerules[i].x+75,imagerules[i].y+imagerules[i].h+40);
					// c_rules.fillText(imagerules.length,imagerules[i].x+75,imagerules[i].y+imagerules[i].h+60);
}
gambar.src = imagerules[i].src;

rules.addEventListener('click', function(e) {
if(klik==true){
	i = i+1;
	
	if(i==imagerules.length){
					i = 0;
					titel.style.display='initial';
					menu.style.display='initial';
					rules.style.display='none';
	}
	gambar.src = imagerules[i].src;
}
});


rules.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(rules, evt);
		for (var i=0; i <= y.length; i++){
			if((klik == false) && (mousePos.x > imagerules[i].w-imagerules[i].x ) && (mousePos.x < imagerules[i].w-imagerules[i].x+80) && (mousePos.y > imagerules[i].y+imagerules[i].h+40) && (mousePos.y <imagerules[i].y+imagerules[i].h+70)){
				mousemove_sound.play();
				c_rules.clearRect(imagerules[i].w-imagerules[i].x,imagerules[i].y+imagerules[i].h+40,80,30);
				c_rules.drawImage(ui_win,imagerules[i].w-imagerules[i].x,imagerules[i].y+imagerules[i].h+40,80,30);
				c_rules.fillText('Next',imagerules[i].w-imagerules[i].x+20,imagerules[i].y+imagerules[i].h+62);
				
				klik = true;
				return klik;
			}
			else
			{
			c_rules.clearRect(imagerules[i].w-imagerules[i].x,imagerules[i].y+imagerules[i].h+40,80,30);
			c_rules.drawImage(ui_win,imagerules[i].w-imagerules[i].x,imagerules[i].y+imagerules[i].h+40,80,30);
			c_rules.fillText('Next',imagerules[i].w-imagerules[i].x+20,imagerules[i].y+imagerules[i].h+60);
				klik = false;			
			}
		}
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}