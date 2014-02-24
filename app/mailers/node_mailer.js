var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "alexander.egan@gmail.com",
        pass: "password here"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Alex Egan ✔ <alexander.egan@gmail.com>", // sender address
    to: "aegan@andrew.cmu.edu", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}

// send mail with defined transport object
exports.sendMail = function(callback) {
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
        callback();
    }
  });
}