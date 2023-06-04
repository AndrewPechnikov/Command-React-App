import React, { useState, useEffect } from 'react';
import getMovies from 'tools/getMovie';

import HeroCard from 'components/HeroCard';
import styles from './Carousel.module.scss';
import cardStyles from '../HeroCard/HeroCard.module.scss';

const imgApi = 'https://image.tmdb.org/t/p/w500/';

const Carousel = ({ setBackground, activeBtn }) => {
    const [activeCard, setActiveCard] = useState(6);
    const [data, setData] = useState([]);

    let movieCategory = '';

    if (activeBtn === 'soon') {
        movieCategory = 'upcoming';
    } else if (activeBtn === 'today') {
        movieCategory = `now_playing`;
    }

    useEffect(() => {
        const loadData = async () => {
            const movies = await getMovies(movieCategory);
            setData(movies.results);
            setBackground(`${imgApi}${movies.results[6].poster_path}`);
        };
        loadData();
    }, [movieCategory, setData, setBackground]);

    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? activeCard : index);
    };

    return (
        <ul className={styles.carouselList}>
            {data.map((film, index) => {
                return (
                    <HeroCard
                        className={`${cardStyles.heroCard} ${index === activeCard ? cardStyles.active : ''}`}
                        key={film.id}
                        btnLink={'#'}
                        onClick={() => handleCardClick(index)}
                        setBackground={setBackground}
                        movie={film}
                    />
                );
            })}
        </ul>
    );
};

export default Carousel;