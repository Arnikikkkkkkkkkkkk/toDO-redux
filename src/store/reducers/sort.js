import { SORT_TODO } from "../actions/types/todo";

const initState = "";

function reducerSort(state = initState, action) {
  switch (action.type) {
    case SORT_TODO: {
      const { name } = action.payload;
      if (!name) return "";

      return name;
    }

    default:
      return state;
  }
}

export default reducerSort;
