const router = require('express').Router();

const userController = require('../controllers/Api/UserController');

router.get('/users', userController.index);
router.post('/users', userController.create);
router.get('/users/:id', userController.single);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;