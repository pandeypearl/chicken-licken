import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const MenuView = ({menu, onAddToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    }
    
    const handleAddToCartClick = (item) => {
        console.log('Adding item to cart:', item);
        onAddToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
        });
        setQuantity(1);
    };

    return (
        <div className='menu-container'>
            <div className='menu-intro'>
                <div>
                    <h2>{menu.name}</h2>
                    <p>{menu.phrase}</p>
                </div>
                <img src={menu.cover_img} alt={`${menu.name} Cover`} />
            </div>
            

            <div className='menu-items'>
                <ul>
                    {menu.items.map((item) => (
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
                                    onClick={() => handleAddToCartClick(item)}
                                />
                            </div>
                            <div>
                                <img src={item.image} alt={item.item}/>
                            </div>
                            <div>
                                <p>{item.item}</p>
                                <p>R {item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MenuView;