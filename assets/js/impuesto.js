export const calcularImpuesto = (proveedor) => {
    const tasaImpuesto = 0.10;
    return proveedor.getPrecio() * tasaImpuesto;
};