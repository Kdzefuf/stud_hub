const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/users', userController.getUsers);
router.post('/signup', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.put('/users/avatar/:id', upload.single('avatar'), userController.addAvatar);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.getUserByEmail);

module.exports = router;