import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export function NavbarComponent() {
  return (
    <div className='NavbarContainer'>
      <div className='box-down'>
        <NavLink className='SideText NavLink' to='/aboutus'>
          About us
        </NavLink>
      </div>
      <div className='box-down'>
        <NavLink className='SideText NavLink' to='/signin'>
          Sign in
        </NavLink>
      </div>
      <div className='box-down'>
        <NavLink className='SideText NavLink' to='/signup'>
          Sign up
        </NavLink>
      </div>
    </div>
  );
}
