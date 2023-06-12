import styles from './HeroCard.module.scss';

const imgApi = 'https://image.tmdb.org/t/p/w780/';

const HeroCard = ({ btnLink = '#', className, onClick, setBackground, movie }) => {
	const handleCardClick = () => {
		onClick();
		setBackground(imgApi + movie.backdrop_path);
	};

	return (
		<li>
			<article
				className={className}
				onClick={handleCardClick}
			>
				<img
					className={styles.heroCard__img}
					src={imgApi + movie.poster_path}
					alt={movie.title + ' poster'}
				/>
				<h2 className={styles.heroCard__title}>{movie.title}</h2>
				<a className={styles.heroCard__btn} href={btnLink}>
					Book Now
				</a>
			</article>
		</li>
	);
};

export default HeroCard;
