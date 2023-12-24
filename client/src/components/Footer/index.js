import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/ChickenLickenSA/'>
                        <FontAwesomeIcon icon={faFacebook} color='#FF8C00' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://twitter.com/ChickenLickenSA'>
                        <FontAwesomeIcon icon={faTwitter} color='#FF8C00' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.youtube.com/user/ChickenLickenSA'>
                        <FontAwesomeIcon icon={faYoutube} color='#FF8C00' />
                    </a>
                </li>
            </ul>
            <div>
                <Link>franchising</Link>
                <Link>talk to us</Link>
                <Link>privacy policy</Link>
            </div>
        </footer>
    )
}

export default Footer;