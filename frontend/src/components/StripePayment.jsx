import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "c4f0ff",
      color: 'black',
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: 'antialiased',
      ":-webkit-autofill": {color: '#fce883'},
      "::placeholder": {color: "#87bbfd"}
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "rgba(235,100,100, 0.8)"
    }
  }
}

export default function StripePayment({setFormMode}) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 100,
          id,
        });
        if (response.data.success) {
          console.log("successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
  <>
  {!success ? 
  <form onSubmit={handleSubmit}>
    <fieldset className="FormGroup">
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS}/>
      </div>
    </fieldset>
    <div className="form-button-group">
    <Button type="submit" variant="contained" sx={{background:'black'}}>Pay</Button>
    <Button onClick={() => setFormMode("review")} variant="contained">Back</Button>
    </div>

  </form>
  :
  <div>
    <h2>Purchase Successful</h2>
    <p>You will recieve an email of your receipt and you will hear from us through email within 2 weeks. Thank you for your purchase.</p>
    <Button variant='contained'>Close</Button>
    </div>
  }
  </>
  );
}
