import { Button, Box, IconButton, FormHelperText,Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem } from "@mui/material";



const style = {
  position: "absolute",
  top: "10%",
  right: "0",
  

  bgcolor: "white",
 
  borderRadius: "2px",
  boxShadow: 24,
  p: 4,
};
export default function AboutPage({setAboutOpen}) {
  return (
  <Box className='about-box' sx={style} >
    <IconButton className="close-button" onClick={()=>setAboutOpen(false)}>
      <CloseIcon/>
    </IconButton>
    <Typography variant='h5' textAlign='center'>
      About
    </Typography>
    <FormHelperText>
      This app is a mock-up of a vehicle ECU tuning website for testing purposes.
    </FormHelperText>
    <Typography>
      How it works
    </Typography>
    <FormHelperText>
      <List>
        <ListItem>Click on the Order Now button to open a form</ListItem>
        <ListItem>Fill out the information (does not have to be real, can use Tempmail.org for a temporary Email)</ListItem>
        <ListItem>The form is connected to Stripe test payment through Express backend server.
          Repeat 4242 for all fields in the payment form.
        </ListItem>
        <ListItem>This form is connected to Twilio sendgrid, which will send you a copy of your order to the email that you have entered.
          It also sends a copy of the order to the website email.
        </ListItem>
        <ListItem>This website is still under construction, so some buttons might not be working yet.</ListItem>
       
        <ListItem>
          <a target="_blank" href="https://github.com/nyozov/etune">
        <Button variant="contained">GitHub Link</Button>
        </a>
        </ListItem>
              </List>
              
    </FormHelperText>
  </Box>

  
  );
}
