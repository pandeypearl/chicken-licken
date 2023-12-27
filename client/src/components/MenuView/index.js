import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const MenuView = ({menu}) => {
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
                            <div>
                                <FontAwesomeIcon icon={faCirclePlus} className='item-icon'/>
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