import { NavbarComponent } from '../components/Navbar';
import {useNavigate} from 'react-router-dom';
import './Register.scss';
import TextField from '@mui/material/TextField';
export function RegisterComponent() {
  const navigate = useNavigate();
  return (
    <div className='RegisterContainer'>
            <NavbarComponent></NavbarComponent>
      <div className='RegisterBodyContainer'>
        <div className='RegisterForms'>
          <div className='Registerbox-down'>
          <TextField id="outlined-basic" label="Email" variant="outlined"
          
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
           <TextField
          id="repeat-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
   
          </div>
          <button className='RegisterButtonStart' onClick={() => {navigate('/contacts');}}>Start</button>
        </div>
      </div>
    </div>
  );
}
