import './index.scss';
import MenuNav from '../../components/MenuNav';
import MenuView from '../../components/MenuView';
// import CartPage from '../../pages/Cart';
import { CartContext } from '../../pages/Cart/CartContext';
import { useState, useEffect, useContext } from 'react';
// import MenuData from '../../data/menuData';
import { PRODUCTS } from '../../data/products';


const menuInfo = {
    'JUST HOTWINGS': {
        name: 'JUST HOTWINGS',
        phrase: 'WHEN THE CRAVING’S GOT YOU',
        cover_img: require('../../data/images/cover/Hotwings.png'), 
    },
    'SOULICIOUS SPECIALS': {
        name: 'SOULICIOUS SPECIALS',
        phrase: 'WHEN YOU NEED SOME SOUL FOOD®',
        cover_img: require('../../data/images/cover/Soulicious.png'),
    },
    'CHICKEN MEALS': {
        name: 'CHICKEN MEALS',
        phrase: 'WHEN YOU WANT MORE FOR EVERYONE',
        cover_img: require('../../data/images/cover/ChickenMeals.png'),
    },
    'SOULSISTER SPECIALS': {
        name: 'SOULSISTER SPECIALS',
        phrase: 'WHEN A SISTER NEEDS SOME SOUL',
        cover_img: require('../../data/images/cover/Soulsister.png'),
    },
    'JUST CHICKEN LICKEN': {
        name: 'JUST CHICKEN LICKEN',
        phrase: 'WHEN YOU JUST CAN’T RESIST',
        cover_img: require('../../data/images/cover/JustChickenLicken.png'),
    },
    'EASY BUCKS MENU': {
        name: 'EASY BUCKS MENU',
        phrase: 'WHEN IT’S ALMOST MAHALA',
        cover_img: require('../../data/images/cover/EasyBucks.png'),
    },
    'JUST CHICKEN BURGERS': {
        name: 'JUST CHICKEN BURGERS',
        phrase: 'WHEN YOU JUST HAVE TO',
        cover_img: require('../../data/images/cover/JustChickenBurgers.png'),
    },
    'TOP DELUXE': {
        name: 'TOP DELUXE',
        phrase: 'WHEN YOU’RE HUNGRY AT HEART',
        cover_img: require('../../data/images/cover/TopDeluxe.png'),
    },
    'JUST SOULBITES': {
        name: 'JUST SOULBITES®',
        phrase: 'When you need nuggets to feed your soul',
        cover_img: require('../../data/images/cover/SoulBites.png'),
    },
    'ORIGINAL SQUARE SLYDERS': {
        name: 'ORIGINAL SQUARE SLYDERS',
        phrase: 'WHEN IT’S HIP TO EAT SQUARE',
        cover_img: require('../../data/images/cover/OriginalSquareSlyders.png'),
    },
    'SUPER SLYDERS': {
        name: 'SUPER SLYDERS',
        phrase: 'WHEN IT\'S HIP TO EAT SQUARE',
        cover_img: require('../../data/images/cover/SuperSlyders.png'),
    },
    'SLIDER SPECIALS': {
        name: 'SLIDER SPECIALS',
        phrase: 'WHEN YOU CAN’T LET IT SLIDE',
        cover_img: require('../../data/images/cover/SliderSpecials.png'),
    },
    'SUPER SLIDER SPECIALS': {
        name: 'SUPER SLIDER SPECIALS',
        phrase: 'WHEN YOU CAN\'T LET IT SLIDE',
        cover_img: require('../../data/images/cover/SuperSlidersSpecials.png'),
    },
    'EXTRA LICKEN': {
        name: 'EXTRA LICKEN',
        phrase: 'WHEN YOU WANT TO LEVEL UP',
        cover_img: require('../../data/images/cover/ExtraLicken.png'),
    },
    'Chicky Licky': {
        name: 'Chicky Licky',
        phrase: 'WHEN THE LITTLE LICKENEERS ARE HUNGRY',
        cover_img: require('../../data/images/cover/ChickyLicky.png'),
    },
    'SALAD LICKEN': {
        name: 'SALAD LICKEN',
        phrase: ' WHEN YOU NEED A SIDEKICK',
        cover_img: require('../../data/images/cover/Salad.png'),
    },
    'LICKEN LEKKER': {
        name: 'LICKEN LEKKER',
        phrase: 'WHEN YOU NEED TO KEEP IT COOL',
        cover_img: require('../../data/images/cover/LickenLekker.png'),
    },
    'CALIFORNIA COOLERS': {
        name: 'CALIFORNIA COOLERS',
        phrase: 'WHEN YOU NEED TO REFRESH',
        cover_img: require('../../data/images/cover/CaliforniaCoolers.png'),
    },
    'SECRET MENU': {
        name: 'SECRET MENU',
        phrase: 'When it\'s hush-hush',
        cover_img: require('../../data/images/cover/SecretMenu.png'),
    },
}

const getItemsByMenu = (menuName) => {
    return PRODUCTS.filter((item) => item.menu === menuName);
};

const MenuPage = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedMenuId, setSelectedMenuId] = useState(null);

    useEffect(() => {
        const defaultMenu = PRODUCTS[0].menu;
        setSelectedMenuId(defaultMenu);
        const defaultMenuItems = getItemsByMenu(defaultMenu);
        setSelectedMenu({
            name: defaultMenu,
            items: defaultMenuItems,
            info: menuInfo[defaultMenu],
        });
    }, []);

    const handleSelectMenu = (menuName) => {
        const selectedMenuItems = getItemsByMenu(menuName);
        setSelectedMenu({
            name: menuName,
            items: selectedMenuItems,
            info: menuInfo[menuName],
        });
        setSelectedMenuId(menuName);
    }

    

    return (
        <div className='page-wrapper'>
            <MenuNav onSelectMenu={handleSelectMenu} selectedMenuId={selectedMenuId} />
            <div className='menu-wrapper'>
                {selectedMenu &&  <MenuView menu={selectedMenu} />}
            </div>
        </div>
    );
}

export default MenuPage;