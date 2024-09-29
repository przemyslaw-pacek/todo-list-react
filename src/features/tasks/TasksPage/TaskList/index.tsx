import { Tasks, Item, ContentNavLink, Button } from "./styled";
import {
  selectTasksByQuery,
  selectHideDone,
  toggleTaskDone,
  deleteTask,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { toTask } from "../../../../routes";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useAppSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useAppSelector(selectHideDone);

  const dispatch = useAppDispatch();

  return (
    <Tasks>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button $toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <ContentNavLink $done={task.done} to={toTask({ id: task.id })}>
            {task.content}
          </ContentNavLink>
          <Button $deleted onClick={() => dispatch(deleteTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </Tasks>
  );
};

export default TaskList;
