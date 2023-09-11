const Buttons = ({ tasks, hideDoneTasks }) => (
  tasks.length > 0 && (
    <span>
      <button className="list__button">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
      <button
        className="list__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </span>
  )
);

export default Buttons;