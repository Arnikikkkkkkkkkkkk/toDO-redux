import { ADD_TODO, TOGGLE_TODO, DELETED_TODO } from "../actions/types/todo";

const initialState = {
  listId: [],
  byId: {},
};

function reducerToDo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, title } = action.payload;
      return {
        ...state,
        listId: [...state.listId, id],
        byId: {
          ...state.byId,
          [id]: {
            title,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetToDo = state.byId[id];

      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...targetToDo,
            completed: !targetToDo.completed,
          },
        },
      };
    }
    case DELETED_TODO: {
      const { id } = action.payload;

      const newState = Object.fromEntries(
        Object.entries(state.byId).filter(([key]) => Number(key) !== id)
      );

      return {
        ...state,
        listId: state.listId.filter(item => item !== id),
        byId: newState,
      };
    }
    default:
      return state;
  }
}

export default reducerToDo;
