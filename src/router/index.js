const router = require('express').Router();
const videoRouter = require('./videoRouter');

router.use('/video', videoRouter);

module.exports = router;