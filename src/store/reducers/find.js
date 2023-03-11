import { FIND_TODO } from "../actions/types/todo";

const initState = "";

function reducerFindToDo(state = initState, action) {
  switch (action.type) {
    case FIND_TODO: {
      const { name } = action.payload;

      if (!name) {
        return "";
      }

      return name;
    }

    default:
      return state;
  }
}

export default reducerFindToDo;
