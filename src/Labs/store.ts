import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./a4/CounterRedux/counterReducer";
import todosReducer from "./a4/TodosRedux/todosReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todosReducer,
  },
});

export default store;
