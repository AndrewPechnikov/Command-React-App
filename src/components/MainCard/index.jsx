import styles from './MainCard.module.scss';
import imageCard from './The_Lion_King.png';

const MainCard = (props) =>{
  return <div>
            <article className={styles.mainCard}>
            <img className={styles.mainCard__pic} src={imageCard} alt="The Lion King" />
            <div className={styles.mainCard__info}>
                <p className={styles.mainCard__title}>{props.title}</p>
                <p className={styles.mainCard__date}>{props.date}</p>
                <p className={styles.mainCard__age}>{props.age}</p>
                    <div className={styles.mainCard__language}>
                        <span className={styles.language}>{props.languageUA}</span>
                        <span className={styles.language}>{props.languageEN}</span>
                    </div>
            </div>
        </article>
  </div>;
}

export default MainCard;