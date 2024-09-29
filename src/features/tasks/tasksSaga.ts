import {
  takeEvery,
  takeLatest,
  call,
  put,
  delay,
  select,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { Task } from "./types";

function* fetchExampleTasksHandler(): Generator<any, void, Task[]> {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler(): Generator<any, void, Task[]> {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
