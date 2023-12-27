import './index.scss';
import MenuNav from '../../components/MenuNav';
import MenuView from '../../components/MenuView';
import CartPage from '../../pages/Cart';
import { useState, useEffect } from 'react';
import MenuData from '../../data/menuData';

const MenuPage = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setSelectedMenu(MenuData[0]);
    }, []);

    const handleSelectMenu = (menuId) => {
        const selected = MenuData.find((menu) => menu.id === menuId);
        setSelectedMenu(selected);
    }

    const handleAddToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // Updating quantity if item already in cart
            const updatedCart = cartItems.map((cartItem) => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity} : cartItem
            );
            setCartItems(updatedCart);
        } else {
            // Adding new item to cart
            setCartItems([...cartItems, item]);
        }
    };
    

    return (
        <div className='page-wrapper'>
            <MenuNav onSelectMenu={handleSelectMenu} selectedMenuId={selectedMenu ? selectedMenu.id : null} />
            <div className='menu-wrapper'>
                {selectedMenu ? (
                    <MenuView menu={selectedMenu} onAddToCart={handleAddToCart} />
                ) : (
                    <CartPage cartItems={cartItems} setCartItems={setCartItems} />  
                )}
            </div>
        </div>
    )
}

export default MenuPage;