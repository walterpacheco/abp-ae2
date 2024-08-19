// combine.js

import { Proveedor } from './proveedor.js';

export const combinarProveedores = (proveedor1, proveedor2) => {
    return {
        ...proveedor1,
        ...proveedor2,
    };
};