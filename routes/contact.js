
var csrf = require('csurf')
const bodyParser = require('body-parser')
const router = require('express').Router()

var csrfProtection = csrf({ cookie: { maxAge: 3000 }})
var parseForm = bodyParser.urlencoded({ extended: false })


router.get('/', csrfProtection, (req, res) => {

    res.status(200).render('contact', {
        csrfToken: req.csrfToken()

    })
})

router.post('/', parseForm, csrfProtection, (req, res) => {

    res.status(200).render('contact')
})



module.exports = router