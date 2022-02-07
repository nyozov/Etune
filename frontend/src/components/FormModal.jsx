
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Select, MenuItem, TextField  } from '@mui/material';
import { motion } from 'framer-motion'
import { ButtonUnstyled } from '@mui/base';
import { useState } from 'react';
import ReviewForm from './ReviewForm'
import PaymentForm from './PaymentForm'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'white',
  backdropFilter: 'blur(5px)',
  borderRadius: '2px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, setOpen}) {
  
  const [formResults, setFormResults] = useState({
    email: '',
    engine: '',
    service: '',

  })

  const [formMode, setFormMode] = useState('options')
  console.log(formMode)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormResults(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formResults);
    setFormMode('review')
  }
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <motion.div
  animate={{ y: 350 }}
  transition={{ ease: "easeOut", duration: 1 }}
  >
        {formMode === 'options' && <Box className='order-form' sx={style}>
          <form onSubmit={handleSubmit}>
          <FormGroup>
        <FormControl sx={{margin:'15px'}}>
  <InputLabel htmlFor="email-input">Email address</InputLabel>
  <Input
  required
  onChange={handleChange}
  value={formResults.email}
  type="email"
  id="email-input"
  name="email"
  
  />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  
</FormControl>

<FormControl sx={{margin:'15px'}}>
<InputLabel htmlFor="year-select">Select Engine</InputLabel>

<Select
onChange={handleChange}
sx={{color:'black'}}
required
value={formResults.engine}
    labelId="demo-simple-select-label"
    id="year-select"
    name="engine"
    label="Select Engine"
  >
    <MenuItem value={'Honda'}>K20 (2002-2011 SI, Type-S)</MenuItem>
    <MenuItem value={'Subaru'}>EJ20/EJ25 (2002-2014 WRX, STI)</MenuItem>
    <MenuItem value={'Mitsubishi'}>4B11T (2010-2016 Evo, Ralliart)</MenuItem>
  </Select>
  <FormHelperText>We currently only offer services for the above platforms.
    If you do not see your vehicle on the list, you can contact us directly.
  </FormHelperText>
</FormControl>
<FormControl sx={{margin:'15px'}}>
<InputLabel htmlFor="year-select">Select Service</InputLabel>

<Select
required
onChange={handleChange}
name="service"
value={formResults.service}
sx={{color:'black'}}
    labelId="demo-simple-select-label"
    id="year-select"
    label="Select Service"
  >
    <MenuItem value={'Burble'}>Burble Tune [$400.00]</MenuItem>
    <MenuItem value={'Performance'}>Performance Tune [$500.00]</MenuItem>
  </Select>

</FormControl>
<FormControl sx={{margin:'15px'}}>
  <TextField 
  multiline
  rows={4}
  placeholder="Please enter all vehicle modifications"
  />
</FormControl>

<FormControl sx={{margin:'15px'}}>
  <Button type="submit" variant="contained">
    Proceed To Checkout
  </Button>
</FormControl>

</FormGroup>
</form>
        </Box>
}
{formMode === 'review' &&
<ReviewForm formResults={formResults} formMode={formMode} setFormMode={setFormMode}/>
}
{formMode === 'payment' &&
<PaymentForm formResults={formResults} formMode={formMode} setFormMode={setFormMode}/>
}
        </motion.div>
      </Modal>
    </div>
  );
}