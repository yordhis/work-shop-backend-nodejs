const dashboard = (req, res) =>{
    console.log(req.token)
    res.render('dashboard', req.token)
}

module.exports = {
    dashboard
}