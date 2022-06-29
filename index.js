jQuery(document).ready(listo);

const PRODUCTOS = []

class producto{
    constructor(id, nombre, categoria, cantidad, precio){
    this.id=id;
    this.nombre=nombre;
    this.categoria=categoria;
    this.cantidad=cantidad;
    this.precio=precio;
    }
}
function listo(){
    jQuery("#agregarProductos").click(
    function agregarProducto(){
        let cantProdNuevos= parseInt(prompt("Cuantos productos desea agregar?"))
        for (i=0; i<cantProdNuevos;i++){
            const productoNuevo = new producto(
            PRODUCTOS.length+1,
            prompt("Nombre del producto"),
            prompt("Categoria"),
            parseInt(prompt("Cantidad")),
            parseFloat(prompt("precio")),
            )
            PRODUCTOS.push(productoNuevo)
        }
        console.log(PRODUCTOS)
    }
    )

    jQuery("#eliminar").click(
        function eliminarProducto(){
            nro= parseInt(prompt("Ingrese el ID del producto a eliminar"))
            PRODUCTOS.splice( nro-1, 1)
            console.log(PRODUCTOS)
        }
    )
}

