import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Form from "./Form";
import Search from "./Search";
import Buttons from "./Buttons";
import TaskList from "./TaskList";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
}

export default TasksPage;