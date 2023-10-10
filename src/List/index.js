import './style.css';

const List = ({ tasks, hideDone}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item ${task.done && hideDone
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