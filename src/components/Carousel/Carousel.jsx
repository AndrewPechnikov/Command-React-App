import React, { useState } from 'react';

import listOfFilms from 'tools/listOfFilms';

import HeroCard from 'components/HeroCard';
import styles from './Carousel.module.scss';
import cardStyles from '../HeroCard/HeroCard.module.scss';

const Carousel = () => {
    const [activeCard, setActiveCard] = useState(2);

    const comingSoonFilms = listOfFilms.comingSoon;
    // const todayFilms = listOfFilms.today;

    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };


    return (
        <ul className={styles.carouselList}>
            {comingSoonFilms.map((filmId, index) => {
                return (
                    <HeroCard
                        className={`${cardStyles.heroCard} ${index === activeCard ? cardStyles.active : ''}`}
                        key={index}
                        btnLink={'#'}
                        filmId={filmId}
                        onClick={() => handleCardClick(index)}
                    />
                );
            })}
        </ul>
    );
};


export default Carousel;