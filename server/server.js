const credentials = require("./keys");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.get("/", (req, res) => res.send("hello"));

// app.get("/contact", (req, res) => res.render("contact.html"));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/send-email", function(req, res) {
  let transporter = nodemailer.createTransport("SMTP", {
    name: 'iCloud',
    auth: {
      user: credentials.mail,
      pass: credentials.key
    }
  });
  
  let mailOptions = {
    from: req.body.email,
    to: credentials.mail,
    subject: req.body.subject,
    text: req.body.message
  };
  console.log(req);
  
  transporter.sendMail(mailOptions, (error, info)=> {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
