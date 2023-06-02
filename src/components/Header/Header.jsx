import Toggle from 'components/Toggle/Toggle';
import logo from '../../img/logo.png';
import loginIcon from '../../img/login-icon.png';

import styles from './Header.module.scss';

const Header = () => {
    const logState = state => {
        console.log("Toggled:", state);
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <a href="#"><img src={logo} alt="Company Logo" /></a>

            </div>
            <Toggle
                toggled={true}
                onClick={logState} />
            <div>
                <a href="#">
                    <img src={loginIcon} alt="White Man Icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;