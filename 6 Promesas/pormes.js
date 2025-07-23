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

function mostrarLibros(lista) {
  const listaLibros = document.getElementById('listaLibros');
  listaLibros.innerHTML = '';
  lista.forEach(libro => {
    const li = document.createElement('li');
    li.innerHTML =`
    <strong>titulo: </strong>${libro.titulo} <br/>
    <strong>Año:    </strong>${libro.ano}    <br/>
    <strong>ISBN:   </strong>${libro.isbn}   <br/>
    <strong>Autor:  </strong>${libro.autor}  <br/>
    `;
    listaLibros.appendChild(li)
  })
}
mostrarLibros(data)


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
                resolve(libros)
            }, 2000)
        }
    })
}

// se llama pero concatenando dos funciones:
//  then() ===  cuando la promesa se resolvio 
// catch() ===  cuando la promesa fallo

getData()
    .then((response) => {mostrarLibros(response)})
    .catch((err)=>console.log(err.message))