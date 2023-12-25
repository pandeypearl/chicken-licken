import './index.scss';

const MenuNav = () => {

    const menuBtns = [
        {
            id: '000',
            img: require('../../assets/menu-groups/hotwings.png'),
            title: 'JUST HOTWINGS', 
        },
        {
            id: '001',
            img: require('../../assets/menu-groups/specials.png'),
            title: 'SOULICIOUS SPECIALS', 
        },
        {
            id: '002',
            img: require('../../assets/menu-groups/chicken-meals.png'),
            title: 'CHICKEN MEALS', 
        },
        {
            id: '003',
            img: require('../../assets/menu-groups/soulsister.png'),
            title: 'SOULSISTER SPECIALS', 
        },
        {
            id: '004',
            img: require('../../assets/menu-groups/chickenlicken.png'),
            title: 'JUST CHICKEN LICKEN', 
        },
        {
            id: '005',
            img: require('../../assets/menu-groups/easy-menu.png'),
            title: 'EASY BUCKS MENU', 
        },
        {
            id: '006',
            img: require('../../assets/menu-groups/burgers.png'),
            title: 'JUST CHICK\'N BURGERS', 
        },
        {
            id: '007',
            img: require('../../assets/menu-groups/top-delux.png'),
            title: 'TOP DELUXE', 
        },
        {
            id: '008',
            img: require('../../assets/menu-groups/soulbites.png'),
            title: 'JUST SOULBITES', 
        },
        {
            id: '009',
            img: require('../../assets/menu-groups/slyders.png'),
            title: 'ORIGINAL SQUARE SLYDERS', 
        },
        {
            id: '010',
            img: require('../../assets/menu-groups/superslyder.png'),
            title: 'SUPER SLYDERS', 
        },
        {
            id: '012',
            img: require('../../assets/menu-groups/slyderspecials.png'),
            title: 'SLIDER SPECIALS', 
        },
        {
            id: '013',
            img: require('../../assets/menu-groups/superslider-specials.png'),
            title: 'SUPER SLIDER SPECIALS', 
        },
        {
            id: '014',
            img: require('../../assets/menu-groups/extra-licken.png'),
            title: 'EXTRA LICKEN', 
        },
        {
            id: '015',
            img: require('../../assets/menu-groups/chicky-licky.png'),
            title: 'CHICKY LICKY', 
        },
        {
            id: '016',
            img: require('../../assets/menu-groups/salad.png'),
            title: 'SALAD LICKEN', 
        },
        {
            id: '017',
            img: require('../../assets/menu-groups/licken-lekker.png'),
            title: 'LICK\'N LEKKER', 
        },
        {
            id: '018',
            img: require('../../assets/menu-groups/can-group.png'),
            title: 'CALIFORNIA COOLERS', 
        },
        {
            id: '019',
            img: require('../../assets/menu-groups/secret-menu.png'),
            title: 'SECRET MENU', 
        },
    ]
    return (
        <div className='menu-nav-container'>
            {menuBtns.map((btn, id) => (
                <div key={id} className='menu-btn'>
                    <img src={btn.img} alt={btn.title}></img>
                    <span>{btn.title}</span>
                </div>
            ))}
        </div>
    );
};

export default MenuNav;