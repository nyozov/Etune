import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FormHelperText } from '@mui/material';

export default function CircularIndeterminate() {
  return (
    <Box sx={{height: '90%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <CircularProgress />
      <FormHelperText>Processing Payment...</FormHelperText>
    </Box>
  );
}