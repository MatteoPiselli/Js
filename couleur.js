let changeColor = document.getElementById('couleur');

changeColor.addEventListener('click', function () {
	if(changeColor.style.color == 'red'){
		changeColor.style.color = 'green';
	}
	else{
		changeColor.style.color = 'red';
	}
})
