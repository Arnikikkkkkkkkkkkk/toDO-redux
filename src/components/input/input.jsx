import React from "react";

import styles from './input.module.scss'

const InputFrom = ({placeholder, value, onChange}) => {
    return (
        <input 
            className={styles.input} 
            type="text" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
    )
}

export default InputFrom;