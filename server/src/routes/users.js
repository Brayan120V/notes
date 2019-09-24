const { Router } = require('express');
const router = Router();
const {get, getId, post, put, remove} = require('../controllers/users');
router.route('/')
    .get(get)
    .post(post)

router.route('/:id')
    .get(getId)
    .put(put)
    .delete(remove)
module.exports = router;