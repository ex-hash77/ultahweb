var x = document.getElementById("audio");
	const boxM = document.getElementById('btn');

	boxM.addEventListener('click',(event)=>{
		setTimeout(function box(){
			boxM.style.display = "none";

			Swal.fire({
			  imageUrl: 'https://asset.kompas.com/crops/hCsl_4aqNq0wTSM25eLta8dsGPU=/5x4:1000x667/750x500/data/photo/2020/11/21/5fb8e8551ad37.jpg',
			  imageHeight: 300,
			  imageAlt: 'A tall image'
			})
		}, 5000)
	})

	function audio(){
		x.play();

		const fireDiv = document.querySelector('.fireworksDiv');
		const fireworks = new Fireworks(fireDiv,{
			traceSpeed:1,
			delay:[15,20]
		  
		})

		fireworks.start();
	}
