import { useState } from "react";
import styles from './Toggle.module.scss';


const Toggle = ({ toggled }) => {
    const [isToggled, toggle] = useState(toggled);

    const buttonClickHandle = () => {
        toggle(!isToggled);
    };

    return (
        <div className={styles.toggleBtn}>
            <label>
                <input type="checkbox" defaultChecked={isToggled} onClick={buttonClickHandle} />
                <span />
            </label>
        </div>
    );
};

export default Toggle;

// https://webtips.dev/toggle-buttons-in-react