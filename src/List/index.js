import './style.css';

const List = ({ tasks, hideDoneTasks}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        className={`list__item ${task.done && hideDoneTasks
          ? "list__button--hidden"
          : ""}`
        }
      >
        <button className="list__button--toggle">
          {task.done ? "✔" : ""}
        </button>
        <span className={
          `${task.done ? "list__item--done" : ""}`
        }>
          {task.content}
        </span>
        <button className="list__button--toggle list__button--deleted">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;