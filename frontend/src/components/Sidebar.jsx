import { Typography, Box, IconButton } from '@mui/material';
import ButtonGroup from './ButtonGroup';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion'
export default function BoxSx({setFormOpen}) {
  return (
    <Box
    className='sidebar'
      sx={{
        width: '300px',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
     
        marginLeft: '-120px',
      }}
    >
       <div className='icon-container'>
       <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ delay: 2, duration: 1 }}
        
        >
  <IconButton>
    <InstagramIcon sx={{ color:'rgba(255,255,255,0.8)'}}/>
  </IconButton>
  </motion.div>
  <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ delay:2.5, duration: 1 }}
        
        >
          <IconButton>
  <MailIcon sx={{ color:'rgba(255,255,255,0.8)'}} />
  </IconButton>
  </motion.div>
  <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ delay: 3, duration: 1 }}
        
        >
          <IconButton>
  <FacebookIcon sx={{ color:'rgba(255,255,255,0.8)'}} />
  </IconButton>
  </motion.div>
  </div>
  <motion.div className="title-group"
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{delay:3.5, duration: 1 }}>
      <Typography className='shadow' sx={{width:'300px', marginLeft:18.5, marginTop:25}} color='white' variant='h6'>
        Professional E-Tuning Service
      </Typography>
      <Typography className='shadow' sx={{width: '300px', marginLeft:18.5}}color="rgba(255,255,255,0.7)">
        Honda | Subaru | Mitsubishi
        </Typography>
        
      <ButtonGroup setFormOpen={setFormOpen}/>
      </motion.div>
      </Box>
  );
}