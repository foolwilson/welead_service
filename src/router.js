const express = require('express');
const router = express();
const methods = require('./methods/methods')

router.use(express.json()) // for parsing application/json
// router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/teachers', methods.listTeachers);
router.get('/courses', methods.listCourse);
router.get('/course/:id', methods.getCourse);

router.post('/login', methods.loginUser);
router.post('/register', methods.registerUser);
router.post('/account_verify', methods.verifyAccount);
router.post('/profile', methods.getProfile);
router.post('/purchase', methods.createPurchase);

module.exports = router;