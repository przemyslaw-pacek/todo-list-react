import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={task ?
                    <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</> : null
                }
            />
        </Container>
    );
}

export default TaskPage;