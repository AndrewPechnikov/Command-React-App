import styles from './CarouselButton.module.scss';

const CarouselButton = ({ label, setCategory, category }) => {
    const handleButtonClick = () => {
        setCategory(label);

    };

    return (
        <button
            onClick={() => handleButtonClick()}
            className={`${styles.carouselButton} ${category === label ? styles.active : ''}`}
            aria-pressed={category === label}
            aria-label={label}
        >
            {label}
        </button>
    );
};

export default CarouselButton;