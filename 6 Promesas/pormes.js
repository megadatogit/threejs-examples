const data = [
  {
    title: 'Aprendiendo JavaScript',
    year: '2021',
    isbn: '979-8700179263',
    author: 'Carlos Azaustre'
  },
  {
    title: 'React.js Práctico',
    year: '2022',
    isbn: 'TBD',
    author: 'Carlos Azaustre'
  },
  {
    title: 'Clean JavaScript',
    year: '2020',
    isbn: '979-8567583319',
    author: 'Miguel A. Gómez'
  }
]


// resolve === para cuando ya se tengan lo requerdio (promesa resuelta)
//  reject === para cuando hay fallas (promesa fallida)

function getData() {
    return new Promise((resolve, reject) => {6
        if (data.length===0) {
            reject(
                new Error("datos no encontrados")
            )
        }
        else {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        }
    })
}

// se llama pero concatenando dos funciones:
//  then() ===  cuando la promesa se resolvio 
// catch() ===  cuando la promesa fallo

getData()
    .then((response) => console.log(response))
    .catch((err)=>console.log(err.message))