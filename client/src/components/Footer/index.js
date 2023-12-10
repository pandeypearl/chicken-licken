import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <Link><FontAwesomeIcon icon={faFacebook} color='#FF8C00' /></Link>
                <Link><FontAwesomeIcon icon={faTwitter} color='#FF8C00' /></Link>
                <Link><FontAwesomeIcon icon={faYoutube} color='#FF8C00' /></Link>
            </div>
            <div>
                <Link>franchising</Link>
                <Link>talk to us</Link>
                <Link>privacy policy</Link>
            </div>
        </footer>
    )
}

export default Footer;