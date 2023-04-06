import nodemailer from "nodemailer";

export default function mailHandler(req, res) {
 const {name, email, message} = req.body;

 // Send email using nodemailer
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: "rohitwadkra123456789101@gmail.com",
   pass: "Rohit@2609",
  },
 });

 const mailOptions = {
  from: email,
  to: "klokroom@gmail.com",
  subject: `New message from ${name}`,
  text: message,
 };

 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
   console.log(error);
   res.status(500).send("Error sending message");
  } else {
   console.log(`Email sent: ${info.response}`);
   res.status(200).send("Message sent");
  }
 });
}
