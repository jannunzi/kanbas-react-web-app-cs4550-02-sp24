import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Redux" },
    { id: 3, text: "Build something fun!" },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        ...action.payload,
        id: Math.floor(Math.random() * 100),
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
