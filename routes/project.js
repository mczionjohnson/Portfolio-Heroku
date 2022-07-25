const router = require('express').Router()


router.get('/', (req, res) => {
    res.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

    res.status(200).render('project')
})



module.exports = router