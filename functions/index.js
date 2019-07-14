const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;
const { email, password } = require("./config");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  user: email,
  pass: password
});

mailTransport.use("compile", htmlToText());
const APP_NAME = "Audrey's Pizza";
exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@audreys.com`,
    to: order.email,
    subject: `Your order from ${APP_NAME}`,
    html: `
    <table style="width:500px; margin:0 auto">
      <tr>
        <th>${order.displayName}</th>
        <th>Here's your order confirmation from Audrey's pizza</th>
        ${order.order
          .map(
            ({ name, quantity, price }) => `
          <tr>
            <td>${quantity}</td>
            <td>${name}</td>
            <td>${price}</td>
          </tr>
        `
          )
          .join("")}
      </tr>
    </table>
    `
  };
  mailTransport.sendMail(mailOptions);
}
