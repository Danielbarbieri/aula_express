const HomeController = {
    index: (req, res) => {
        let info = {
            cursos:['fullstack','Mobile','Marketing Digital']
        };
        return res.render("index", info)
    }
};


module.exports = HomeController;