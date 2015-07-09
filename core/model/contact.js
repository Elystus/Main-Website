var mailSystem = require('../lib/mail.js');

var contactModel = {
    processRequest: function(req) {
        var userNameFirst = ((req.body.contact.nameFirst != '') ? req.body.contact.nameFirst : false ),
            userNameLast = ((req.body.contact.nameLast != '') ? req.body.contact.nameLast : false ), 
            userEmail = ((req.body.contact.email != '') ? req.body.contact.email : false ),
            userMessage = ((req.body.contact.msg != '') ? req.body.contact.msg : false );
        
        if(!userNameFirst || !userNameLast || !userEmail || !userMessage ) {
            return false;
        }
        if(!this.validateEmail(userEmail)) 
            return false;
        
        console.log('we');
        
        mailSystem.sendMail(userNameFirst, userNameLast, userEmail, userMessage);
        
        return true;
    },
    
    validateEmail: function (tmpEmail) {
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        return re.test(tmpEmail);
    }
};

module.exports = contactModel;
