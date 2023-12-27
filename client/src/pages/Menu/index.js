import './index.scss';
import MenuNav from '../../components/MenuNav';
import MenuView from '../../components/MenuView';
import { useState, useEffect } from 'react';
import MenuData from '../../data/menuData';

const MenuPage = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        setSelectedMenu(MenuData[0]);
    }, []);

    const handleSelectMenu = (menuId) => {
        const selected = MenuData.find((menu) => menu.id === menuId);
        setSelectedMenu(selected);
    }
    

    return (
        <div className='page-wrapper'>
            <MenuNav onSelectMenu={handleSelectMenu} />
            <div className='menu-wrapper'>
                {selectedMenu && <MenuView menu={selectedMenu} />}
            </div>
        </div>
    )
}

export default MenuPage;