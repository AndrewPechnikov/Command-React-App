import React, { useState } from 'react';

import listOfFilms from 'tools/listOfFilms';

import HeroCard from 'components/HeroCard';
import styles from './Carousel.module.scss';
import cardStyles from '../HeroCard/HeroCard.module.scss';

const Carousel = ({ setBackground, activeBtn }) => {
    const [activeCard, setActiveCard] = useState(2);

    let movieCategory = '';

    if (activeBtn === 'soon') {
        movieCategory = listOfFilms.comingSoon;
    } else if (activeBtn === 'today') {
        movieCategory = listOfFilms.today;
    }

    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? null : index);
    };

    return (
        <ul className={styles.carouselList}>
            {movieCategory.map((film, index) => {
                return (
                    <HeroCard
                        className={`${cardStyles.heroCard} ${index === activeCard ? cardStyles.active : ''}`}
                        key={index}
                        btnLink={'#'}
                        filmId={film}
                        onClick={() => handleCardClick(index)}
                        setBackground={setBackground}
                    />
                );
            })}
        </ul>
    );
};

export default Carousel;