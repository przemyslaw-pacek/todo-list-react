import './style.css';

const List = ({ tasks, hideDoneTasks}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        className={`list__item ${task.done && hideDoneTasks
          ? "list__item--hidden"
          : ""}`
        }
      >
        <button className="list__button">
          {task.done ? "✔" : ""}
        </button>
        <span className={
          `${task.done ? "list__done" : ""}`
        }>
          {task.content}
        </span>
        <button className="list__button list__button--deleted">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;