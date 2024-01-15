import './index.scss';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { CartContext} from '../../pages/Cart/CartContext';

const MenuItem = ({ item, onAddToCart }) => {
    // const { cartItems, addToCart, updateCartItemCount } = useContext(CartContext);
    // const [quantity, setQuantity] = useState(1);

    // const handleQuantityChange = (event) => {
    //     const newQuantity = parseInt(event.target.value, 10);
    //     if (!isNaN(newQuantity) && newQuantity >= 1) {
    //         setQuantity(newQuantity);
    //     }
       
    // };

    const handleAddToCartClick = () => {
        const itemId = item.id;
        if (!itemId) {
            console.error('Invalid item id');
            return;
        }

        onAddToCart(itemId);
        // console.log('Icon clicked!');
        // console.log('Item ID:', item.id);
        // const itemId = item.id;
        // console.log('Cart Items:', cartItems);
        // console.log('Cart Items after addToCart:', cartItems);
        // if (!itemId || cartItems[itemId] === undefined){
        //     console.error('Invalid item id or quantity in cart');
        //     return;
        // }

        // console.log('Current Quantity:', cartItems[itemId]);
        // const currentQuantity = cartItems[itemId];
        // if (currentQuantity > 0) {
        //     console.log('Updating item quantity in cart...');
        //     updateCartItemCount(currentQuantity + quantity, itemId);
        // } else {
        //     console.log('Current quantity in cart: 0');
        //     addToCart(itemId, quantity);
        // }
        // setQuantity(1);
    };

    return (
        <li key={item.id}>
          <div className='cart-add'>
            {/* <input
                type='number'
                value={quantity}
                onChange={(e) => handleQuantityChange(e)}
                min='1'
            /> */}
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
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (itemId) => {
        addToCart(itemId);
        // console.log('Attempting to add item to cart:', itemId, 'with quantity:', quantity);

        // const currentQuantity = cartItems[itemId];
        // console.log('Current quantity in cart:', currentQuantity);

        // if (currentQuantity > 0) {
        //     console.log('Updating item quantity in cart...');
        //     updateCartItemCount(currentQuantity + quantity, itemId);
        // } else {
        //     console.log('Adding new item to cart...');
        //     addToCart(itemId, quantity);
        // }
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
                        <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuView;