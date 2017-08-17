class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}

	//primera solucion para referencia this
	// ListarAmigos() {
	// 	const _this = this
	// 	this.amigos.forEach(function (amigo){ console.log(`soy ${_this.nombre} y soy amigo de ${amigo}`)})
	// }

	// segunda solucion
	// ListarAmigos() {
	// 	this.amigos.forEach(function (amigo){ console.log(`soy ${this.nombre} y soy amigo de ${amigo}`)}.bind(this))
	// }
		
	// solucion con Arrow function
	ListarAmigos() {
		this.amigos.forEach( amigo => { console.log(`soy ${this.nombre} y soy amigo de ${amigo}`)})
	}

}

const sacha = new Persona("Sacha", ['pedro', 'maria','joel'])
console.log(sacha.ListarAmigos())