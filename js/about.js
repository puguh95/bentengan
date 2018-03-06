(function() {
	window.addEventListener("load",aboutme);
			function aboutme(){
				render();
			}
			
			function render(){
				var about = document.getElementById('about'),
					c_about = about.getContext('2d');
				drawText();				
				function drawText(){
					arrow_keys_handler=true;
					c_about.fillStyle = '#aaa000';
					c_about.drawImage(ui_win,60,70,360,280);
					c_about.drawImage(ui_win,890,70,360,280);
					c_about.font = '16pt LilyUPC';
					c_about.fillStyle = '#000000';
					c_about.textAlign = 'left';
					c_about.fillText('About Creator',195,110);
					c_about.fillText('Name 													: Puguh Sudarmawanto',90,150);
					c_about.fillText('NIM 											 			: M3112111',90,180);
					c_about.fillText('Class 							 				 	: TIC 2012',90,210);
					c_about.fillText('Study Programs 	: D3 Informatics Engineering',90,240);
					c_about.fillText('Faculty 												: Mathematic and Science',90,270);
					c_about.fillText('University										: Universitas Sebelas Maret',90,300);
					c_about.fillText('About Game',1025,110);
					c_about.fillText('Title 																: Bentengan',920,150);
					c_about.fillText('Genre 														: Strategy',920,180);
					c_about.fillText('Based on 										: Indonesian Traditional Game',920,210);
					c_about.fillText('Control 												: QWEASD to choose a character',920,240);
					c_about.fillText('Arrow key to move a character',1035,270);
					c_about.fillText('For kid 5-14th only',920,300);
				}
			}
			
} ());