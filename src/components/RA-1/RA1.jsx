import styles from './RA1.module.scss';

const RA1 = ({ movie }, btnLink) => {
    return <div>
        <article className={styles.card}>
            <img className={styles.card__img} src={movie.src} alt={movie.alt} />
            <h2 className={styles.card__title}>{movie.title}</h2>
            <a className={styles.card__btn} href={btnLink}>Book Now</a>
        </article>
    </div>;
};

export default RA1;
