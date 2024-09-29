import { Wrapper } from "./styled";
import Button from "../Button/index";
import {
  toggleHideDone,
  setAllDone,
  selectTasksEmpty,
  selectEveryTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const Buttons = () => {
  const tasksEmpty = useAppSelector(selectTasksEmpty);
  const everyTaskDone = useAppSelector(selectEveryTaskDone);
  const hideDone = useAppSelector(selectHideDone);

  const dispatch = useAppDispatch();

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
  );
};

export default Buttons;
