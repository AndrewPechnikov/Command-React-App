import Section from "./Section";
import LatestNewsMainBlock from "./LatestNewsMainBlock";
import NewsCard from "./NewsCard";

import img_1 from 'img/latest_news_img/img-1.jpeg';
import img_2 from 'img/latest_news_img/img-2.jpeg';
import img_3 from 'img/latest_news_img/img-3.jpeg';
import img_4 from 'img/latest_news_img/img-4.jpeg';
import img_5 from 'img/latest_news_img/img-5.jpeg';

import style from './LatestNewsSection.module.scss'

const news = [
    {
        id: 'news-2',
        date: '25.03.2022',
        title: 'An event titled "April battles and victory" dedicated to the Armed Forces Day was held at the Nizami Cinema Center',
        src: `${img_2}`,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis velit qui. Similique natus soluta dolorum animi maiores dolore, nisi, omnis blanditiis iure commodi corporis, iusto consequatur aliquid provident dolor.'
    },
    {
        id: 'news-3',
        date: '27.04.2022',
        title: '"Khazri" dance group at Nizami Cinema Center',
        src: `${img_3}`,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis velit qui. Similique natus soluta dolorum animi maiores dolore, nisi, omnis blanditiis iure commodi corporis, iusto consequatur aliquid provident dolor.'
    },
    {
        id: 'news-4',
        date: '29.04.2022',
        title: 'The conference "Azerbaijani cinema" was held at the Nizami Cinema Center.',
        src: `${img_4}`,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis velit qui. Similique natus soluta dolorum animi maiores dolore, nisi, omnis blanditiis iure commodi corporis, iusto consequatur aliquid provident dolor.'
    },
    {
        id: 'news-5',
        date: '01.02.2022',
        title: 'The conference "Heydar Aliyev and Azerbaijani cinema" was held at the Nizami Cinema Center',
        src: `${img_5}`,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis velit qui. Similique natus soluta dolorum animi maiores dolore, nisi, omnis blanditiis iure commodi corporis, iusto consequatur aliquid provident dolor.'
    },
];


const LatestNewsSection = () => {
    return (
        <Section title="Latest News">
            <div className={style["news-block"]}>
                <LatestNewsMainBlock 
                    date='25.06.2022'
                    title='New American films on the screen of Nizami Cinema Center'
                    src={img_1}
                    news='US-produced "Independence Day: Revival" at Nizami Cinema Center. "Neighbours. 2 in wartime ”films have been shown. "Independence Day: Revival" is based on a screenplay by Nicholas Wright and directed by Roland Emmerich in the genres of science fiction, adventure and war. Slogan: “We had 20 years to prepare.'
                />
                <ul className={style["news-block__group"]}>
                    {news.map(item => (
                        <NewsCard 
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        src={item.src} />
                    ))}
                </ul>
            </div>
        </Section>
    )
};

export default LatestNewsSection;