import { useState, useEffect } from 'react';
import hotwingsImg from '../../assets/intro-img/just-hotwings-6.png';
import specialsImg from '../../assets/intro-img/specials.png';
import easyBucksImg from '../../assets/intro-img/easy.png';
import burgerImg from '../../assets/intro-img/burger.png';
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

        return () => clearInterval(interval)
    }, []);

    const slides = [
        {
            title: 'JUST HOTWINGS',
            subtitle: 'WHEN THE CRAVING’S GOT YOU',
            imgSrc: {hotwingsImg},
            menuId: 'hotWingsMenu',
            invisible: 'wings'
        },
        {
            title: 'SOULICIOUS SPECIALS',
            subtitle: 'WHEN YOU NEED SOME SOUL FOOD®',
            imgSrc: {specialsImg},
            menuId: 'specialsMenu',
            invisible: 'specials'
        },
        {
            title: 'EASY BUCKS',
            subtitle: 'WHEN IT’S ALMOST MAHALA',
            imgSrc: {easyBucksImg},
            menuId: 'easyMenu',
            invisible: 'easy'
        },
        {
            title: 'CHICKEN BURGERS',
            subtitle: 'WHEN YOU JUST HAVE TO',
            imgSrc: {burgerImg},
            menuId: 'burgersMenu',
            invisible: 'burgers'
        },
    ];

    return (
        <div className='wrapper'>
            <ul className='dot-wrapper'>
                {slides.map((_, index) => (
                    <li
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}>
                        <img src={`../../assests/menu-groups/${index}.png`} alt={`Dot ${index}`} />
                    </li>
                ))}
            </ul>

            <div className='slide-intro'>
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
                        <div className='menu-items' id={slide.menuId}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;