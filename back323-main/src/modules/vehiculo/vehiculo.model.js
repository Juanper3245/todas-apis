import db from "../config/dbconexion.js";

export const VehiculoModel = {
  findAll: async () => {
    const sql = "SELECT * FROM vehiculo ORDER BY marca";
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM vehiculo WHERE id_vehiculo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  delete: async (id) => {
    const sql = "DELETE FROM vehiculo WHERE id_vehiculo=?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    // Validamos que el código no exista
    const [codigoExiste] = await db.query(
      "SELECT * FROM vehiculo WHERE placa = ?",
      [data.placa]
    );
    if (codigoExiste.length > 0) {
      throw new Error("la placa ya está registrado");
    }
    const productoNuevo = {
      placa: data.placa,
      marca: data.marca,
      modelo: data.modelo,
      anio: data.anio,
      color: data.color,
      kilometraje: data.kilometraje,
      propietario: data.propietario,
      tel_pro: data.tel_pro,
      estado: data.estado,
      fecha: data.fecha,
    };
    const sql = "INSERT INTO vehiculo SET ?";
    const [rows] = await db.query(sql, [productoNuevo]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "UPDATE vehiculo SET ? WHERE id_vehiculo = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
