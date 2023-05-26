import styles from './RA1.module.scss';


const RA1 = ({ movie, btnLink }) => {

    return <div>
        <article className={styles.heroCard}>
            <img className={styles.heroCard__img} src={movie.src} alt={movie.title + ' poster'} />
            <h2 className={styles.heroCard__title}>{movie.title}</h2>
            <a className={styles.heroCard__btn} href={btnLink}>Book Now</a>
        </article>
    </div >;
};

export default RA1;
