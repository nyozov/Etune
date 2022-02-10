import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import StripePayment from './StripePayment'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  backdropFilter: "blur(5px)",
  borderRadius: "2px",
  boxShadow: 24,
  p: 4,
};

const PUBLIC_KEY = process.env.REACT_APP_STRIPE_KEY

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function Payment({ sendEmail, handleClose, formResults, setFormMode }) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  

  return (
    
      <Box className="order-form" sx={style}>
        <Typography className='form-title' sx={{textAlign:'center'}}variant='h5'>
            Payment
            </Typography>
<Elements stripe={stripeTestPromise}>
 

            <StripePayment sendEmail={sendEmail} handleClose={handleClose} setFormMode={setFormMode}/>
            
        
            </Elements>
          
      </Box>
   
  );
}
