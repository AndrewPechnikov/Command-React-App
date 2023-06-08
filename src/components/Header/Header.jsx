/* eslint-disable jsx-a11y/anchor-is-valid */
import Toggle from 'components/Toggle/Toggle';
import logo from '../../img/logo.png';
import loginIcon from '../../img/login-icon.png';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <a href="#"><img src={logo} alt="Company Logo" /></a>
            </div>
            <Toggle
                defaultToggled={false}
            />
            <div>
                <a href="#">
                    <img src={loginIcon} alt="White Man Icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;