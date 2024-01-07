import { useSelector, useDispatch } from "react-redux";
import { Button } from "./styled.js";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice.js";

const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  
  return (
    tasks.length > 0 && (
      <span>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </span>
    )
  );
};

export default Buttons;