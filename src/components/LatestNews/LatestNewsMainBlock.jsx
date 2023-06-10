import styles from './LatestNewsMainBlock.module.scss';

const LatestNewsMainBlock = props => {

    return (
        <div className={styles['news-main-block']}>
            <div className={styles['news-main-block_title']}>
                <h4 className={styles['news-main-block_title__header']}>{props.title}</h4>
                <p className={styles['news-main-block_title__date']}>{props.date}</p>
            </div>
            <p className={styles['news-main-block_text']}>{props.news}</p>
            <img src={props.src} alt='Latest news' className={styles['news-main-block_background']} />
        </div>
    )
};

export default LatestNewsMainBlock;