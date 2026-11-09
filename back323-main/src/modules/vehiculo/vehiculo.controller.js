
import { VehiculoModel } from "./vehiculo.model.js";

export const obtenerVehiculo = async (req, res) => {
  try {
    const results = await VehiculoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar vehiculos: ${error}`,
    });
  }
};

export const obtenerVehiculoPorId = async (req, res) => {
  try {
    const results = await VehiculoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al buscar producto: ${error}`,
    });
  }
};

export const crearVehiculo = async (req, res) => {
  const datos = {
    placa: req.body.placa,
    marca: req.body.marca,
    anio: req.body.anio,
    color: req.body.color,
    kilometraje: req.body.kilometraje,
    propietario: req.body.propietario,
    tel_pro: req.body.tel_pro,
    estado: req.body.estado,
    fecha: req.body.fecha,
  };
  try {
    const results = await VehiculoModel.create(datos);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error en la inserción: ${error}`,
    });
  }
};

export const borrarVehiculo = async (req, res) => {
  try {
    const results = await VehiculoModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al eliminar producto: ${error}`,
    });
  }
};

export const actualizarVehiculo = async (req, res) => {
  try {
    const results = await VehiculoModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `ocurrió un error al actualizar producto: ${error}`,
    });
  }
};
