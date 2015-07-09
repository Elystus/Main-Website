var nodemailer = require("nodemailer");

var mailSystem = {
    sendMail: function(userNameFirst, userNameLast, userEmail, userMessage) {
        var transport = nodemailer.createTransport();
        
        transport.sendMail({
            from: userNameFirst + " " + userNameLast + " <" + userEmail + ">",
            to: "Andrew Black <elystus@gmail.com>",
            subject: "Website Inquiry [elyst.us]",
            text: userMessage
        });
        
        console.log('Inquiry sent: ' + userEmail + ' : ' + new Date().toLocaleTimeString().toString());
    }
};

module.exports = mailSystem;


