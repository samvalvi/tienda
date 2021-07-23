const estadoInicial = {
    productos: [
        { id: 1, nombre: 'Producto A' },
        { id: 2, nombre: 'Producto B' },
        { id: 3, nombre: 'Producto C' },
        { id: 4, nombre: 'Producto D' }
    ],
    bag: []
}

const reducer = (state= estadoInicial, accion) => {
    switch(accion.type){
        case 'AGREGAR_A_LA_BOLSA':
            const {nombre, idProducto} = accion;

            if (state.bag.length === 0){
                return {
                    ...state,
                    bag: [{id: idProducto, nombre: nombre, cantidad: 1}]
                }
            }else{
                const newBag = [...state.bag]

                const existe = newBag.filter(item => {
                    return item.id === idProducto
                }).length > 0

                if(existe){
                    newBag.forEach((item, index) => {
                        if(item.id === idProducto){
                            const cantidad = newBag[index].cantidad;
                            newBag[index] = {
                                id: idProducto,
                                nombre: nombre,
                                cantidad: cantidad + 1
                            }
                        }
                    });
                }else{
                    newBag.push({
                        id: idProducto,
                        nombre: nombre,
                        cantidad: 1
                    })
                }

                return {
                    ...state, bag: newBag
                }
            }

        default:
            return state;
    }
}

export default reducer;