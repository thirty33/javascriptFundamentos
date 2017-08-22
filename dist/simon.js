

function getElementByKeyCode(keyCode) {
	return document.querySelector(`[data-key = "${keyCode}"]`)
}

function deactivated(el){
	// el elemento solo queda con la clase key
	el.className = 'key'
}

function activate(keyCode, options = {}){
	const el = getElementByKeyCode(keyCode)
	el.classList.add('active')
	if(options.success) {
		el.classList.add('success')
	}else(options.fail)
	{ 
		el.classList.add('fail')
	}
	setTimeout(()=> deactivated(el),1000)
}


const niveles = 15
let teclas = generarTeclas(niveles)


function generarTeclaAleatoria(){
 	const min = 65
 	const max = 90

 	return Math.round(Math.random() * (max - min) + min)
}

function generarTeclas(niveles) {
	return new Array(niveles).fill(0).map(generarTeclaAleatoria)
}

function siguienteNivel(nivelActual){

	if(nivelActual == niveles){
		return swal({
			title: 'Ganaste',
			type: 'success',
		})
	}

	setTimeout(()=>alert(`nivel ${nivelActual+1}`),1000)

	for(let i=0; i<=nivelActual; i++){
		 setTimeout(()=> activate(teclas[i]), 1000 *(i+1))
	}

	let i =0
	let teclaActual = teclas[i]
	window.addEventListener('keydown', onKeyDown)

	function onKeyDown(ev){
		if(ev.keyCode == teclaActual) {
			activate(teclaActual, {success:true})
			i++
			if(i > nivelActual){
				window.removeEventListener('keydown', onKeyDown)
				setTimeout(()=>siguienteNivel(i))
			}
			teclaActual = teclas[i]
		} else {
			activate(ev.keyCode, {fail:true})	
			window.removeEventListener('keydown', onKeyDown)
			setTimeout(()=>alert('perdiste'),5000)
		}

	}




}

siguienteNivel(0)





