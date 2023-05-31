import { useState } from "react";

import Carousel from "components/Carousel/Carousel";
import styles from './Hero.module.scss';

const Hero = () => {
    const [background, setBackground] = useState(null);

    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${background})` }}>
            <Carousel setBackground={setBackground} />
        </section>
    );
};

export default Hero;