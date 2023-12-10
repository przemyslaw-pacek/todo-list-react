import { Tasks, Item, Content, Button } from "./styled.js";

const List = ({ tasks, hideDone, deleteTask, toggleTaskDone }) => (
  <Tasks>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
          >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.content}
        </Content>
        <Button
          deleted
          onClick={() => deleteTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </Tasks>
);

export default List;