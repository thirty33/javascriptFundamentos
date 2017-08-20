
console.log('hola bebe')

function _handError(err){
   console.log(`request failed ${err}`)
}


async function getluke() {
	
	try {

	const response = await fetch('https://swapi.co/api/people/1')
	const luke = await response.json()
	const responseHomeworld = await fetch(luke.homeworld)
	luke.homeworld = await responseHomeworld.json()

	console.log(`hola amigos ${luke.name} nacio en ${luke.homeworld.name}`)
	console.log(`hola amigos ${luke.name}`)

	} catch(err) { 
		_handError(err)
	}
}


getluke()
