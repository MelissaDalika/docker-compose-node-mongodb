const { Router} = require('express');
const router = Router()

router.get('/', (req, res) => {
    res.send('hello router docker-compose')
});

module.exports = router;
