import { Button, Box, IconButton, FormHelperText,Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";
import phoneView from '../assets/phone-view.png'



const style = {
  position: "absolute",
  top: "10%",
  right: "0",
  display:'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
 
  
  
  overflow: 'auto',
  

  bgcolor: "white",
 
  borderRadius: "2px",
  boxShadow: 24,
  p:4,
};
export default function AboutPage({setAboutOpen}) {
  return (
  <Box className='about-box' sx={style} >
    <IconButton className="close-button" onClick={()=>setAboutOpen(false)}>
      <CloseIcon/>
    </IconButton>
   
    <FormHelperText>
      <List>
      <Typography className='about-title' variant='h6' sx={{ textAlign:'center'}}>
      How It Works
    </Typography>
    <Typography sx={{fontSize:'small'}}>
      This is a mockup of a vehicle ECU tuning website for learning/testing purposes. To try it out, follow the instructions below.
    </Typography>
        <ListItem>Click on the Order Now button to open a form.</ListItem>
        <ListItem>Fill out the information (does not have to be real, can use Tempmail.org for a temporary Email).</ListItem>
        <ListItem>The form is connected to Stripe test payment.
          Repeat 4242 for all fields in the payment form and click pay to proceed.
        </ListItem>
        <ListItem>This form is also connected to Twilio SendGrid, which will send you a copy of your order to the email that you have entered.
          Another copy will be sent to website email, which would be the owner of the website.
        </ListItem>
        <ListItem>This website is still under construction, so some buttons might not be working yet.</ListItem>
        <FormHelperText sx={{marginTop:'15px', textAlign:'center'}}>Check out the code below</FormHelperText>

    
   
              </List>
              
    </FormHelperText>
    
    <a target="_blank" href="https://github.com/nyozov/etune">
        <Button variant="contained">GitHub Link</Button>
        </a>
       
        <FormHelperText sx={{ marginTop:'15px', textAlign:'center'}}>Also Available for Mobile Devices</FormHelperText>
      
       <div>
    <img className='phone-image' src={phoneView}/>
 </div>
   
  </Box>

  
  );
}
