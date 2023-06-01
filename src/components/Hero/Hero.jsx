import { useState } from "react";

import Carousel from "components/Carousel/Carousel";
import styles from './Hero.module.scss';

const Hero = () => {
    const [background, setBackground] = useState(null);
    const [activeBtn, setActiveBtn] = useState('soon');

    const handleButtonClick = (btn) => {
        setActiveBtn(btn);
    };


    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.heroWrapper}>
                <button
                    className={`${styles.heroButton} ${activeBtn === 'today' ? styles.active : ''}`}
                    onClick={() => handleButtonClick("today")}
                >
                    Today
                </button>
                <button
                    className={`${styles.heroButton} ${activeBtn === 'soon' ? styles.active : ''}`}
                    onClick={() => handleButtonClick("soon")}
                >
                    Soon
                </button>
            </div>
            <Carousel
                setBackground={setBackground}
                activeBtn={activeBtn}
            />
        </section>
    );
};

export default Hero;