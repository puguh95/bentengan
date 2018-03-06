	function drawlatar(ctx,b){
		ctx.clearRect(0,0,2000,2000);
		pattern = ctx.createPattern(b,'repeat');
		ctx.rect(0,0,game.width,game.height);
		ctx.fillStyle = pattern;
		ctx.fill();
		// ctx.drawImage(a,0,0,game.width,game.height);
	}

	function drawbgover(ctx,a,b){
		ctx.clearRect(0,0,2000,2000);
		pattern = ctx.createPattern(b,'repeat');
		ctx.rect(0,0,menu.width,menu.height);
		ctx.fillStyle = pattern;
		ctx.fill();
		ctx.drawImage(a,0,0,menu.width,menu.height);
	}
	
	function drawarea(context){
		context.stroke();
		context.strokeStyle = '#ffa500';
		context.lineWidth = 2;
		context.strokeRect(area.x,area.y,area.w,area.h);
	}
	
	