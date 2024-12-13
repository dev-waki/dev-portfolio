require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server setup
const app = express();
app.use(cors({ origin: "https://dev-waki.web.app" })); // Replace with your frontend domain
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));

// Nodemailer transporter
const contactEmail = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,

  secure: false,
  auth: {
    
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("Error verifying email transporter:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Contact route
router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
