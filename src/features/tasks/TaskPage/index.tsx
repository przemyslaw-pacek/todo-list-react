import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { useAppSelector } from "../../../hooks";

function TaskPage() {
  const { id } = useParams();
  const task = useAppSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😢"}
        body={
          !!task && (
            <>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;