import { NavbarComponent } from '../components/Navbar';
import './Login.scss';

export function LoginComponent() {
  return (
    <div className='LoginContainer'>
    <NavbarComponent></NavbarComponent>

    <div className='LoginBodyContainer'>
      <div className='LoginSideLeft'>
        <div className='LoginSideRight'></div>
        <div className='Loginbox-down'>
        
          <p className='LoginSideText'>Control of your business in your hands</p>
          <p className='LoginSideText'>
            Start taking more control of your business right now.
          </p>
        </div>
        <button className='LoginButtonStart'>Start</button>
      </div>
    </div>
  </div>
  );
}

