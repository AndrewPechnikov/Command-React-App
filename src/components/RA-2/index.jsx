import styles from './RA2.module.scss';
import imageCard from './The_Lion_King.png';

function RA2() {
  return <div>
            <article className={styles.mainCard}>
            <img className={styles.mainCard__pic} src={imageCard} alt="The Lion King" />
            <div className={styles.mainCard__info}>
                <p className={styles.mainCard__title}>The Lion King</p>
                <p className={styles.mainCard__date}>20 April</p>
                <p className={styles.mainCard__age}>+12</p>
                    <div className={styles.mainCard__language}>
                        <span className={styles.language}>UA</span>
                        <span className={styles.language}>EN</span>
                    </div>
            </div>
        </article>
  </div>;
}

export default RA2;