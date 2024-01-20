import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice.js";
import { Button } from "../Buttons/styled.js";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = {};

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