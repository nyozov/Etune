import logo from './logo.svg';
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
       
      <Sidebar setFormOpen={setFormOpen}/>

      
     <Navbar/>
     
     <FormModal open={formOpen} setOpen={setFormOpen}/>
     </div>
     <BgVideo/>
    </div>
  );
}

export default App;
