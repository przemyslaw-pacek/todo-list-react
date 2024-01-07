import { useSelector, useDispatch } from "react-redux";
import { Tasks, Item, Content, Button } from "./styled.js";
import { selectTasks, toggleTaskDone, deleteTask } from "../tasksSlice.js";

const TaskList = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
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
          <Content done={task.done}>
            {task.content}
          </Content>
          <Button
            deleted
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