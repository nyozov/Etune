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

 
          <Typography sx={{textAlign:'center'}}variant='h5'>
            Payment
            </Typography>
            
            <div className='form-button-group'>
            <Button variant="contained">Proceed To Payment</Button>
            <Button onClick={() => setFormMode("review")} variant="contained">Back</Button>
            </div>

            
        
          
      </Box>
    </div>
  );
}
