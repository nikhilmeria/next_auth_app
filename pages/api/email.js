import nodemailer from "nodemailer";

export default function mailHandler(req, res) {
 const {nm, email, message, ph} = req.body;

 // Send email using nodemailer
 const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: "rohitwadkra123456789101@gmail.com",
   pass: "Rohit@2609",
  },
 });

 const mailOptions = {
  from: "rohitwadkra123456789101@gmail.com",
  to: email,
  subject: `New message from ${nm} - ${ph}`,
  text: message,
 };

 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
   console.log(error);
   res.status(500).send("Error sending email  message from server");
  } else {
   console.log(`Email sent from server : ${info.response}`);
   res.status(200).send("Message sent");
  }
 });
}
