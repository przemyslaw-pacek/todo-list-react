import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min.js";
import { Tasks, Item, ContentNavLink, Button } from "./styled.js";
import { selectTasksByQuery, selectHideDone, toggleTaskDone, deleteTask } from "../../tasksSlice.js";
import searchQueryParamName from "../searchQueryParamName.js";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Tasks>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <ContentNavLink done={task.done} to={`/zadania/${task.id}`}>
            {task.content}
          </ContentNavLink>
          <Button
            $deleted
            onClick={() => dispatch(deleteTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </Tasks>
  );
};

export default TaskList;