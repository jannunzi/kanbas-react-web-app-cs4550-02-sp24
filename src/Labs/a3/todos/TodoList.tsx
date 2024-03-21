import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
  const { count } = useSelector((store: any) => store.counter);
  return (
    <>
      <h3>Todo List</h3>
      <h2>Count: {count}</h2>
      <ul className="list-group">
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
    </>
  );
};
export default TodoList;
