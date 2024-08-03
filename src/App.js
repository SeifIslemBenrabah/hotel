import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './components/NavBar';
import Rooms from './Pages/Rooms'
import Facilities from './Pages/Facilities'
import ContactUs from './Pages/ContactUs'
function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Rooms' element={<Rooms/>} />
          <Route path='/Facilities' element={<Facilities />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;