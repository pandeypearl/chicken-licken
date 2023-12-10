import { Outlet } from 'react-router-dom';
import TopNav from '../TopNav';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <TopNav />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;