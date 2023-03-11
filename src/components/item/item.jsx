import React from "react";

import styles from './item.module.scss';

const ItemTodo = ({id, title, onClick, completed, handlerDeleted}) => {
    return (
        <div onClick={() => {onClick(id)}} className={styles.item}>
            <h1 className={completed ? `${styles.title} ${styles.completed}`: `${styles.title}`}>{id}. {title}</h1>
            <button onClick={(event) => {handlerDeleted(event, id)}} className={styles.button}>Удалить</button>
        </div>
    )
}

export default ItemTodo;