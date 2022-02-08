import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Loading from './Loading'
import { FormHelperText, FormControl } from "@mui/material";


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
  const [loading, setLoading] = useState(false);
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
        setLoading(true)
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 100,
          id,
        });
        

        if (response.data.success) {
          console.log("successful payment");
          setSuccess(true);
          setLoading(false);
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
  
  {!success && !loading &&
  <form onSubmit={handleSubmit}>
    <fieldset className="payment-form">
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS}/>
      </div>
    
    </fieldset>
    <FormControl>
    <FormHelperText>* Payment is current only setup on stripe testing, repeat 4242 for all fields to test.</FormHelperText>
    </FormControl>
    <div className="form-button-group">
    <Button type="submit" variant="contained" sx={{background:'black'}}>Pay</Button>
    <Button onClick={() => setFormMode("review")} variant="contained">Back</Button>
    </div>

  </form>
}
{success && !loading &&
  <div>
    <h2>Purchase Successful</h2>
    <p>You will recieve an email of your receipt and you will hear from us within 2 weeks. Thank you for your purchase.</p>
    <Button variant='contained'>Close</Button>
    </div>
  }
 {loading && <Loading/>}
  </>
  );
}
