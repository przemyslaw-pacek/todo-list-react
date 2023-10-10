import './style.css';

const Buttons = ({ tasks, hideDone }) => (
  tasks.length > 0 && (
    <span>
      <button className="buttons__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
      <button
        className="buttons__button"
        autofocus
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </span>
  )
);

export default Buttons;