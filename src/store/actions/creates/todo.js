import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETED_TODO,
  FIND_TODO,
  SORT_TODO,
} from "../types/todo";

let nextToDoId = 0;

export const AddToDoItem = title => ({
  type: ADD_TODO,
  payload: {
    id: ++nextToDoId,
    title,
  },
});

export const ToggleToDo = id => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const DeletedToDo = id => ({
  type: DELETED_TODO,
  payload: { id },
});

export const filterToDo = name => ({
  type: FIND_TODO,
  payload: { name },
});

export const sortToDo = name => ({
  type: SORT_TODO,
  payload: { name },
});
