const express = require('express');
const { userRegister, upload } = require('../controllers/userController');


const router = express.Router();

router.post('/register', upload.single('image'), userRegister);

module.exports = router;
