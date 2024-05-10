let qus = document.querySelectorAll('.qus');
let spans = document.querySelectorAll('.qus span');
let answers = document.querySelectorAll('.answer');
let pLights = document.querySelectorAll('.light');

qus.forEach(function(qu,i){
	
	qu.addEventListener("click",function(){
	
	for(j of spans){
	j.classList.remove('span_color');
	}
			
	for(j of answers){
		j.style.maxHeight = null;
		}
	

	for(j of pLights){
		j.style.width = null;
		}
	
	answers[i].style.maxHeight = '100px';
	spans[i].classList.add('span_color');
	pLights[i].style.width = '100%';

	})

})