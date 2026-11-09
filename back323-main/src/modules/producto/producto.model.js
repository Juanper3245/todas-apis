import db from "../config/dbconexion.js";

export const ProductoModel = {
  findAll: async () => {
    const sql = "SELECT * FROM producto ORDER BY descripcion";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM producto WHERE id_producto=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM producto WHERE id_producto=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    // Validamos que el código no exista
    const [codigoExiste] = await db.query(
      "SELECT * FROM producto WHERE codigo = ?",
      [data.codigo]
    );
    if (codigoExiste.length > 0) {
      throw new Error("El código de producto ya está registrado");
    }
    const productoNuevo = {
      codigo: data.codigo,
      descripcion: data.descripcion,
      unidad: data.unidad,
      costo: data.costo,
      precio: data.precio,
    };
    const sql = "INSERT INTO producto SET ?";
    const [rows] = await db.query(sql, [productoNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE producto SET ? WHERE id_producto = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
