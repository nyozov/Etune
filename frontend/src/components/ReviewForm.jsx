import React from "react";
import { Button, Typography } from "@mui/material";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormGroup,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "350px",
  bgcolor: "white",
  backdropFilter: "blur(5px)",
  borderRadius: "2px",
  boxShadow: 24,
  p: 4,
};

export default function Payment({ formResults, setFormMode }) {
  return (
    <div>
      <Box className="order-form" sx={style}>

        <FormGroup>
          <Typography sx={{textAlign:'center'}}variant='h5'>
            Review Options
            </Typography>
          <FormControl sx={{color:'rgba(0,0,0,0.75)'}}>
           

            
            <ul>
              <li>Email: {formResults.email}</li>
              <li>Vehicle: {formResults.engine}</li>
              <li>Service: {formResults.service}</li>
            </ul>
            <FormHelperText>
              Please review the above information before you proceed to payment.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <div className='form-button-group'>
            <Button onClick={()=>setFormMode("payment")} variant="contained">Proceed To Payment</Button>
            <Button onClick={() => setFormMode("options")} variant="contained">Back</Button>
            </div>
          </FormControl>
        </FormGroup>
      </Box>
    </div>
  );
}
