import './index.scss';

const MenuView = ({menu}) => {
    return (
        <div>
            <h2>{menu.name}</h2>
            <p>{menu.phrase}</p>
            <img src={menu.cover_img} alt={`${menu.name} Cover`} />

            <div>
                <h3>Menu Items</h3>
                <ul>
                    {menu.items.map((item) => (
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.item}/>
                            </div>
                            <div>
                                <p>{item.item}</p>
                                <p>R{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MenuView;