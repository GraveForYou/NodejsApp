const Course = require('../models/Course');

class SiteController {

    //[GET] /
    index(rep, res, next) {

        Course.find({})
            .then(courses => res.render('home'))
            .catch(next)
    }

    //[GET] /search
    search(rep, res) {
        res.render('search');
    }

}

module.exports = new SiteController;