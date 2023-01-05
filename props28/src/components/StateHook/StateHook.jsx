import styles from './stateHook.module.scss';
import React, {useState} from 'react';


export default function StateHook(props) {

  const [pressed, setPressed] = useState(false);

        const handleChange = () => {
            setPressed(!pressed);
        }

        return (
            <button {...props} onClick={handleChange}>
                {pressed? "Pressed": "Click on me"}
            </button>
        );
    }


 