/* eslint-disable react/prop-types */
export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return <li>
  {" "}
  {/*when needed to have a key make sure to do it this way because you need a unique key for it*/}
  <label>
    <input
      type="checkbox"
      checked={completed}
      onChange={(e) => toggleTodo(id, e.target.checked)}
    />
    {title}
  </label>
  <button
    onClick={() => deleteTodo(id)}
    className="btn btn-danger"
  >
    Delete
  </button>
</li>
}
