import './index.scss';
import MenuNav from '../../components/MenuNav';
import MenuView from '../../components/MenuView';
import CartPage from '../../pages/Cart';
import { CartContext } from '../../pages/Cart/CartContext';
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
        console.log('Adding item to cart:', item);
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // Updating quantity if item already in cart
            const updatedCart = cartItems.map((cartItem) => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity} : cartItem
            );
            setCartItems(updatedCart);
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        } else {
            // Adding new item to cart
            const newCartItems = [...cartItems, item];
            setCartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }
        console.log('Updated cart items:', cartItems);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('cartItems state:', cartItems);
    }, [cartItems]);
    
    

    return (
        <CartContext.Consumer>
            {({ cartItems, setCartItems}) => (
                <div className='page-wrapper'>
                    <MenuNav onSelectMenu={handleSelectMenu} selectedMenuId={selectedMenu?.id} />
                    <div className='menu-wrapper'>
                        {selectedMenu ? (
                            <MenuView menu={selectedMenu} onAddToCart={setCartItems} />
                        ) : (
                            <CartPage cartItems={cartItems} />  
                        )}
                    </div>
                </div>
            )}
        </CartContext.Consumer>
        
    )
}

export default MenuPage;