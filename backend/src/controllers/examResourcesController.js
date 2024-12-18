const examResourcesModel = require('../models/examResourcesModel');

exports.getExamResources = async (req, res) => {
  try {
    const examResources = await examResourcesModel.getExamResources();
    res.status(200).json(examResources);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение ресурсов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить ресурсов');
  }
};

exports.getExamResourceById = async (req, res) => {
  const { id } = req.params;

  try {
    const examResources = await examResourcesModel.getExamResourceById(id);
    
    if (!examResources) {
      return res.status(404).json({ message: 'exam resource not found' });
    }

    res.status(200).json(examResources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSortedExamResources = async (req, res) => {
  try {
    const attribute = req.query.attribute;
    
    const examResources = await examResourcesModel.getSortedExamResources(attribute);
    res.status(200).json(examResources);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение ресурсов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить ресурсов');
  }
}

exports.searchExamResources = async (req, res) => {
  const { query: name } = req.query;
  
  try {
   const foundExamResources = await examResourcesModel.searchExamResources(name);
   res.status(200).json(foundExamResources);
  } catch (err) {
   res.status(500).json({ error: err.message });
  }
}

exports.getExamResourcesByTag = async (req, res) => {
  const tag = req.query;
  try {
    const examResources = await examResourcesModel.getExamResourcesByTag(tag);
    res.status(200).json(examResources);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение ресурсов:', err);
    res.status(500).send('Ошибка сервера, не удалось получить ресурсов');
  }
}

exports.createExamResource = async (req, res) => {
  try {
    const examResource = await examResourcesModel.createExamResource(req.body, req.file.filename);
    res.status(200).json(examResource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateExamResource = async (req, res) => {
  const { id } = req.params;
  try {
    const examResources = await examResourcesModel.updateExamResource(id, req.body);
    res.status(200).json(examResources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExamResource = async (req, res) => {
  const { id } = req.params;
  try {
    await examResourcesModel.deleteExamResource(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};