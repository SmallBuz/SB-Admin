import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeComponent } from '../modules/LandingPage/Home/Home';
import { LoginComponent } from '../modules/LandingPage/Login/Login';
import { RegisterComponent } from '../modules/LandingPage/Register/Register';
import { AboutComponent } from '../modules/LandingPage/About/About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent />}></Route>
          <Route path='/aboutus' element={<AboutComponent />}></Route>
          <Route path='/signin' element={<LoginComponent />}></Route>
          <Route path='/signup' element={<RegisterComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
