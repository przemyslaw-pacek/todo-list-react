import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled.js";
import Button from "../Button"
import {
  toggleHideDone,
  setAllDone,
  selectTasksEmpty,
  selectEveryTaskDone,
  selectHideDone
} from "../../tasksSlice.js";

const Buttons = () => {
  const tasksEmpty = useSelector(selectTasksEmpty);
  const everyTaskDone = useSelector(selectEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!tasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={everyTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;