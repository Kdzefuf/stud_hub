const materialsModel = require('../models/materialsModel');

exports.getMaterials = async (req, res) => {
  try {
    const materials = await materialsModel.getMaterials();
    res.status(200).json(materials);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение материалов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить материалов');
  }
};

exports.getMaterialById = async (req, res) => {
  const { id } = req.params;

  try {
    const material = await materialsModel.getMaterialById(id);
    
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }

    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPopularMaterials = async (req, res) => {
  try {
    const materials = await materialsModel.getPopularMaterials();
    res.status(200).json(materials);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение материалов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить материалов');
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const material = await materialsModel.createMaterial(req.body);
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await materialsModel.updateMaterial(id, req.body);
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    await materialsModel.deleteMaterial(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};