const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// Render Signup Page
router.get('/', (req, res) =>{
    res.title('Signup').render('signup');
});

// Signup Page
router.post('/create', registerController.create);

// Redirect Signin Page
router.post('/', (req, res) => {
    res.redirect('/fa17g11/login');
});

module.exports = router;
