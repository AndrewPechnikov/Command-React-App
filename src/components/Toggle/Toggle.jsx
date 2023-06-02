import { useState } from "react";
import styles from './Toggle.module.scss';


const Toggle = ({ toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled);

    const callback = () => {
        toggle(!isToggled);
        onClick(!isToggled);
    };

    return (
        <div>
            <label>
                <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span />
            </label>

        </div>
    );
};

export default Toggle;

// https://webtips.dev/toggle-buttons-in-react