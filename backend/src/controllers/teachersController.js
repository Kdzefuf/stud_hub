const teachersModel = require('../models/teachersModel');

exports.getTeachers = async (req, res) => {
  try {
    const teachers = await userModel.getTeachers();
    res.status(200).json(teachers);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение преподавателей:', err);
    res.status(500).send('Ошибка сервера, не удалось получить преподавателей');
  }
};

exports.getTeacherById = async (req, res) => {
  const { id } = req.params;

  try {
    const teacher = await teachersModel.getTeacherById(id);
    
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTeacher = async (req, res) => {
    try {
      const teacher = await teachersModel.createTeacher(req.body);
      res.status(200).json(teacher);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.updateTeacher = async (req, res) => {
    const { id } = req.body;
    try {
      const teacher = await teachersModel.updateTeacher(id, req.body);
      res.status(200).json(teacher);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.deleteTeacher = async (req, res) => {
    const { id } = req.body;
    try {
      await teachersModel.deleteTeacher(id);
      res.status(200).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  