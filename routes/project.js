const router = require('express').Router()


router.get('/', (req, res) => {

    res.status(200).render('project')
})



module.exports = router