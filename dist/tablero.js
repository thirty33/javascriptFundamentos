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

class Tablero {
	constructor(){
		this.row = new Array(8)
		this.col = new Array(
			this.row,
			this.row,
			this.row,
			this.row,
			this.row,
			this.row,
			this.row,
			this.row,
		)
	}
	agregarvalor(val, posx,posy){
		this.col[posx][posy] = val
	}	

	imprimir(x,y) {
		return this.col[x][y]
	}
		



	
		



}

// const sacha = new Persona("Sacha", ['pedro', 'maria','joel'])
// console.log(sacha.ListarAmigos())

// const tablero = new Tablero()
// tablero.agregarvalor(3, 0,0)

// console.log(tablero.imprimir(0,0))


class Toggable {
	constructor(el, div, parrafo){
		this.el = el
		this.div = div
		this.parrafo = parrafo
		this.el.innerHTML = 'Off'
		this.activated = false
		this.el.addEventListener('click', this.onClick.bind(this))
	}

	onClick(){
		this.activated = !this.activated
		this.toggleText()
		this.toggleMenu()
		this.mostrarParrafo()

	}

	toggleText() {
		this.el.innerHTML = this.activated ? 'On' : 'Off'
	}

	toggleMenu(){
		this.div.style.height = this.activated ? '500px' : '100px'

	}
	mostrarParrafo(){
		this.parrafo.style.display = this.activated ? 'block' : 'none'
	}

}




const button = document.getElementById('boton')
const menuExtendible = document.getElementById('extender')
const parrafo = document.getElementById('parrafo')

const miBoton = new Toggable(button,menuExtendible, parrafo)

