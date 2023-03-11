import React, { useState } from "react";

import styles from './form.module.scss';
import InputFrom from "../input/input";
import ItemTodo from "../item/item";
import Select from "../select/select";
import { todosSelectors } from "../../store/selectors/todo";
import { useSelector } from "react-redux";
import { AddToDoItem, ToggleToDo, DeletedToDo, filterToDo, sortToDo } from "../../store/actions/creates/todo";
import { useDispatch } from "react-redux";

const Form = () => {
    const [value, setValue] = useState('');
    const todoList = useSelector(todosSelectors)

    const dispatch = useDispatch(); 

    const handlerValueInput = (event) => {
        setValue(event.target.value)
    }

    const handlerClickAddTodo = () => {
        dispatch(AddToDoItem(value))
        setValue('');
    }

    const handlerToggleToDo = (id) => {
        dispatch(ToggleToDo(id))
    }

    const handlerDeletedTodo = (event, id) => {
        event.stopPropagation();
        dispatch(DeletedToDo(id));
    }

    const sortSelect = (sort) => {
        dispatch(sortToDo(sort));
    };

    const findToDo = (event) => {
        let {value} = event.target;

        dispatch(filterToDo(value));

    }

    return (
        <div className={styles.from}>
            <h1 className={styles.title}>Что сегодня будем делать?</h1>
            <InputFrom 
                placeholder="Filter Todo"
                onChange={findToDo}/>
            <div className={styles.box}>
                <InputFrom 
                    placeholder='Add Todo' 
                    value={value}
                    onChange={handlerValueInput}/>
                <button 
                    className={styles.button}
                    onClick={handlerClickAddTodo}
                    >Добавить
                </button>
            </div>
            <Select
                onChange={sortSelect}
                defaultOption='Сортировка по:'
                options={[
                    { value: '', name: 'Все'},
                    { value: true, name: 'Выполненные'},
                    { value: false, name: 'В процессе'},
                ]}/>
            <ul className={styles.content}>
                {todoList.map(todo => (
                    <ItemTodo 
                        onClick={handlerToggleToDo} 
                        key={todo.id} 
                        id={todo.id} 
                        title={todo.title} 
                        completed={todo.completed}
                        handlerDeleted={handlerDeletedTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default Form;