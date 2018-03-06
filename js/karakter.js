function createchar(ctx) {
	ctx.clearRect(0,0,2000,2000);
	//buat jalan
	ctx.drawImage(jalan,0,30,jalan.width,100);
	
	//buat kendaraan
	for(var i = 0; i < object.length; i++){
	object[i].img = new Image();
	object[i].x += object[i].mod;
	object[i].isControlled = true;
	object[i].img.src=object[i].src;
	object[i].w = object[i].img.width/5;
	object[i].h = object[i].img.height/5;
	if(object[i].x >5000 && object[i].mod >0 ){
	object[i].x = Math.floor(Math.random()*(-5000+2000+1)-2000);}
	else
	if(object[i].x <-5000 && object[i].mod <0 ){
	object[i].x = Math.floor(Math.random()*(5000-2000+1)+2000);}
		ctx.drawImage(object[i].img,object[i].x,object[i].y,object[i].w,object[i].h);
	if(object[i].y <35){
		object[i].y = 35;
	}
	}
	
	//buat pagar
	ctx.drawImage(pagar,0,105,pagar.width/4,(pagar.height/4));
	ctx.drawImage(pagar,pagar.width/4,105,pagar.width/4,(pagar.height/4));
	ctx.drawImage(pagar,pagar.width/2,105,pagar.width/4,(pagar.height/4));
	
	//buat karakter
	for(var i = 0; i < chara.length; i++){
	chara[i].img = new Image();
	chara[i].img.src='img/charastandby.png';
	if((chara[i].stat=='hero') && chara[i].isControlled == true){
		chara[i].img=karakter;
	}
	else
	if((chara[i].stat=='hero') && chara[i].isControlled == false){
		chara[i].img.src='img/charastandby.png';
	}
	else
	if(chara[i].stat=='ditawan'){
		chara[i].img.src = 'img/chara.png';
	}
	else
	if((chara[i].stat=='enemy')){
	chara[i].img=karakter1;
	}
	else
	if((chara[i].stat=='tawanan')){
		chara[i].img.src = 'img/charaenemy.png';
	}
		chara[i].w = karakter.width/3.3;
		chara[i].h = karakter.height/3.3;
		mentok(game,chara[i]);
		ctx.drawImage(chara[i].img,chara[i].x,chara[i].y,chara[i].w,chara[i].h);
		getPower(i);
		if(i<chara.length/2){
		writeLocate(game,chara[i].id,(chara[i].x-(img.width/4)),(chara[i].y-(img.height/4)));
		}
	}
	
	//buat benteng
	for(var i = 0; i < tower.length; i++){
		tower[i].w = benteng.width/2.5;
		tower[i].h = benteng.height/2.5;
		ctx.drawImage(benteng,tower[i].x,tower[i].y,tower[i].w,tower[i].h);
		writeLocate(game,'tower : '+tower[i].id,tower[i].x,tower[i].y);
	}
	
	
	ctx.drawImage(button,40,500,50,50);
	ctx.drawImage(button,40,560,50,50);
	ctx.drawImage(button,100,500,50,50);
	ctx.drawImage(button,100,560,50,50);
	ctx.drawImage(button,160,500,50,50);
	ctx.drawImage(button,160,560,50,50);
	ctx.drawImage(ui,0,0,175,30);
	ctx.drawImage(ui,175,0,130,30);
	ctx.drawImage(ui,305,0,260,30);
	ctx.drawImage(ui,565,0,230,30);
	ctx.drawImage(ui,795,0,230,30);
	
	var j = 320;
	for( var i=0; i<chara.length/2; i++){
	if(chara[i].stat=='hero'){
		ctx.drawImage(char_ui,j,0,30,30);
		j = j + 40;
		}
	}
	
	// ctx.drawImage(char_ui,315,0,30,30);
	ctx.drawImage(ui,1025,0,110,30);
	ctx.drawImage(ui,1135,0,165,30);
	writeLocate(game,'score : '+score,1150,20);
	
	writeLocate(game,'A',61,588);
	writeLocate(game,'S',121,588);
	writeLocate(game,'D',181,588);
	writeLocate(game,'Q',61,528);
	writeLocate(game,'W',121,528);
	writeLocate(game,'E',181,528);
	writeLocate(game,'focus on char : '+(charfocus+1),20,20);
	writeLocate(game,'Char left : ',195,20);
	Time();
	
	// writeLocate(game,chara[1].y+chara[1].h+'--'+tower[0].y,765,20);
	
	
	
	
	//animasi tombol
	if (kode == 'Q') { //Q
				push.play();
				ctx.clearRect(40,500,50,50);
				ctx.drawImage(button_pressed,40,500,50,50);
				writeLocate(game,'Q',61,531);
			}
			if (kode == 'W') { //W
				push.play();
				ctx.clearRect(100,500,50,50);
				ctx.drawImage(button_pressed,100,500,50,50);
				writeLocate(game,'W',121,531);
			}
			if (kode == 'A') { //A
				push.play();
				ctx.clearRect(40,560,50,50);
				ctx.drawImage(button_pressed,40,560,50,50);
				writeLocate(game,'A',61,591);
			}
			if (kode == 'E') { //E
				push.play();
				ctx.clearRect(160,500,50,50);
				ctx.drawImage(button_pressed,160,500,50,50);
				writeLocate(game,'E',181,531);
			}
			if (kode == 'S') { //S
				push.play();
				ctx.clearRect(100,560,50,50);
				ctx.drawImage(button_pressed,100,560,50,50);
				writeLocate(game,'S',121,591);
			}
			if (kode == 'D') { //D
				push.play();
				ctx.clearRect(160,560,50,50);
				ctx.drawImage(button_pressed,160,560,50,50);
				writeLocate(game,'D',181,591);
			}
			
	};