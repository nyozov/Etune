import React from 'react';
import SvgButton from './SvgButton'

export default function ButtonGroup({aboutOpen, setAboutOpen, setFormOpen}) {
  return (
    <div>
  <div className='button-group'>
    <SvgButton onClick={setFormOpen} >Order Now</SvgButton>
    <SvgButton onClick={() => aboutOpen ? setAboutOpen(false) : setAboutOpen(true)} >About Us</SvgButton>

  </div>
  
  </div>
  );
}
