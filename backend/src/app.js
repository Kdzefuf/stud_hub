const express = require('express');
const pool = require('./config/db');
const userRoutes = require('./routes/index');
const userController = require('./controllers/userController');
const userModel = require('./models/userModel');
const materialsController = require('./controllers/materialsController');
const materialsModel = require('./models/materialsModel');
const cors = require('cors');
const validateUser = require('./middleware/validateUser');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(validateUser);
app.use('/api', userRoutes);
app.use(errorHandler);

pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
    console.log(getMaterials());
  }
});

const getUsers = async () => {
  try {
    const user = await userModel.findUserByNickname('testnick');
    console.log(user);
  } catch (err) {
    console.error('Error deleting user:', err.message);
  }
};

const getMaterials = async () => {
  try {
    const user = await materialsModel.getPopularMaterials();
    console.log(user);
  } catch (err) {
    console.error('Error deleting user:', err.message);
  }
};

const addMaterial = async () => {
  try {
    const newMaterial = {
      id: new Date().getTime(),
      name: 'Blockchain Basics',
      author_id: 1,
      link: 'https://example.com/blockchain-basics',
      description: 'Understanding the fundamentals of blockchain technology.',
      views_count: 27,
      rating: 4.6,
      reviews: 76,
      tags: "blockchain, finance, technology"
    };
    const material = await materialsModel.createMaterial(newMaterial);
    console.log('User created:', material);
  } catch (err) {
    console.error('Error adding user:', err.message);
  }
};

const updateMaterialName = async (materialId) => {
  try {
    const updatedMaterial = await materialsController.updateMaterial(materialId, {
      name: 'check',
      author_id: 1,
      link: 'https://googledisk.com/',
      description: 'Тестовый материал для работы с бд',
      views_count: 0,
      rating: null,
      reviews: null,
      tags: "test"
    });
    console.log('User email updated:', updatedMaterial);
  } catch (err) {
    console.error('Error updating user email:', err.message);
  }
};

const deleteMatreial = async (materialId) => {
  try {
    await materialsController.deleteMaterial(materialId);
    console.log(`User with ID ${materialId} deleted.`);
  } catch (err) {
    console.error('Error deleting user:', err.message);
  }
};

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
