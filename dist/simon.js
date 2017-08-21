function getElementByKeyCode(keyCode) {
	return document.querySelector(`[data-key = "${keyCode}"]`)
}

function activate(keyCode, options = {}){
	const el = getElementByKeyCode(keyCode)
	el.classList.add('active')
	if(options.success) {
		el.classList.add('success')
	}
	else(options.fail) {
		el.classList.add('fail')

	}

	setTimeout(()=> deactivated(el),500)
}

function deactivated(el){
	// el elemento solo queda con la clase key
	el.className = 'key'
}

const niveles = 15
let keys = generarTeclas(niveles)


function generarTeclaAleatoria(){
 	const min = 65
 	const max = 90

 	return Math.round(Math.random() * (max - min) + min)
}

function generarTeclas(niveles) {
	return new Array(niveles).fill(0).map(generarTeclaAleatoria)
}


