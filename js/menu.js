	var menu = document.getElementById('menu');
			c_menu = menu.getContext('2d');
	//deklarasi audio && image
	var bgmenu = new Image(),
			bt_play = new Image(),
			rumput = new Image(),
			// masagi = new Image(),
			
			clicked_sound = new Audio('audio/ting.mp3'),
			mousemove_sound = new Audio('audio/mose.wav');

	//source image
			// masagi.src = 'img/masagi.png';
			bgmenu.src = 'img/bgmenu.png';
			rumput.src = 'img/rumput.jpg';
			bt_play.src = 'img/menu.png';

	//boolean klik	
	var klik = false,
			laman = 0;

	//load audio && image
			clicked_sound.load();
			mousemove_sound.load();
			
			
	var x = [500,500,500]; //x posisi akan digambar dicanvas
	var sx = [0,330,0]; //x asal gambar dicrop
	var y = [210,350,490]; //y posisi akan digambar dicanvas
	var sy = [0,0,190]; //y asal gambar dicrop
	var w = [300,300,300]; //panjang gambar dicrop
	var h = [105,105,105]; //lebar gambar dicrop
	var sw = [300,300,300]; //size panjang digambar dicanvas
	var sh = [105,105,105]; //size lebar digambar dicanvas


menu.addEventListener('load',function(){
	
	
}, true);

menu.addEventListener('click',function(){
	if (klik == true){
		
		clicked_sound.play();
		if ((laman == 0)){
			menu.style.display='none';
			about.style.display='none';
			titel.style.display='none';
			rules.style.display='none';
			game.style.display='initial';
			batasarea.style.display = 'initial';
			bg_sound.currentTime = 0;
			bg_sound.play();
			drawlatar(c_latar,teksture);
			
			
		}
		else
		if ((laman == 1)){
					// c_menu.clearRect(0,0,2000,2000);
					
					about.style.display='none';
					titel.style.display='none';
					menu.style.display='none';
					// rules.style.display='none';
					rules.style.display='initial';
					
		}
		else
		if ((laman == 2)){
					rules.style.display='none';
					about.style.display='initial';
		}
		
		// menu.mousemove;
	}
});


menu.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(menu, evt);
		for (var i=0; i <= y.length; i++){
			if((klik == false) && (mousePos.x > x[i] ) && (mousePos.x < x[i]+w[i]) && (mousePos.y > y[i]) && (mousePos.y < (y[i]+h[i]))){
				mousemove_sound.play();
				x[i] = mousePos.x - 150;
				if(x[i]>550){
					x[i]=550;
				}
				else
				if(x[i] < 450){
					x[i]=450;
				}
				
				drawbutton(c_menu,bt_play);
				klik = true;
				laman = i;
				return klik,laman;
			}
			else
			{
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


function drawbutton(ctx,img){
	for (var i=0; i <= y.length; i++){
		ctx.clearRect(450,y[i],400,105);
		ctx.drawImage(img,sx[i],sy[i],w[i],h[i],x[i],y[i],sw[i],sh[i]);
		// ctx.clearRect(menu.width-230,menu.height-130,masagi.width/6,masagi.height/6);
		// ctx.drawImage(masagi,menu.width-230,menu.height-130,masagi.width/6,masagi.height/6);
	}
}

function drawbgmenu(ctx,a,b){
	ctx.clearRect(0,0,2000,2000);
	pattern = ctx.createPattern(b,'repeat');
	ctx.rect(0,0,menu.width,menu.height);
	ctx.fillStyle = pattern;
	ctx.fill();
	// ctx.drawImage(a,0,0,menu.width,menu.height);
	
}

