import { Proveedor } from './proveedor.js';

export class Articulo {
    constructor(nombre, email, telefono, proveedor) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.proveedor = proveedor; // Instancia de Proveedor
    }

    // Método para obtener la información del proveedor
    getInfoProveedor = () => {
        return `Proveedor: ${this.proveedor.getNombre()}, Teléfono: ${this.proveedor.getTelefono()}`;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getEmail() {
        return this.email;
    }

    getTelefono() {
        return this.telefono;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEmail(email) {
        this.email = email;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
}