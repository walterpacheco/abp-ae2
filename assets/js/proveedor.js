// Proveedor.js

export class Proveedor {
    constructor(nombre, articulo, precio) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.precio = precio;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getArticulo() {
        return this.articulo;
    }

    getPrecio() {
        return this.precio;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setArticulo(articulo) {
        this.articulo = articulo;
    }

    setPrecio(precio) {
        this.precio = precio;
    }
}