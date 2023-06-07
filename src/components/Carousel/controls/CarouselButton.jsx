import styles from './CarouselButton.module.scss';

const CarouselButton = ({ name, setCategory, category }) => {
    const handleButtonClick = () => {
        setCategory(name);

    };

    return (
        <button
            onClick={() => handleButtonClick()}
            className={`${styles.carouselButton} ${category === name ? styles.active : ''}`}
        >
            {name}
        </button>
    );
};

export default CarouselButton;