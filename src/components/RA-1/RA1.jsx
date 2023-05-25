import styles from './RA1.module.scss';

const RA1 = ({ movie, btnLink }) => {
    const backgrounds = {
        image: movie.src,
        gradient: 'linear-gradient(180deg, rgba(29, 29, 29, 0) 15.78%, rgba(29, 29, 29, 0.78) 100%)'
    };

    return <div>
        <article className={styles.card} style={{
            backgroundImage: `${backgrounds.gradient}, url(${backgrounds.image})`
        }}>
            <h2 className={styles.card__title}>{movie.title}</h2>
            <a className={styles.card__btn} href={btnLink}>Book Now</a>
        </article>
    </div >;
};

export default RA1;
