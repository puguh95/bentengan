(function() {
	var judul = {text:"Bentengan", x: 30, y:50};
	window.addEventListener("load",mytitel);
			function mytitel(){
				render();
			}
			
			function render(){
				var titel = document.getElementById('titel'),
					c_titel = titel.getContext('2d');
				drawText(judul);				
				function drawText(a){
					arrow_keys_handler=true;
					c_titel.font = '20pt Ravie';
					c_titel.fillStyle = '#ffdf30';
					c_titel.textAlign = 'left';
					c_titel.drawImage(karakter,0,100,100,100);
					c_titel.drawImage(karakter1,150,100,100,100);
					c_titel.fillText('vs',110,150);
					c_titel.fillText(a.text,a.x,a.y);
				}
			}
			
} ());