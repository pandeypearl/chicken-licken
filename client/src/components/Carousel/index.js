import { useState, useEffect } from 'react';
import hotwingsImg from '../../assets/intro-img/just-hotwings-6.png';
import specialsImg from '../../assets/intro-img/specials.png';
import easyBucksImg from '../../assets/intro-img/easy.png';
import burgerImg from '../../assets/intro-img/burger.png';
import hotwingDot from '../../assets/menu-groups/hotwings.png';
import specialDot from '../../assets/menu-groups/specials.png';
import easyDot from '../../assets/menu-groups/easy-menu.png';
import burgerDot from '../../assets/menu-groups/burgers.png';
import menuItemsData from '../../data/menuItemsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000)

        return () => clearInterval(interval);
    }, []);


    const slides = [
        {
            title: 'JUST HOTWINGS',
            subtitle: 'WHEN THE CRAVING’S GOT YOU',
            imgSrc: hotwingsImg,
            menuId: 'hotWingsMenu',
            section: 'Just Hotwings',
            invisible: 'wings',
            dotImg: hotwingDot,
        },
        {
            title: 'SOULICIOUS SPECIALS',
            subtitle: 'WHEN YOU NEED SOME SOUL FOOD®',
            imgSrc: specialsImg,
            menuId: 'specialsMenu',
            section: 'Soulicious Specials',
            invisible: 'specials',
            dotImg: specialDot,
        },
        {
            title: 'EASY BUCKS',
            subtitle: 'WHEN IT’S ALMOST MAHALA',
            imgSrc: easyBucksImg,
            menuId: 'easyMenu',
            section: 'Easy Bucks Menu',
            invisible: 'easy',
            dotImg: easyDot,
        },
        {
            title: 'CHICKEN BURGERS',
            subtitle: 'WHEN YOU JUST HAVE TO',
            imgSrc: burgerImg,
            menuId: 'burgersMenu',
            section: 'Just Chick\'n Burgers',
            invisible: 'burgers',
            dotImg: burgerDot,
        },
    ];

    const renderMenuItems = (menuId) => {
        const menu = menuItemsData.filter((e) => e.section === slides.find(slide => slide.menuId === menuId).section);

        return menu.map((x) => (
            <div key={x.id} className='menu-item-link' style={{ backgroundImage: `url('${x.image}')`}}>
                <h4>{x.name}</h4>
                <FontAwesomeIcon icon={faCirclePlus} color='#FFF275' className='menu-icon' />
            </div>
        ));
    }

    return (
        <div>
            <ul className='dot-wrapper'>
                {slides.map((slide, index) => (
                    <li
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}>
                        <img src={slide.dotImg} alt={`Dot ${index}`} />
                    </li>
                ))}
            </ul>

            <div className='wrapper'>
                <div className='slide-container'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide fade ${index === currentIndex ? 'visible': ''}`}
                        >
                            <div className='slide-intro'>
                                <div className='heading'>
                                    <h1>{slide.title}</h1>
                                    <h2>{slide.subtitle}</h2>
                                    <button>{`${slide.title.toLowerCase()} menu`}</button>
                                </div>
                                <div className='img-outer'>
                                    <div className='img-inner'>
                                        <img src={slide.imgSrc} alt={slide.title} />
                                    </div>
                                </div>
                                <h1 className='invisible-heading'>{slide.invisible.toLowerCase()}</h1>
                            </div>
                            <div className='menu-items' id={slide.menuId}>
                                {renderMenuItems(slide.menuId)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
        
        
    );
};

export default Carousel;