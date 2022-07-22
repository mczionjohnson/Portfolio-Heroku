const router = require('express').Router()


router.get('/', (req, res) => {

    res.status(200).render('contact')
})



module.exports = router