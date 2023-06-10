import style from './NewsCard.module.scss';

const NewsCard = (props) => {
    return (
        <li className={style["news-item"]}>
            <div className={style["news-item__img"]}>
                <img src={props.src} alt={props.title} />
            </div>
            <div className={style["news-item__info"]}>
                <p className={style["news-item__date"]}>{props.date}</p>
                <h4 className={style["news-item__title"]}>{props.title}</h4>
            </div>
        </li>
    )
};

export default NewsCard;