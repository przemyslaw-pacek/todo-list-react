import { Button } from "./styled.js";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  tasks.length > 0 && (
    <span>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
      <Button
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </span>
  )
);

export default Buttons;