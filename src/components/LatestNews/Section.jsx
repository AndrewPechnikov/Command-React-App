import styles from './Section.module.scss';

const Section = (props) => {
    return (
        <section className={styles.section}>
            <div className={styles.section__container}>
                <h3 className={styles.section__title}>{props.title}</h3>
                {props.children}
            </div>    
        </section>
    );
};

export default Section;
