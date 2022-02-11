const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY_TWO);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/email", cors(), async (req, res) => {
  let { email, engine, service, mods } = req.body;
const msg = {
  to: email, // Change to your recipient
  from: "etunetest@outlook.com", // Change to your verified sender
  subject: "Your E-Tune Order",
  
  html: 
  `<h1>Thank You For Your Order</h1>
  <h4>Order Details</h4>
   <p> Engine: ${engine}, Service: ${service}, Vehicle Modifications: ${mods}<p>
  <p>Cost: $400.00 </p>
  <p>We have received your order, we will send you an email with details within 2 weeks.</p>
  `,
  
};
try {
  sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
} catch (error) {
  console.log('email error:', error.message)
}
})

app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "E-Tune Company",
      payment_method: id,
      confirm: true,
    });
    console.log("payment", payment.status);
    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server is listening on port 4000");
});

