
import './App.css';
import Navbar from './components/Navbar'
import BgVideo from './components/BgVideo'
import Sidebar from './components/Sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import FormModal from './components/FormModal'
import { useState } from 'react';
import AboutPage from './components/AboutPage';
import TitleGroup from './components/TitleGroup';



function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="App">
      <div className="nav-grid">
       
      <motion.div
      marginLeft='120px'
      initial={{visibility:'hidden', opacity: 0, }}

    
  animate={{ x: 120, visibility: 'visible', opacity: 1 }}
  transition={{ delay: 2, ease: "easeOut", duration: 1 }}

  >
      <Sidebar aboutOpen={aboutOpen} setAboutOpen={setAboutOpen} setFormOpen={setFormOpen}/>
      </motion.div>
      

    
     <Navbar setAboutOpen={setAboutOpen} />
     <TitleGroup setFormOpen={setFormOpen} aboutOpen={aboutOpen} setAboutOpen={setAboutOpen}/>
     {aboutOpen && 
     <AnimatePresence>
     <motion.div
     marginLeft='120px'
      initial={{visibility:'hidden', opacity: 0, }}
      animate={{ visibility: 'visible', opacity: 1 }}
  transition={{ ease: "easeOut", duration: 1 }}
  exit={{x: 120, opacity: 0}}
      >
     <AboutPage setAboutOpen={setAboutOpen}/>
     </motion.div>
     </AnimatePresence>
     }
     
     <FormModal open={formOpen} setOpen={setFormOpen}/>
     </div>
     <BgVideo/>
    </div>
  );
}

export default App;
