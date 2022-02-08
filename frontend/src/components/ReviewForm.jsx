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
import { List, ListItem } from "@mui/material";



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


export default function Payment({ formResults, setFormMode }) {
  return (
    <div>
      <Box className="order-form" sx={style}>
        <FormGroup>
          <Typography className='form-title' sx={{textAlign:'center'}}variant='h5'>
            Review Options
            </Typography>
          <FormControl sx={{ textAlign:'center', color:'rgba(0,0,0,0.7)'}}>
           

            
            <List>
              <ListItem>Email: {formResults.email}</ListItem>
              <ListItem>Engine: {formResults.engine}</ListItem>
              <ListItem>Tune Type: {formResults.service}</ListItem>
              <ListItem>Modifications: {formResults.mods}</ListItem>
              <ListItem>Cost: $400.00</ListItem>
            </List>
            <FormHelperText>
             * Please review the above information before you proceed to payment.
            </FormHelperText>
          </FormControl>
          <FormControl>
           
          </FormControl>
          
        </FormGroup>
        <div className='form-button-group'>
            <Button onClick={()=>setFormMode("payment")} variant="contained">Confirm</Button>
            <Button onClick={() => setFormMode("options")} variant="contained">Back</Button>
            </div>
      </Box>
    </div>
  );
}
