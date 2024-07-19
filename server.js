const express = require("express");
const app = express();
const BodyParser = require('body-parser');
const port = 3000;

const nodemailer = require('nodemailer');

app.use(BodyParser.urlencoded({extended: false}));

app.use(BodyParser.json());

app.get("/", (req, res) => {
  res.send("Default Page");
});

app.post("/", async (req, res) => {
  
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'virginie35@ethereal.email',
      pass: '4R9r7WCqxtKU3raczY'
    },
  });
  
  var mailOptions = {
    from: 'virginie35@ethereal.email',
    to: 'myfileboonlert@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send("Email Sent!!",error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send("Email Sent!!",info.response);
    }
  });
  
});

app.listen(port, () => {
  console.log(`server running at http://localhost${port}`);
});