import { configureStore } from "@reduxjs/toolkit";

import reducerToDo from "./reducers/todo";
import reducerFindToDo from "./reducers/find";
import reducerSort from "./reducers/sort";

export const store = configureStore({
  reducer: {
    todo: reducerToDo,
    find: reducerFindToDo,
    sort: reducerSort,
  },
});
