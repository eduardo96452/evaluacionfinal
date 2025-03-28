// src/controllers/imagen.controller.js
const supabase = require('../config/supabase');

// Crear imagen
exports.createImagen = async (req, res) => {
  try {
    const { nombre, tipo_detectado, descripcion, archivo } = req.body;

    // Insertar en la tabla Imagen
    const { data, error } = await supabase
      .from('Imagen')
      .insert([
        { nombre, tipo_detectado, descripcion, archivo }
      ]);

    if (error) {
      return res.status(400).json({ message: 'Error al crear imagen', error });
    }

    return res.status(201).json({ message: 'Imagen creada', data });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', error });
  }
};

// Obtener todas las imágenes
exports.getAllImagenes = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('Imagen')
      .select('*');

    if (error) {
      return res.status(400).json({ message: 'Error al obtener imágenes', error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', error });
  }
};

// Obtener una imagen por ID
exports.getImagenById = async (req, res) => {
  try {
    const id = req.params.id;

    // Filtrar por id
    const { data, error } = await supabase
      .from('Imagen')
      .select('*')
      .eq('id', id)
      .single(); // Para obtener un solo registro

    if (error) {
      return res.status(404).json({ message: 'Error al obtener la imagen', error });
    }

    if (!data) {
      return res.status(404).json({ message: 'No existe la imagen con ese ID' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', error });
  }
};

// Actualizar una imagen por ID
exports.updateImagen = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, tipo_detectado, descripcion, archivo } = req.body;

    // Actualizar registro
    const { data, error } = await supabase
      .from('Imagen')
      .update({ nombre, tipo_detectado, descripcion, archivo })
      .eq('id', id)
      .single();

    if (error) {
      return res.status(400).json({ message: 'Error al actualizar imagen', error });
    }

    return res.status(200).json({ message: 'Imagen actualizada', data });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', error });
  }
};

// Eliminar una imagen
exports.deleteImagen = async (req, res) => {
  try {
    const id = req.params.id;

    // Borrar registro
    const { data, error } = await supabase
      .from('Imagen')
      .delete()
      .eq('id', id)
      .single();

    if (error) {
      return res.status(400).json({ message: 'Error al eliminar la imagen', error });
    }

    if (!data) {
      return res.status(404).json({ message: 'No existe la imagen con ese ID' });
    }

    return res.status(200).json({ message: 'Imagen eliminada', data });
  } catch (error) {
    return res.status(500).json({ message: 'Error interno', error });
  }
};
