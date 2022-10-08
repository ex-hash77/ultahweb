	$(document).ready(function(){
		$("#btn").click(function(){
			$("#present").fadeOut(10000, "swing", function(){
				Swal.fire({
				  imageUrl: 'https://asset.kompas.com/crops/hCsl_4aqNq0wTSM25eLta8dsGPU=/5x4:1000x667/750x500/data/photo/2020/11/21/5fb8e8551ad37.jpg',
				  imageHeight: 300,
				  imageAlt: 'A tall image',
				  timer:2000
				})	
			})

		})
	})

	var x = document.getElementById("audio");

	function audio(){
		x.play();

		const fireDiv = document.querySelector('.fireworksDiv');
		const fireworks = new Fireworks(fireDiv,{
			traceSpeed:1,
			delay:[15,20]
		  
		})

		fireworks.start();
	}

	var warning = ['Jangan Lupa Mandi Yah !', 'Jangan Lupa Makan Yah !', 'Jangan Lupa Shallat Yah !', 'Jangan Lupa Pikirin Aku Yah !'];
function myWarning(ok) {
          for(var i=0;i<warning.length;i++) {
              setTimeout(alert(warning[i]), 1000);
          }
	         }


myWarning(warning);

