/*changer la couleur*/
let changeColor = document.getElementById('couleur');

changeColor.addEventListener('click', function () {
	if(changeColor.style.color == 'red'){
		changeColor.style.color = 'green';
	}
	else{
		changeColor.style.color = 'red';
	}
})

/*verifier la saisie d'un user*/
let prenom = document.getElementById('name');

prenom.addEventListener('change', function(e) {
    let resultName = document.getElementById("result")
	if(prenom.value == 'Matteo'){
		resultName.innerText = 'Bonjour ' + e.target.value;
		resultName.style.color = 'green';
	}
	else{
		resultName.innerText = 'Je ne te connais pas ' + e.target.value;
		resultName.style.color = 'red';
	}	
});


