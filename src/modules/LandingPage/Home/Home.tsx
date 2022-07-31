import { NavbarComponent } from '../components/Navbar';
import './Home.scss';
export function HomeComponent() {
  return (
    
    <div className='HomeContainer'>
      <NavbarComponent></NavbarComponent>

      <div className='BodyContainer'>
        <div className='SideLeft'>
          <div className='SideRight'>wd</div>
          <div className='box-down'>
            <p className='SideText'>Control of your business in your hands</p>
            <p className='SideText'>
              Start taking more control of your business right now.
            </p>
          </div>
          <button className='ButtonStart'>Start</button>
        </div>
      </div>
    </div>
  );
}
