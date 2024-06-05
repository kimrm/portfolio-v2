"use server";

export async function sendMail(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || !message) {
    throw new Error("Please fill out all fields.");
  }

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.GMAIL_APP_USR,
      pass: process.env.GMAIL_APP_PSW
    },
    secure: true
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error: any, success: any) {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.GMAIL_SENDER_ADDRESS,
    to: process.env.GMAIL_RECEIVER_ADDRESS,
    subject: `Message From website contact form`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
     ${email}</p>`
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

  return { status: "success" };
}
