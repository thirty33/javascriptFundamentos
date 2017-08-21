// const crearPelicula = (name, ageLimit, asWithAdult=false) => {
	// 	var pelicula = {
	// 		name: name,
	// 		limite: ageLimit,
	// 		company: asWithAdult,
	// 	}

	// 	return pelicula
	// }

	// const crearPersona = (name, age) => {
	// 	var persona = {
	// 		name: name,
	// 		age: age,
	// 	}

	// 	return persona
	// }

	// const puedeEntrar = (persona, pelicula) => {

	// 	if(persona.age < pelicula.limite && pelicula.company == false) {
			
	// 		return false
	// 	}

	// 	else {
			
	// 		return true
	// 	}

	// }

	// const confirmar = (persona, pelicula) => {
	// 	if(puedeEntrar(persona, pelicula ) == true) {
	// 		console.log(`la persona: ${persona.name} de edad: ${persona.age} puede entrar a: ${pelicula.name}`)
	// 	}
	// 	else if(puedeEntrar(persona, transformers) == false){
			
	// 		console.log(`la persona: ${persona.name} de edad: ${persona.age} no puede entrar a: ${pelicula.name}`)
	// 	}
		
	// }

	// const transformers = crearPelicula('transformers', 14, false)
	// const fiftyShadows = crearPelicula('50 sombras de grey', 18, false)
	// const mickyMouse = crearPelicula('mickyMouse', 13, true)


	// const Laddy = crearPersona('laddy', 8)
	// const Carlos = crearPersona('Carlos', 13)

	// console.log(confirmar(Carlos, transformers))
	// console.log(confirmar(Laddy, fiftyShadows))
	// console.log(confirmar(Laddy, mickyMouse))


	// inventando idiomas 

	// function platzoom(str) {
	// 	let translation = str

	// 	translation = translation.toLowerCase().endsWith('ar') ? translation.slice(0,-2) : translation 

	// 	translation = translation.toLowerCase().startsWith('z') ? `${translation}pe` : translation

		

	// 	// si tiene 10 o mas letras se debe partir a la mitad y unir con un guion en el medio

	// 	const length = translation.length
	// 	const half = Math.round(length/2)

	// 	translation = length >= 10 ? `${translation.slice(0,half)} - ${translation.slice(half)}}` : translation 


	// 	const reverse = str => str.toLowerCase().split('').reverse().join('')
	// 	const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')

	// 	translation = str == reverse(str) ? minMay(str) : translation

	// 	return translation
		
	// }

	// console.log(platzoom('programar'))
	// console.log(platzoom('Zorro'))
	// console.log(platzoom('jijijijiji'))
	// console.log(platzoom('arepera'))

	// const sasha = 'sasha'
	// const dias = [
	// 	"lunes",
	// 	"martes",
	// 	"miercoles",
	// 	"jueves",
	// 	"viernes",
	// 	"sabado",
	// 	"domingo",
	// ]

	// const correr = () => Math.round(Math.random() * (10)) + 5
		
	// let totalkm = 0	

	// for (let i=0; i<dias.length; i++){
	// 	const km = correr()
	// 	totalkm += km
	// 	console.log(`el dia ${dias[i]} `)
	// }

	// console.log(`corrio ${totalkm} kilometros`)

	// const prom = totalkm/dias.length
	// console.log(` el promedio es ${prom.toFixed(2)}`)



	// // pelea goku y superman

	// let vidaGoku = 100
	// let vidaSuperman = 100
	// let round = 1

	// const minPower = 5
	// const maxPower = 12 

	// const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0

	// const randomAtack = () => Math.round(Math.random() * (maxPower - minPower) + minPower)

	// const comenzarPelea = () => {

	// 	let turno = 0 	
	// 	while(ambosSiguenVivos()) {
	// 		turno++
	// 		perdidaGoku = randomAtack()
	// 		perdidaSuperman = randomAtack()

	// 		vidaGoku -= perdidaGoku
	// 		vidaSuperman -= perdidaSuperman




	// 	}


	// 	if(vidaSuperman > 0 && vidaGoku < 0){
	// 		return 'gano Superman'
	// 	}
	// 	else {
	// 		return 'gano Goku'
	// 	}

	// }

	// console.log(comenzarPelea())


	// function Punto(x,y) {
	// 	this.x = x
	// 	this.y = y

	// }

	// Punto.prototype.moverEnX = function moverEnX(x){
	// 	this.x += x
	// } 

	// Punto.prototype.moverEnY = function moverEnY(y){
	// 		this.y += y
	// } 

	// Punto.prototype.distancia = function distancia(p){

	// 	const x = this.x - p.x
	// 	const y = this.y - p.y


	// 	return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
	// }

	

	// const punto = {
	// 	init: function init(x,y) {
	// 		let obj =Object.create(this)
	// 		obj.x = x
	// 		obj.y = y
	// 		return obj

	// 	},
	// 	moverEnX: function moverEnX(x) {
	// 		this.x += x 
	// 	},
	// 	moverEnY: function moverEnX(y) {
	// 		this.y += y 
	// 	},
	// 	distancia: function distancia(p) {
	// 		const x = this.x - p.x
	// 		const y = this.y - p.y


	// 		return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
	// 	},

	// }

	// class punto {
	// 	constructor(x,y) {
	// 		this.x = x	
	// 		this.y = y
	// 	}

	// 	moverEnX(x) {
	// 		this.x += x
	// 	}
	
	// 	moverEnY(y) {
	// 		this.y += y
	// 	}

	// 	distancia(p) {
	// 		const y = this.y - p.y
	// 		const x = this.x - p.x


	// 		return Math.sqrt(Math.pow(x,2) + Math.pow(y,2))
	// 	}
	// }

	// const p1 = new punto(0,4)
	// const p2 = new punto(3,0)


	
	// let p1 = punto.init(1,4)
	// let p2 = punto.init(2,6)


	// console.log(`la cordenadas del punto1 son ${p1.x} y ${p1.y}`)
	// console.log(`la cordenadas del punto2 son ${p2.x} y ${p2.y}`)


	// function SaludarJoel() {
	// 	const nombre = 'joel'

	// 	for(let i=0; i<10; i++ ){
	// 		console.log('hola' + " " + nombre)
	// 	}
	// }

	// SaludarJoel()

	
	// function suma(...numeros) {
	// 	// console.log(numeros)
	// 	let acum = 0;
	// 	// for(let i=0; i<numeros.length; i++){
	// 	// 	acum += numeros[i]

	// 	// }



	// 	return numeros.reduce(function(acum, numero){
	// 		acum+= numero
	// 		return acum
	// 	}, 0)
		
	// }

	// function dobles(...numeros) {
	// 	// const resultado = []
	// 	// for (let i = 0; i<numeros.length; i++){
	// 	// 	resultado.push(numeros[i]*2)
	// 	// }
	// 	// return resultado

	// 	numeros.map(numero => numero * 2)
		
	// }

	// const dobles = (...numeros)=> numeros.map(numero => numero*2)

	// const pares = (...numeros)=>numeros.filter(numero => numero%2==0)

	// const imPares = (...numeros)=>numeros.filter(numero => numero%2!=0)


	// console.log(suma(3,4,5,7))
	// console.log(dobles(3,4,5,7))
	// console.log(pares(3,4,5,7))
	// console.log(imPares(3,4,5,7))
	


	

	// class persona {
	// 	constructor (nombre, edad){
	// 		this.nombre = nombre
	// 		this.edad = edad
	// 	}

	// }

	// const carlos = new persona('carlos', 14)
	// const maria = new persona('maria', 17)
	// const juana = new persona('juana', 20)
	

	// const personas = new Array()

	// personas.push(carlos)
	// personas.push(maria)
	// personas.push(juana)

	// const imprimirArray = (array)=>array.map(persona => `el nombre es ${persona.nombre} la edad ${persona.edad}`)

	// console.log(imprimirArray(personas))

	// Entiendo los clousures en javascript 

	// function saludarFamilia(apellido) {
	// 	return function saludarmiembro(nombre){
	// 		console.log(`hola ${nombre} ${apellido}`)
	// 	}
	// }

	// const saludarSuarez = saludarFamilia('suarez')
	// const saludarRojas = saludarFamilia('rojas')

	// saludarSuarez('joel')
	// saludarRojas('Boris')


	// function makePrefixer(prefixer) {
	// 	return function palabra(word){
	// 		console.log(`${prefixer}${word}`)
	// 	}
	// }

	// const makePrefixer = (prefixer) => (word)=>console.log(`${prefixer}${word}`)

	// const prefixerRe = makePrefixer('re')
	// prefixerRe('bueno')
	// const prefixerIn = makePrefixer('in')
	// prefixerIn('creible')





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


var persona = {
	nombre:'joel',
	apellido:'suarez',
}

function saludar(veces, uppercase) {
	let str = `${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for (let i = 0;i<veces; i++){
		console.log(str )
	}
}

// saludar(3)


// saludar.call(persona,3, true)
// saludar.apply(persona, [3,true])
const param = [3,true]
saludar.call(persona,...param)



// Programa que devuelve la media de un objeto

function contar() {
	this.sum = 0
	this.cont = 0
}

contar.prototype.add = function(array) {
	array.forEach(function(num) {
		this.sum += num
		++this.cont
	}.bind(this))
}

var obj = new contar()
obj.add([2,5,9])
console.log('este es el contador' ,obj.cont)
console.log('este es la suma',obj.sum)

// otra manera de hacerlo


var contar = {
	suma: 0,
	cont: 0,
	
}

function agregar(array){
	array.forEach( function(index) {
		console.log('entra al forEach')
		this.suma += index
		++this.cont	
	},this)

	console.log(`la suma total es ${this.suma}`)
}


agregar.call(contar, [5,10,56,7])
console.log('este es el valor de contar.sum', contar.suma)
console.log('este es el valor de contar.cont', contar.cont)



// Explicacion de ejecucion de codigo,
// javascript ejecuta una sola cosa 


console.log('hola')

setTimeout(function (){
	console.log('medio')

},0 )

console.log('chau')


// 

setTimeout(function callback(){
	console.log("ya paso 3 segundo")}
	, 1000)



console.log('hola')


// funciones recursivas

// secuencia de numeros fibonacci


console.log('secuencia fibonacci')

const numerosSecuencia = new Array(0)


function mostrar(array){
	array.forEach((item,index)=>{
		console.log(`${item} en la pos ${index}`)
	})
}

function fibonacci(array){
	const ult = array[array.length-1]
	const penUlt = array[array.length-2]
	const suma = ult + penUlt

	return array.push(suma)

}

function suma(nVeces,array){

	for(let i=0; i<nVeces; i++){
		fibonacci(array)
	}
}


function retornarIndex(array,num){
	let pos = 0
	array.forEach(function(item,index){
			++pos
			console.log(`este es el index ${index}`)
			if(array[item] == num) {
				console.log(`entra en el index ${index}`)
				console.log(`esto es pos ${pos-1}`)
				return (pos-1) 
			}else
			 return'no existe el numero'
			})
}


function fiboRecursivo(num) {
	if(num == 1) return 0 
	if(num ==2) return 1

	return fiboRecursivo(num-1) + fiboRecursivo(num-2) 
}

function fibonacciArray(num, array ={}){
	if(array[num]) return array[num]
	if(num == 1) return 0 
	if(num ==2) return 1
	
	return array[num] = fibonacciArray(num-1, array) + fibonacciArray(num-2,array) 

}

numerosSecuencia.push(0)
numerosSecuencia.push(1)
suma(16, numerosSecuencia)
console.log(mostrar(numerosSecuencia))

// console.log(`en la posicision 5 esta ${retornarIndex(numerosSecuencia,5)}`)


console.log(`fiboRecursivo en pos 5 es ${fiboRecursivo(5)}`)




