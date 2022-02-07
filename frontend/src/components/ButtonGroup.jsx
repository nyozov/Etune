import React from 'react';
import SvgButton from './SvgButton'

export default function ButtonGroup({setFormOpen}) {
  return (
    <div>
  <div className='button-group'>
    <SvgButton onClick={setFormOpen} >Order Now</SvgButton>
    <SvgButton>About Us</SvgButton>

  </div>
  
  </div>
  );
}
