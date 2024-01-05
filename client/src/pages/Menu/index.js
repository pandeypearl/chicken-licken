import './index.scss';
import MenuNav from '../../components/MenuNav';
import MenuView from '../../components/MenuView';
// import CartPage from '../../pages/Cart';
import { useCart } from '../../pages/Cart/CartContext';
import { useState, useEffect } from 'react';
import MenuData from '../../data/menuData';


const MenuPage = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const { cartItems, setCartItems } = useCart();

    useEffect(() => {
        // setSelectedMenu(MenuData[0]);
        console.log('MenuData:', MenuData); 
        const menuWithItems = MenuData.find(menu => menu.items && menu.items.length > 0);
        console.log('Selected Menu:', menuWithItems);

        setSelectedMenu(menuWithItems || null); 
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
        } else {
            // Adding new item to cart
            const newCartItem = {...item, quantity: 1 };
            setCartItems([...cartItems, newCartItem]);
        }
    };

    useEffect(() => {
        // Update local storage when cartItems change
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    console.log('selectedMenu:', selectedMenu); // Add this log

    return (
        <div className='page-wrapper'>
            <MenuNav onSelectMenu={handleSelectMenu} selectedMenuId={selectedMenu?.id} />
            <div className='menu-wrapper'>
                {selectedMenu &&  <MenuView menu={selectedMenu} onAddToCart={handleAddToCart}/>}
            </div>
        </div>
    );
}

export default MenuPage;