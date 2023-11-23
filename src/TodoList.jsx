/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No To-Dos"}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo}
          // id={todo.id}
          // completed={todo.completed}
          // title={todo.title}
          // this the three dots work the same way as its just going over the id completed and title
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={todo.id} />

        );
      })}
    </ul>
  );
}
