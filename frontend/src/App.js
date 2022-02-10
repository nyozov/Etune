
import './App.css';
import Navbar from './components/Navbar'
import BgVideo from './components/BgVideo'
import Sidebar from './components/Sidebar'
import { motion } from 'framer-motion'
import FormModal from './components/FormModal'
import { useState } from 'react';



function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div className="App">
      <div className="nav-grid">
      <motion.div
      marginLeft='120px'
      initial={{visibility:'hidden', opacity: 0, }}

    
  animate={{ x: 120, visibility: 'visible', opacity: 1 }}
  transition={{ delay: 2, ease: "easeOut", duration: 1 }}
  >
      <Sidebar setFormOpen={setFormOpen}/>
      </motion.div>

    
     <Navbar/>
     
     <FormModal open={formOpen} setOpen={setFormOpen}/>
     </div>
     <BgVideo/>
    </div>
  );
}

export default App;
