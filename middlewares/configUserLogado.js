const configUserLogado = (req, res, next) => {
    if (req.session.user){
        res.locals.user = req.session.user
    }else{
        res.locals.user = {}
    }
    next ()
}

module.exports = configUserLogado