function mundur(j,mod){
	chara[j].isControlled = true;
	if(tower[1].x > chara[j].x){
			chara[j].x += chara[j].speed * mod ;
		}
		else
		if(tower[1].x < chara[j].x){
			chara[j].x -= chara[j].speed * mod ;
		}
		if(tower[1].y < chara[j].y){
			chara[j].y -= chara[j].speed * mod ; //musuh ngejar ke atas
		}
		else
		if(tower[1].y > chara[j].y){
			chara[j].y += chara[j].speed * mod ; //musuh ngejar ke bawah
		}
}

function back(j,mod){
		chara[j].isControlled = true;
		if(tower[1].x > chara[j].x){
			chara[j].x += chara[j].speed * mod * 0.3 / chara.length;
		}
		else
		if(tower[1].x < chara[j].x){
			chara[j].x -= chara[j].speed * mod * 0.3 / chara.length;
		}
		if(tower[1].y < chara[j].y){
			chara[j].y -= chara[j].speed * mod * 0.3 / chara.length; //musuh ngejar ke atas
		}
		else
		if(tower[1].y > chara[j].y){
			chara[j].y += chara[j].speed * mod * 0.3 / chara.length; //musuh ngejar ke bawah
		}
	
}

function detectAlly(i,j,mod){ //area penglihatan musuh untuk mendeteksi player
	var angka;
	angka = Math.floor(Math.random()*(max-min+1)+min); //get random value
	chara[j].isControlled = true;
	if((chara[i].x + (chara[i].w*angka) > chara[j].x) && 
	(chara[i].x < chara[j].x + (chara[j].w*angka)) &&
	(chara[i].y + (chara[i].h*angka) > chara[j].y) && 
	(chara[i].y < chara[j].y + (chara[j].h*angka))){
		chara[j].isControlled = true;
		if(chara[i].power < chara[j].power){
			setTimeout(attack(i,j,mod),5); //musuh ngejar
		}
		else
		if(chara[i].power > chara[j].power ){
			mundur(j,mod); //musuh pulang
		}
	}
		else
			{
			back(j,mod); //musuh pulang
		}
}

function attack(i,j,mod){
		if(chara[i].x < chara[j].x){
			dir.left=true;
			dir.up=false;
			dir.down=false;
			dir.right=false;
			chara[j].x -= chara[j].speed * mod ; //musuh ngejar ke kiri
			
		}
		else
		if(chara[i].x > chara[j].x){
			dir.right=true;
			dir.up=false;
			dir.down=false;
			dir.left=false;
			chara[j].x += chara[j].speed * mod; //musuh ngejar ke kanan
			
		}
		
		if(chara[i].y < chara[j].y){
			dir.up=true;
			dir.down=false;
				dir.right=false;
				dir.left=false;
			chara[j].y -= chara[j].speed * mod ; //musuh ngejar ke atas
			
		}
		else
		if(chara[i].y > chara[j].y){
		dir.down=true;
		dir.right=false;
				dir.left=false;
				dir.up=false;
			chara[j].y += chara[j].speed * mod; //musuh ngejar ke bawah
		}
}

function mentok(canvas,i){
	if(i.x < 0){
		i.x = 0;
	}
	else 
	if(i.x > canvas.width-(i.w)){
		i.x = canvas.width-(i.w);
	}
	if(i.y < 130){
		i.y = 130;
	}
	else 
	if(i.y > canvas.height-(i.h)){
		i.y = canvas.height-(i.h);
	}
	else
	if(i.stat=='enemy'){
	if(i.x < area.x){
		i.x = area.x;
	}
	else 
	if(i.x+i.w > area.x + area.w){
		i.x = area.x + area.w - i.w;
	}
	if(i.y < area.y){
		i.y = area.y;
	}
	else 
	if(i.y + i.h > area.y + area.h){
		i.y = area.y + area.h - i.h;
	}
	}
	
}

function colide(a,b){
if((a.x + a.w  > b.x) && 
	(a.x < b.x + b.w) &&
	(a.y + a.h > b.y) && 
	(a.y < b.y + b.h)){
	if(a.isControlled == true){		
  
			if(a.y < b.y){
				a.y = b.y - a.h;
			}
			else
			if(a.x > b.x + (b.w/2)){
				a.x = b.x + b.w;
			}
			
			else
			if(a.y > b.y + (b.h/2)){
				a.y = b.y + b.h;
			}
			else
			if(a.x < b.x){
				a.x = b.x - a.w;
			}
			
			}
			
			if((a.stat=='hero') && (b.stat=='enemy')){
				// if(a.power > b.power){
				// tawananY[0] = tawananY[0] + b.h;
				// b.x = tower[0].x+b.w;
				// b.y = tower[0].y + tawananY[0];
				// b.stat = 'tawanan';
				// score += 10;
				// console.log('menangkap!, dapat score');
				// }
				// else
				if(a.power<b.power){
				a.x = tower[1].x - a.w;
				tawananY[1] = tawananY[1] + a.h;
				a.y = tower[1].y + tawananY[1];
				a.stat = 'ditawan';
				score -= 10;
				tawanan +=1;
				console.log('tertangkap!, minus score');
				}
			}
			if(a.stat=='hero' && b.stat=='ditawan'){
				menolong_sound.pause();
				menolong_sound.currentTime = 0;
				menolong_sound.play();
				b.x = tower[0].x+tower[0].w+50;
				tawananY[1] = tawananY[1] - a.h;
				b.stat = 'hero';
				score += 50;
				tawanan -= 1;
				console.log('menolong!, dapat score');
				}
			if((a.stat=='hero')&&(b==tower[1])){
				tawanan = 0;
				for (var i=0; i<chara.length/2; i++ ){
				chara[i].stat='hero';
				chara[i].isControlled = true;
				}
				// tawananY[0] = 0;
				tawananY[1] = 0;
				win_sound.play();
				win = true;
				score += 100;
				// wincount ++;
			}
		if((a.stat=='ditawan') && (a.x!=tower[1].x - a.w) && (a.y!=tower[1].y)){
			a.x = tower[1].x - a.w;
			a.y = tower[1].y + tawananY[1];
		}
	}
	// if((a.x + a.w > b.x) && (a.x < b.x + b.w) && (a.y + a.h > b.y) &&(a.y < b.y + b.h)){
	 
	// }
}