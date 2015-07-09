// # Core Loader
/* 
 * Purpose:
 *  - To further setup the express server
 *  - Link together all parts of the application
*/

// Include all referenced files
var config  =   require('./config'),
    routes  =   require('./route');
    
var colors      = require('colors'),
    bodyParser  = require('body-parser'),
    express     =   require('express'),
    app         =   express();
    
var main = function() {
    console.log('Booting system...'.green);
    
    // Set server view engine
    app.set('view engine', 'jade');
    app.use(bodyParser());
    
    console.log('Activating warpdrive'.cyan);
    
    app.set('views', config.paths.view);
    app.use('/assets', express.static(config.paths.public));
    
    console.log('Setting course'.cyan);
    
    // Setup website routes
    routes(app);

    app.listen(process.env.PORT || config.server.port);
    
    console.log('Warpdrive activated!'.green);
    
};

module.exports = main;