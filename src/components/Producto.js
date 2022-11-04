import React from "react";

const Producto = ({producto, productos, carrito, agregarProducto, }) => {

    const {nombre, precio, id} = producto

    //Agregando al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0]

        agregarProducto([
            ...carrito,
            producto
        ])
    }

    //Eliminar un producto del carrito
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto=>producto.id!==id)

        //colocar los productos en el state
        agregarProducto(productos)
    }

    return (
    <div>
        <h2>{nombre}</h2>
        <p>Precio: C${precio}</p>
        
        {productos ? 
            (<button
                type="button"
                onClick={()=>seleccionarProducto(id)}
            >Comprar</button>)
        :
            (
                (<button
                    type="button"
                    onClick={() => eliminarProducto(id)}
                >Quitar</button>)
            )
        }
    </div>
)}

export default Producto