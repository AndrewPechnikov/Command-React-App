import React, { useState, useEffect } from 'react';
import getMovies from 'tools/getMovie';

import HeroCard from 'components/HeroCard';
import styles from './Carousel.module.scss';
import cardStyles from '../HeroCard/HeroCard.module.scss';

const imgApi = 'https://image.tmdb.org/t/p/w500/';
let defaultCard = 0;

// const carouselListStyles = {
//     gridTemplateColumns: 'repeat(20, auto)',

// };

const Carousel = ({ setBackground, activeBtn }) => {
    const [activeCard, setActiveCard] = useState(defaultCard);
    const [data, setData] = useState([]);
    const [translateXValue, setTranslateXValue] = useState(954);

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
            setBackground(`${imgApi}${movies.results[defaultCard].backdrop_path}`);
        };
        loadData();
    }, [movieCategory, setData, setBackground]);

    const handleCardClick = (index) => {
        setActiveCard(index === activeCard ? activeCard : index);
    };

    // const changeCard = (direction = 1) => {
    //     let cardNumber = 0;

    //     if (card + direction < 0) {
    //         cardNumber = data.length - 1;
    //     } else {
    //         cardNumber = (card + direction) % data.length;
    //     }

    //     setCard(cardNumber);
    // };

    const goToNext = () => {
        const isLastCard = activeCard === data.length - 1;
        const newIndex = isLastCard ? 0 : activeCard + 1;
        setActiveCard(newIndex);
        setBackground(`${imgApi}${data[newIndex].backdrop_path}`);
        setTranslateXValue(translateXValue - 100);

        if (isLastCard) {
            setTranslateXValue(954);
        }

    };

    const goToPrevious = () => {
        const isFirstCard = activeCard === 0;
        const newIndex = isFirstCard ? data.length - 1 : activeCard - 1;
        setActiveCard(newIndex);
        setBackground(`${imgApi}${data[newIndex].backdrop_path}`);
        setTranslateXValue(translateXValue + 100);

        if (isFirstCard) {
            setTranslateXValue(-874);
        }
    };

    return (
        <div className={styles.carousel}>
            <i className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={() => goToPrevious()}
            ></i>
            <ul className={styles.carouselList}
                style={{ transform: `translateX(${translateXValue}px)` }}
            >
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
            <i className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={() => goToNext()}
            ></i>
        </div >
    );
};

export default Carousel;