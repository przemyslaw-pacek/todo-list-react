import './style.css';

const List = ({ tasks, hideDone, deleteTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item ${task.done && hideDone
          ? "list__item--hidden"
          : ""}`
        }
      >
        <button className="list__button" onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </button>
        <span className={
          `${task.done ? "list__done" : ""}`
        }>
          {task.content}
        </span>
        <button
          className="list__button list__button--deleted"
          onClick={() => deleteTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default List;