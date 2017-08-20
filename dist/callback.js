
// const promise = new Promise(function (resolve,reject){
//   setTimeOut(function(){
//     reject(new Error('se produjo un error'))
//   }, 1000)
// }) 

// promise
//   .then(function (){

// })
//   .catch(function(err){

//   })


// function get(URL,callback) {
  // const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function ()    {
//       const DONE = 4
//       const OK = 200
//       if (this.readyState === DONE) {
//       if (this.status === OK) {
//       //TODO OK
//          callback(null,JSON.parse(this.responseText))
//       } else {
//       //hubo un error
//         callback(new Error(`se produjo un error el request ${this.status}`))
//       }
//     }
// }

// xhr.open('GET', URL);
// xhr.send(null);
  
// }


function get(URL){
  const xhr = new XMLHttpRequest();
  return new Promise((resolve,reject)=> {
       xhr.onreadystatechange = function (){
        const DONE = 4
        const OK = 200
        if (this.readyState === DONE) {
        if (this.status === OK) {
        //TODO OK
           resolve(JSON.parse(this.responseText))
        } else {
        //hubo un error
          reject(new Error(`se produjo un error el request ${this.status}`))
        }
      }
  }


  xhr.open('GET', URL);
  xhr.send(null);
  })
}

function _handError(err){
   console.log(`request failed ${err}`)
}

// get('https://swapi.co/api/people/1', function onResponse(err, luke){
//     if(err) return _handError(err)
//     get(luke.homeworld, function onHomeworldResponse(err, homeworld){
//         if(err) return _handError(err)
//         luke.homeworld = homeworld 
//         console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
//     })
// })

let luke
get('https://swapi.co/api/people/1')
  .then((response)=> {
    luke = response
      return get(luke.homeworld)
  })
  .then((homeworld) =>{
    luke.homeworld = homeworld
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`)

  })
  .catch(err => _handError(err))