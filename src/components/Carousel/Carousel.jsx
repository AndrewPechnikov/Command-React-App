import React, { useState, useEffect } from 'react';
import getMovies from 'api/getMovie';

import HeroCard from 'components/HeroCard';
import cardStyles from '../HeroCard/HeroCard.module.scss';

import CarouselButton from './controls/CarouselButton';

import { goToNext, goToPrevious } from './controls/carouselUtils';

import styles from './Carousel.module.scss';

const imgApi = 'https://image.tmdb.org/t/p/w1280/';
const DEFAULT_BUTTON_VALUE = 'soon';
let defaultCard = 3;

const Carousel = ({ setBackground }) => {
	const [activeCard, setActiveCard] = useState(defaultCard);
	const [data, setData] = useState([]);
	const [translateXValue, setTranslateXValue] = useState(600);
	const [category, setCategory] = useState(DEFAULT_BUTTON_VALUE);

	let movieCategory = '';

	if (category === 'soon') {
		movieCategory = 'upcoming';
	} else if (category === 'today') {
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

	return (
		<div className={styles.carousel}>
			<div className={styles.carousel__wrapper}>
				<CarouselButton
					label='today'
					setCategory={setCategory}
					category={category}
				/>
				<CarouselButton
					label='soon'
					setCategory={setCategory}
					category={category}
				/>
			</div>

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
			<div className={styles.arrowWrapper}>
				<i className={`${styles.arrow} ${styles.arrowLeft}`}
					onClick={() => goToPrevious(
						activeCard,
						data,
						setActiveCard,
						setBackground,
						setTranslateXValue,
						imgApi,
						translateXValue
					)}
				></i>
				<i className={`${styles.arrow} ${styles.arrowRight}`}
					onClick={() => goToNext(
						activeCard,
						data,
						setActiveCard,
						setBackground,
						setTranslateXValue,
						imgApi,
						translateXValue
					)}
				></i>
			</div>
		</div >
	);
};

export default Carousel;