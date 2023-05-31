import React, { useState, useEffect } from 'react';
import getMovie from 'tools/getMovie';

import styles from './HeroCard.module.scss';


const HeroCard = ({ btnLink, filmId, className, onClick, setBackground }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const movie = await getMovie(filmId);
            setData(movie);
        };
        loadData();
    }, [filmId]);

    const handleCardClick = () => {
        onClick();
        setBackground(data.Poster);
    };

    return (
        <li>
            <article
                className={className}
                onClick={handleCardClick}
            >
                <img
                    className={styles.heroCard__img}
                    src={data.Poster}
                    alt={data.Title + ' poster'}
                />
                <h2 className={styles.heroCard__title}>{data.Title}</h2>
                <a className={styles.heroCard__btn} href={btnLink}>
                    Book Now
                </a>
            </article>
        </li>
    );
};

export default HeroCard;
