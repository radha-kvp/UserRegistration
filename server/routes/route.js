// Initialize express router
let router = require('express').Router();
// test get
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Its test'
    });
});


// Import user controller
var userController = require('../controllers/usersControllers');
// user routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:user_id')
    .get(userController.view)

module.exports = router;