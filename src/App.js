import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import BgVideo from './components/BgVideo'
import Sidebar from './components/Sidebar'



function App() {
  return (
    <div className="App">
      <div className="nav-grid">
      <Sidebar/>
      
     <Navbar/>
     </div>
     <BgVideo/>
    </div>
  );
}

export default App;
