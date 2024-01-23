import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice.js";
import Button from "../Button";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.tasks.loading);

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};

export default ExampleTasksButton;