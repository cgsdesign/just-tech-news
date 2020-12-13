const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
//const homeRoutes = require('./home-routes.js');

//url aditions defined here
//think like Accel.com/sales-enablement/uniquepage
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
//router.use('/', homeRoutes);
module.exports = router;