
var usermodel = require('../model/sendmailmodel');
var usermodelinfo = require('../model/sendmailinfomodel');

//Send Mail To Gmail
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lakkadumang306@gmail.com',
        pass: 'jybgcpxzxcrlqhwk'
    }
});
exports.insert = async (req, res) => {

    try {
        var email = req.body.email;
        console.log(email)
        var data = await usermodel.create({ email });
        var mailOptions = {
            from: email,
            to: 'lakkadumang306@gmail.com',
            subject: email,
            text: email + ' This User can visit Your Site  '
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.insert_info = async (req, res) => {

    try {
        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var message = req.body.message;
        var data = await usermodelinfo.create({ name, email, phone, message });
   

        var mailOptions = {
            from: email,
            to: 'lakkadumang306@gmail.com',
            subject: email,
            text: 'This User can visit Your Site\n' +
                'Name : ' + name + '\n' +
                'Email : ' + email + '\n' +
                'Phone : ' + phone + '\n' +
                'Message : ' + message + '\n'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}
exports.get_data = async (req, res) => {

    try {
        var data = await usermodel.find();
        res.status(200).json({
            status: data
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}

exports.get_data_info = async (req, res) => {

    try {
        var data = await usermodelinfo.find();
        res.status(200).json({
            status: data,
        })
    }
    catch {
        res.status(500).json({
            status: "Error !!!"
        })
    }

}


