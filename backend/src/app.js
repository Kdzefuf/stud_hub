const express = require('express');
const pool = require('./config/db');
const questionsRoutes = require('./routes/questionsRoutes');
const userRoutes = require('./routes/usersRoutes');
const materialRoutes = require('./routes/materialsRoutes');
const reviewRoutes = require('./routes/reviewsRoutes');
const teacherRoutes = require('./routes/teachersRoutes');
const userController = require('./controllers/userController');
const userModel = require('./models/userModel');
const materialsController = require('./controllers/materialsController');
const materialsModel = require('./models/materialsModel');
const reviewsModel = require('./models/reviewsModel');
const questionsModel = require('./models/questionsModel');
const cors = require('cors');
const validateUser = require('./middleware/validateUser');
const errorHandler = require('./middleware/errorHandler');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
// app.use(validateUser);

app.use('/api', questionsRoutes);
app.use('/api', userRoutes);
app.use('/api', materialRoutes);
app.use('/api', reviewRoutes);
app.use('/api', teacherRoutes);

app.use(errorHandler);

pool.query('SELECT NOW()', (err, res) => {
  if(err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
    const photo = '../../frontend/src/images/Logo.png';
    getUsers()
  }
});

const getUsers = async () => {
  try {
    const user = await userModel.getUsers();
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
      title: "Напомните игру про отца абьюзера который сына убил",
      description: 'Игра вроде недавно вышла, в тик токе много видео было. Инди игра с темной атмосферой где отец абьюзер, он там еще сына своего убил (душил и нес куда то), и были вроде моменты, где он жену избивал',
      tags: "очень важное",
      author_id: 9,
      views_count: 90
    };
    const material = await questionsModel.createQuestion(newMaterial);
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

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
