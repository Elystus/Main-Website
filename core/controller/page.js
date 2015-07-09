var contactModel = require('../model/contact.js');

// # Website Page Controller
var pageController = {
    'index': function(req, res) {
        res.render('index');
    }, 
    
    'about': function(req, res) {
        res.render('partials/about');
    },
    
    'projects': function(req, res) {
        res.render('partials/projects');
    },
    
    'contact': function(req, res) {
        res.render('partials/contact');
    },
    
    'contactPOST': function(req, res) {
        var returnBoolean = contactModel.processRequest(req);
        if(!returnBoolean) 
            res.render('partials/contact', {'returnBoolean': true });
        else
            res.render('partials/contactConf');
    },
    
    'notfound': function(req, res) {
        res.render('404');
    }
};

module.exports = pageController;