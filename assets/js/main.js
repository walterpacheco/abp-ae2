// main.js

import { Proveedor } from './proveedor.js';
import { Articulo } from './articulo.js';
import { calcularImpuesto } from './impuesto.js';
import { combinarProveedores } from './combine.js';

const validarSoloLetras = (texto) => {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
};

// Validar que el campo solo contenga números
const validarSoloNumeros = (numero) => {
    const regex = /^[0-9]+$/;
    return regex.test(numero);
};

// Función para manejar el registro del proveedor
const registrarProveedor = () => {
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const articuloProveedor = document.getElementById('articuloProveedor').value;
    const precioProveedor = document.getElementById('precioProveedor').value;

    // Validaciones
    if (!validarSoloLetras(nombreProveedor)) {
        alert('El nombre del proveedor solo puede contener letras y espacios.');
        return;
    }
    if (!validarSoloLetras(articuloProveedor)) {
        alert('El nombre del artículo solo puede contener letras y espacios.');
        return;
    }
    if (!validarSoloNumeros(precioProveedor)) {
        alert('El precio del artículo solo puede contener números.');
        return;
    }

    // Crear instancia de Proveedor
    const proveedor = new Proveedor(nombreProveedor, articuloProveedor, parseFloat(precioProveedor));

    // Mostrar los datos en pantalla
    mostrarProveedorEnPantalla(proveedor);

    // Limpiar el formulario
    document.getElementById('proveedorForm').reset();
};

// Función para mostrar los datos del proveedor en pantalla
const mostrarProveedorEnPantalla = (proveedor) => {
    const resultados = document.getElementById('resultados');
    const resultadoHTML = `
        <p><strong>Proveedor:</strong> ${proveedor.getNombre()}</p>
        <p><strong>Artículo:</strong> ${proveedor.getArticulo()}</p>
        <p><strong>Precio:</strong> $${proveedor.getPrecio()}</p>
    `;
    resultados.innerHTML = resultadoHTML;
};

document.addEventListener('DOMContentLoaded', () => {
    // Asignar el manejador de eventos al botón
    document.getElementById('registroBtn').addEventListener('click', registrarProveedor);
});
