const userModel = require('../models/userModel');

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Ошибка при обработке запроса на получение пользователей:', err);
    res.status(500).send('Ошибка сервера, не удалось получить пользователей');
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserByNickname = async (req, res) => {
  const { nickname } = req.body;

  try {
    const user = await userModel.findUserByNickname(nickname);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  console.log(req);
  try {
    const user = await userModel.findUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.createUser = async (req, res) => {
  try {
    const existingUser = await userModel.findUserByNickname(req.body.nickname);
    const existingEmail = await userModel.findUserByEmail(req.body.email);
    if (existingUser) {
      return res.status(409).json({ error: 'Nickname already exists' });
    }
    if (existingEmail) {
      return res.status(409).json({ error: 'Email already exists' });
    }
    const user = await userModel.createUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addAvatar = async (req, res) => {
  const { id } = req.params;
  const avatar = req.file;
  try {
    const user = await userModel.addAvatar(id, avatar);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.updateUser(id, req.body);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
