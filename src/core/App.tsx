import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import TasksPage from "../features/tasks/TasksPage";
import TaskPage from "../features/tasks/TaskPage";
import AuthorPage from "../features/author/AuthorPage";
import Navigation from "../Navigtion";
import { toTask, toTasks, toAuthor } from "./routes";

export default () => (
  <HashRouter basename="/todo-list-react">
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route exact path="/">
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
