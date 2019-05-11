const bodyParser = require("body-parser");
const credentials = require("./keys");
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hello"));

app.get("/contact", (req, res) => res.send("contact page"));
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/contact", function(req, res) {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: credentials.mail,
      pass: credentials.key
    }
  });

  let mailOptions = {
    from: req.body.email, 
    to: 'b.namonywa@gmail.com', 
    subject: req.body.subject, 
    message: req.body.message
  }; 

  transporter.sendMail(mailOptions, function(error, sucess){
    if (error){
      console.log(error)
    } else {
      console.log('sent')
    }
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
