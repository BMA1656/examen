function mayor(i) {

    /// creo las variables que usare despues

    let lista = i; //lista existe para no enredarme
    let mayor = 0;

    //creo un for que recorre lista, mientas mayor sea menor al valor en la posi
    //cion de lista, ese numero sustituira a mayor, en caso contrario ahi acaba
    for (let i = 0; i < lista.length; i++) {
        if (mayor <= lista[i]) {
            mayor = lista[i]
        }

    }
    return mayor
}

function menor(i) {

    /// creo las variables que usare despues

    let lista = i; //lista existe para no enredarme
    let menor = mayor(i)



    for (let i = 0; i < lista.length; i++) {

        if (menor > lista[i]) {
            menor = menor - lista[i]
        }

        return
    }
}


function suma(i) {

    /// creo las variables que usare despues
    let lista = i; //lista existe para no enredarme
    let suma = 0;
    //hago una for que recorre la lisat y los suma
    for (let i = 0; i < lista.length; i++) {
        //suma que originalmente es 0 ahora es- 
        //  -igual al valor de suma + el numero de lista en la posicion [i]
        suma = suma + lista[i]
    }
    return suma

}


function lista(i) {

    /// creo las variables que usare despues

    let lista = i; //lista existe para no enredarme
    let mayor = 0;
    let lista2 = []

    //creo un for que recorre lista, mientas mayor sea menor al valor en la posi
    //cion de lista, ese numero sustituira a mayor, en caso contrario ahi acaba
    for (let i = 0; i < lista.length; i++) {
        if (mayor <= lista[i]) {
             lista2.push(lista[i])
        }

    }
    return lista2
    
}



module.exports = {
    mayor: mayor,
    menor: menor,
    suma: suma,
    lista:lista

}