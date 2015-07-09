var pageController  = require('../controller/page.js');

var pageRouter = function(server) {
    server.get('/', pageController.index);
    server.get('/about', pageController.about);
    server.get('/projects', pageController.projects);
    server.get('/contact', pageController.contact);
    server.get('*', pageController.notfound);
    
    server.post('/contact', pageController.contactPOST);
};

module.exports = pageRouter;

