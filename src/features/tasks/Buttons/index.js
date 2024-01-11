import { useSelector, useDispatch } from "react-redux";
import { Button } from "./styled.js";
import {
  toggleHideDone,
  setAllDone,
  selectTasksEmpty,
  selectEveryTaskDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice.js";

const Buttons = () => {
  const tasksEmpty = useSelector(selectTasksEmpty);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!tasksEmpty && (
        <span>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone</Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={everyTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </span>
      )}
    </>
  )
};

export default Buttons;