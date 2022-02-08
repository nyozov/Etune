import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{height: '90%', display: 'flex', justifyContent:'center', alignItems:'center' }}>
      <CircularProgress />
    </Box>
  );
}