import Button from "../Button";
import { fetchExampleTasks } from "../../tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../../core/hooks";

const ExampleTasksButton = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(({ tasks }) => tasks.status === "loading");

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleTasksButton;
