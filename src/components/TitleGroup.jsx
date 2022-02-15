import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ButtonGroup from './ButtonGroup';

export default function TitleGroup({aboutOpen, setAboutOpen, setFormOpen}) {
  return (
    <motion.div className="title-group"
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{delay:3.5, duration: 1 }}>
      <Typography className='shadow' color='white' variant='h6'>
        Professional E-Tuning Service
      </Typography>
      <Typography className='shadow' color="rgba(255,255,255,0.7)">
        Honda | Subaru | Mitsubishi
        </Typography>
        
      <ButtonGroup aboutOpen={aboutOpen} setAboutOpen={setAboutOpen} setFormOpen={setFormOpen}/>
      </motion.div>
  );
}
