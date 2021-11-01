function datosT(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(list => {
        let html = "";
        list.results.map((datos) => {
			html += `
				<div class="divP">
					<img src=${datos.image}>
					<h1>${datos.name}</h1>
					<span>${26}</span>
					<p>${datos.status}</p>
				</div>
			`;
		})
		document.querySelector('#card').insertAdjacentHTML('beforeend', html);
	})
	.catch(err => console.log(err))
}

function datosP(){
	fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(list => {
		let html = "";
		console.log(list);
		console.log(list.results[0].image);
		for(var i = 0; i <= 5; i++){
			let aleatorio = Math.floor(Math.random()*19)+0
			console.log(aleatorio);
			html += `
				<div class="divP">
					<img src=${list.results[aleatorio].image}>
					<h1>${list.results[aleatorio].name}</h1>
					<span>${26}</span>
					<p>${list.results[aleatorio].status}</p>
				</div>
			`;
		}
		document.querySelector('#cardP').insertAdjacentHTML('beforeend', html);
	})
	.catch(err => console.log(err))
}