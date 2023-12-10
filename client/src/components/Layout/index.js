import { Outlet } from 'react-router-dom';
import TopNav from '../TopNav';
import Footer from '../Footer';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <TopNav />
            <div className='page'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;