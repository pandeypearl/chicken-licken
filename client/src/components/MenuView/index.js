import './index.scss';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext} from '../../pages/Cart/CartContext';

const MenuItem = ({ item, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    const handleAddToCartClick = () => {
        onAddToCart(item, quantity);
        setQuantity(1);
    };

    return (
        <li key={item.id}>
          <div className='cart-add'>
            <input
              type='number'
              value={quantity}
              onChange={handleQuantityChange}
              min='1'
            />
            <FontAwesomeIcon
              icon={faCirclePlus}
              className='item-icon'
              onClick={handleAddToCartClick}
            />
          </div>
          <div>
            <img src={item.image} alt={item.item} />
          </div>
          <div>
            <p>{item.item}</p>
            <p>R {item.price}</p>
          </div>
        </li>
      );
};

const MenuView = ({ menu }) => {
    const { setCartItems } = useContext(CartContext);

    const handleAddToCart = (item, quantity) => {
        console.log('Adding item to cart:', item);
        setCartItems((prevCartItems) => [
            ...prevCartItems, {
                id: item.id,
                name: item.item,
                price: item.price,
                image: item.image,
                quantity: quantity,
            },
        ]);
        // setQuantity(1);
    };

    return (
        <div className='menu-container'>
            <div className='menu-intro'>
                <div>
                    <h2>{menu.info.name}</h2>
                    <p>{menu.info.phrase}</p>
                </div>
                <img src={menu.info.cover_img} alt={`${menu.info.name} Cover`} />
            </div>
            

            <div className='menu-items'>
                <ul>
                    {menu.items.map((item) => (
                        <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
                        // <li key={item.id}>
                        //     <div className='cart-add'>
                        //         <input 
                        //             type='number'
                        //             value={quantity}
                        //             onChange={handleQuantityChange}
                        //             min='1'
                        //         />
                        //         <FontAwesomeIcon
                        //             icon={faCirclePlus} 
                        //             className='item-icon'
                        //             onClick={() => handleAddToCartClick(item)}
                        //         />
                        //     </div>
                        //     <div>
                        //         <img src={item.image} alt={item.item}/>
                        //     </div>
                        //     <div>
                        //         <p>{item.item}</p>
                        //         <p>R {item.price}</p>
                        //     </div>
                        // </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuView;