(function() {
	var judul = {text:"Score", x: 30, y:50};
	window.addEventListener("load",ui);
			function ui(){
				render();
			}
			
			function render(){
				var skor = document.getElementById('skor'),
					c_skor = skor.getContext('2d');
				drawText(judul);				
				function drawText(a){
					arrow_keys_handler=true;
					c_skor.fillStyle = '#bbbaaa';
					c_skor.fillRect(10,10,350,400);
					c_skor.font = '10pt Rockwell';
					c_skor.fillStyle = '#000000';
					c_skor.textAlign = 'left';
					c_skor.fillText('Score : '+score,30,120);
					
					c_skor.fillText(a.text,a.x,a.y);
				}
			}
			
} ());