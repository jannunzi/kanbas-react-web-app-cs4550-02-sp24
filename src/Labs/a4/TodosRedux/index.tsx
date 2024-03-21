import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todosReducer";
function TodosRedux() {
  const { todos } = useSelector((store: any) => store.todosReducer);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ text: "New Todo" });
  return (
    <div>
      <h1>Todos Redux</h1>
      <ul>
        <li>
          <input
            value={todo.text}
            onChange={(e) => setTodo({ text: e.target.value })}
          />
          <button onClick={() => dispatch(addTodo(todo))}>Add</button>
        </li>
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodosRedux;
