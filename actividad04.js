const misNotas = [
    {titulo: "snippet tips", cuerpo: "how to make and use snippets"},
    {titulo: "snippet html", cuerpo: "creates a template for html"},
    {titulo: "snippet css", cuerpo: "creates a template for css"},
    {titulo: "snippet form", cuerpo: "creates a template for form"}
]

//Función que devuelve nueva dimensión de array al crear nueva nota.
const crearNota = function(lasNotas, titulo, cuerpo){
    return lasNotas.push({titulo: titulo, cuerpo: cuerpo});
}
//Función que devuelve la nota al borrarla.
const borrarNota = function(lasNotas, titulo){
    return  lasNotas.pop(lasNotas.titulo)
}

// Función que ordena las notas segun el titulo o el cuerpo.
const ordenarNotas = function(lasNotas, opcion){
   if(opcion === "titulo"){
    return lasNotas.sort(function(a,b){
        let itemA = a.titulo.toLowerCase();
        let itemB = b.titulo.toLowerCase();
        if(itemA < itemB){
            return -1
        } else if(itemA > itemB){
            return 1
        } else {
            return 0
        }
    })
    } else if(opcion === "cuerpo"){
        return lasNotas.sort(function(a,b){
            let itemA = a.cuerpo.toLowerCase();
            let itemB = b.cuerpo.toLowerCase();
            if(itemA < itemB){
                return -1
            } else if(itemA > itemB){
                return 1
            } else {
                return 0
            }
    })
        } else {
            return "Invalid input"
        }
}

//Función que busca texto en una nota y dice si el texto está o no está en esta nota.  
const buscarTextoEnNotas = function(lasNotas, elTexto){
    return lasNotas.forEach(function(elem){
        let newString = Object.values(elem).join()
        console.log(`El texto ${elTexto} ${newString.includes(elTexto) ? 'está en' : 'no está en'} esta nota`); 
    })
}   

buscarTextoEnNotas(misNotas, "css");



// const crearNota(lasNotas, titulo, cuerpo)
// const borrarNota(lasNotas, titulo)
// const ordenarNotas(lasNotas, opcion) 
// const buscarTextoEnNotas(lasNotas): laTarea
