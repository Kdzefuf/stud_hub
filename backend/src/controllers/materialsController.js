const materialsModel = require('../models/materialsModel');

exports.getMaterials = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const materials = await materialsModel.getMaterials(limit, offset);
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    const materials = await materialsModel.getPopularMaterials(limit, offset);
    res.status(200).json(materials);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение материалов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить материалов');
  }
};

exports.getSortedMaterials = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const attribute = req.query.attribute;
    
    const materials = await materialsModel.getSortedMaterials(limit, offset, attribute);
    res.status(200).json(materials);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение материалов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить материалов');
  }
}

exports.searchMaterials = async (req, res) => {
  const { query: name } = req.query;
  
  try {
   const foundMaterials = await materialsModel.searchMaterials(name);
   res.status(200).json(foundMaterials);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
}

exports.getMaterialsByTag = async (req, res) => {
  const tag = req.query;
  try {
    const materials = await materialsModel.getMaterialsByTag(tag);
    res.status(200).json(materials);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение материалов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить материалов');
  }
}

exports.createMaterial = async (req, res) => {
  try {
    const material = await materialsModel.createMaterial(req.body);
    res.status(200).json(material);
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
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};