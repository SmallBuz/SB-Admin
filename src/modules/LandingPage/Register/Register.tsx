import { NavbarComponent } from '../components/Navbar';
import './Register.scss';
export function RegisterComponent() {
  return (
    <div className='RegisterContainer'>
            <NavbarComponent></NavbarComponent>
      <div className='RegisterBodyContainer'>
        <div className='RegisterForms'>
          <div className='Registerbox-down'>
            <p className='RegisterSideText'>Control of your business in your hands</p>
            <p className='RegisterSideText'>
              Start taking more control of your business right now.
            </p>
          </div>
          <button className='RegisterButtonStart'>Start</button>
        </div>
      </div>
    </div>
  );
}
