import styles from '@/styles/Home.module.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

const Button = () => {     
    return (
        <div className={styles.thunder}>
            <FontAwesomeIcon icon={faBoltLightning} style={{width: '10px'}}/>
        </div>
    )
}

export default Button;