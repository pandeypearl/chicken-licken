import { Link,NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const TopNav = () => {

    return (
        <nav className='top-nav'>
            <div>
                <Link className='logo' to='/'>
                    <img src={Logo} alt='Logo' />
                </Link>
            </div>

            <div>
                <NavLink exact='true' activeClassName='active' to='/menu'>menu</NavLink>
                <NavLink exact='true' activeClassName='active' to='/'>store finder</NavLink>
                <NavLink exact='true' activeClassName='active' to='/'>delivery</NavLink>
                <NavLink exact='true' activeClassName='active' to='/'>search</NavLink>
            </div>

            <div>
                <NavLink exact='true' activeClassName='active' to='/cart'><FontAwesomeIcon icon={faBagShopping} color='#FF8C00' /></NavLink>
            </div>
        </nav>
    )

}

export default TopNav;