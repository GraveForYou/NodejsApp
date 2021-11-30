class NewsController {

    //[GET] /news
    index(rep, res) {
        res.render('news')
    }

    //[GET] /news/:slug
    show(rep, res) {
        res.send('NEWS DETAILS!!!')
    }

}

module.exports = new NewsController;